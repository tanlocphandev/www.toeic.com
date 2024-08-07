import LinearProgress from "@/components/shared/LinearProgress";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useErrorMessage from "@/hooks/useErrorMessage";
import uploadService from "@/services/upload.service";
import { errorMessage } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { memo, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    typeName: z.string().min(4, "Ít nhất 4 kí tự!").max(255, "Nhiều nhất 255 kí tự!"),
    partId: z.string({ required_error: "Part là trường bắt buộc" }).min(1, "Vui lòng chọn part"),
    description: z.string().max(255, "Nhiều nhất 255 kí tự!").optional().nullable(),
});

const DialogAddQuestionType = ({
    open,
    onClose,
    initialValues = {
        partId: "",
        typeId: "",
        typeName: "",
        description: "",
        thumb: null,
    },
    isPending = false,
    onSubmit = (values) => {},
    error = null,
    dataPart = [],
}) => {
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);
    const [thumb, setThumb] = useState(initialValues.thumb);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    });

    const isMounted = useRef(true);

    useEffect(() => {
        if (!isMounted.current || !initialValues.typeId || !initialValues.thumb) return;

        setThumb(initialValues.thumb);

        isMounted.current = false;

        return () => {
            isMounted.current = false;
        };
    }, [isMounted.current, initialValues.typeId, initialValues.thumb]);

    useErrorMessage({ errors: error, form: form });

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;
        onSubmit({ ...values, thumb });
    };

    const handleChangeFileImage = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const payload = {
            file,
            folder: "toeic/question-types/images",
        };

        try {
            setIsLoadingUpload(true);
            const response = await uploadService.uploadImage(payload);
            setThumb(response.metadata);
        } catch (error) {
            console.log(`upload error:::`, error);
            errorMessage(error);
        } finally {
            setIsLoadingUpload(false);
        }
    };

    return (
        <Form {...form}>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Thêm loại câu hỏi</DialogTitle>
                        <DialogDescription>
                            Điền đầy đủ thông tin trước khi tạo loại câu hỏi.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="max-h-[70vh]">
                        <ScrollArea className="h-full">
                            <form
                                onSubmit={form.handleSubmit(handleOnSubmit)}
                                className="grid gap-4 py-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="partId"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Part <span className="text-red-500">*</span>
                                                </FormLabel>

                                                <FormControl>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Chọn part" />
                                                        </SelectTrigger>

                                                        <SelectContent>
                                                            {dataPart?.map((part, index) => (
                                                                <SelectItem
                                                                    key={index}
                                                                    value={`${part?.part_id}`}
                                                                >
                                                                    {part?.part_name}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />

                                <FormField
                                    control={form.control}
                                    name="typeName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-right">Tên type</FormLabel>

                                            <FormControl>
                                                <Input
                                                    autoFocus
                                                    placeholder="Nhập type..."
                                                    className="col-span-3"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mô tả ngắn</FormLabel>

                                            <FormControl>
                                                <Textarea
                                                    placeholder="Nhập mô tả ngắn..."
                                                    rows={2}
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormItem className="relative">
                                    <FormLabel className="text-right">
                                        Upload ảnh đại diện
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            type="file"
                                            onChange={handleChangeFileImage}
                                            className="col-span-3"
                                            accept="image/*"
                                        />
                                    </FormControl>

                                    {thumb?.url ? (
                                        <div className="mt-4">
                                            <img
                                                src={thumb?.url}
                                                alt="Preview"
                                                className="w-40 h-40 rounded-sm object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : null}
                                </FormItem>

                                {isLoadingUpload ? (
                                    <div className="mt-2 w-full">
                                        <LinearProgress isLoading={true} />
                                    </div>
                                ) : null}

                                <DialogFooter>
                                    <LoadingButton
                                        isLoading={isPending || isLoadingUpload}
                                        type="submit"
                                    >
                                        {initialValues.typeId ? "Lưu thay đổi" : "Thêm mới"}
                                    </LoadingButton>
                                </DialogFooter>
                            </form>
                        </ScrollArea>
                    </div>
                </DialogContent>
            </Dialog>
        </Form>
    );
};

DialogAddQuestionType.displayName = "DialogAddQuestionType";

export default memo(DialogAddQuestionType);
