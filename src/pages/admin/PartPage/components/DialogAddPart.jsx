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
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { Textarea } from "@/components/ui/textarea";
import useErrorMessage from "@/hooks/useErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    partName: z
        .string({ required_error: "Tên part là trường bắt buộc" })
        .min(4, "Ít nhất 4 kí tự!")
        .max(50, "Nhiều nhất 50 kí tự!"),
    description: z.string().max(255, "Nhiều nhất 255 kí tự!").optional().nullable(),
    partNumber: z.coerce
        .number({ required_error: "Đây là trường bắt buộc" })
        .min(1, "Nhỏ nhất là 1"),
});

const DialogAddPart = ({
    open,
    onClose,
    initialValues = {
        partNumber: 0,
        partId: "",
        partName: "",
        description: "",
    },
    isPending = false,
    onSubmit = (values) => {},
    error = null,
}) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    });

    useErrorMessage({ errors: error, form: form });

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Thêm part</DialogTitle>
                        <DialogDescription>
                            Điền đầy đủ thông tin trước khi tạo part.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={form.handleSubmit(handleOnSubmit)} className="grid gap-4 py-4">
                        <FormField
                            control={form.control}
                            name="partName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-right">Tên part</FormLabel>

                                    <FormControl>
                                        <Input
                                            autoFocus
                                            placeholder="Nhập part..."
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
                            name="partNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-right">Số part</FormLabel>

                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Nhập số part..."
                                            className="col-span-3"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormDescription>
                                        Định dạng: <code>1</code>
                                    </FormDescription>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>Giới thiệu</FormLabel>

                                    <FormControl>
                                        <Textarea
                                            placeholder="Nhập giới thiệu..."
                                            rows={2}
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <LoadingButton isLoading={isPending} type="submit">
                                {initialValues.partId ? "Lưu thay đổi" : "Thêm mới"}
                            </LoadingButton>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </Form>
    );
};

DialogAddPart.displayName = "DialogAddPart";

export default memo(DialogAddPart);
