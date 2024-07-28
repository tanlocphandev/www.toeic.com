import Editor from "@/components/shared/Editor";
import LinearProgress from "@/components/shared/LinearProgress";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toastConfigError } from "@/configs/toast.config";
import { documentTypeLabels } from "@/constants/document.constant";
import DialogReviewScore from "@/pages/admin/ScorePage/components/DialogReviewScore";
import uploadService from "@/services/upload.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
    doc_title: z
        .string({ required_error: "Tiêu đề là trường bắt buộc" })
        .min(2, "Ít nhất 2 kí tự!")
        .max(255, "Nhiều nhất 255 kí tự!"),
    doc_desc: z
        .string({ required_error: "Mô tả là trường bắt buộc" })
        .min(2, "Ít nhất 2 kí tự!")
        .max(255, "Nhiều nhất 255 kí tự!"),
    doc_type: z
        .string({ required_error: "Loại tài liệu là trường bắt buộc" })
        .min(2, "Ít nhất 2 kí tự!")
        .max(255, "Nhiều nhất 255 kí tự!"),
});

const FormAddEditDoc = ({
    initialValues = { scoreName: "", id: null },
    onSubmit,
    isPending = false,
}) => {
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState(null);
    const [value, setValue] = useState("");

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
        values: initialValues,
    });

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;
        onSubmit({ ...values, scores: response });
    };

    const handleChangeFile = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const payload = {
            file,
        };

        try {
            setIsLoadingUpload(true);
            const response = await uploadService.uploadScore(payload);
            setResponse(response.metadata);
        } catch (error) {
            console.log(`upload error:::`, error);
            toast.error("Upload file thất bại", toastConfigError);
        } finally {
            setIsLoadingUpload(false);
        }
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleChangeEditor = (value) => {
        console.log(`values:::`, value);
        setValue(value);
    };

    return (
        <Form {...form}>
            <DialogReviewScore data={response} open={open} onClose={handleCloseDialog} />

            <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                <FormField
                    control={form.control}
                    name="doc_title"
                    render={({ field }) => (
                        <FormItem className="mb-2">
                            <FormLabel>Tiêu đề</FormLabel>

                            <FormControl>
                                <Input placeholder="Nhập tiêu đề" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="doc_desc"
                    render={({ field }) => (
                        <FormItem className="mb-2">
                            <FormLabel>Mô tả ngắn</FormLabel>

                            <FormControl>
                                <Textarea placeholder="Nhập mô tả ngắn" rows={2} {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="doc_type"
                    render={({ field }) => (
                        <FormItem className="mb-2">
                            <FormLabel>Loại tài liệu</FormLabel>

                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Chọn loại tài liệu" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {Object.entries(documentTypeLabels).map(([key, value]) => (
                                            <SelectItem key={key} value={key}>
                                                {value}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Audio */}
                <FormItem className="mt-4 relative">
                    <FormLabel className="text-right">Upload audio tài liệu</FormLabel>

                    <FormControl>
                        <Input
                            type="file"
                            onChange={handleChangeFile}
                            className="col-span-3"
                            accept="audio/*"
                        />
                    </FormControl>
                </FormItem>

                {/* Document */}
                <FormItem className="mt-4 relative">
                    <FormLabel className="text-right">Upload tài liệu sách PDF</FormLabel>

                    <FormControl>
                        <Input
                            type="file"
                            onChange={handleChangeFile}
                            className="col-span-3"
                            accept="application/pdf"
                        />
                    </FormControl>
                </FormItem>

                {/* Video */}
                <FormItem className="mt-4 relative">
                    <FormLabel className="text-right">Upload video</FormLabel>

                    <FormControl>
                        <Input
                            type="file"
                            onChange={handleChangeFile}
                            className="col-span-3"
                            accept="application/pdf"
                        />
                    </FormControl>
                </FormItem>

                <FormItem className="mt-4 relative">
                    <FormLabel className="text-right">Link video</FormLabel>

                    <FormControl>
                        <Input type="text" placeholder="Link video" className="col-span-3" />
                    </FormControl>

                    <FormDescription>
                        Chỉ chọn một trong 2 cách dành cho tài liệu video
                    </FormDescription>
                </FormItem>

                {/* Text */}
                <FormItem className="mt-4 relative">
                    <FormLabel className="text-right">Nội dung bài viết</FormLabel>

                    <Editor value={value} onChange={handleChangeEditor} />

                    <div
                        id="editor"
                        className="ql-editor"
                        dangerouslySetInnerHTML={{ __html: value }}
                    ></div>
                </FormItem>

                {isLoadingUpload ? (
                    <div className="mt-2 w-full">
                        <LinearProgress isLoading={true} />
                    </div>
                ) : null}

                <LoadingButton
                    isLoading={isPending || isLoadingUpload}
                    type="submit"
                    className="mt-8"
                >
                    {initialValues.id ? "Lưu thay đổi" : "Thêm mới"}
                </LoadingButton>
            </form>
        </Form>
    );
};

FormAddEditDoc.displayName = "FormAddEditDoc";

export default FormAddEditDoc;
