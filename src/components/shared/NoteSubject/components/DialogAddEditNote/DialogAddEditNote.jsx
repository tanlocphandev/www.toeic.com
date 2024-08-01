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
import useErrorMessage from "@/hooks/useErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    note_name: z
        .string({ required_error: "Tên mục ghi chú là trường bắt buộc!" })
        .min(2, "Ít nhất 2 kí tự!")
        .max(255, "Nhiều nhất 255 kí tự!"),
});

const DialogAddEditNote = ({
    open,
    onClose,
    initialValues = {
        note_id: null,
        note_name: "",
    },
    isPending = false,
    onSubmit = (values, resetCallback) => {},
    error = null,
}) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
        values: initialValues,
    });

    useErrorMessage({ errors: error, form: form });

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;
        onSubmit(values, form.reset);
    };

    return (
        <Form {...form}>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {initialValues.note_id ? "Thay đổi mục ghi chú" : "Tạo mục ghi chú"}
                        </DialogTitle>
                        <DialogDescription>Vui lòng điền đầy đủ thông tin!</DialogDescription>
                    </DialogHeader>

                    <form onSubmit={form.handleSubmit(handleOnSubmit)} className="grid gap-4 py-4">
                        <FormField
                            control={form.control}
                            name="note_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-right">Tên mục ghi chú</FormLabel>

                                    <FormControl>
                                        <Input
                                            autoFocus
                                            placeholder="Nhập mục ghi chú..."
                                            className="col-span-3"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <LoadingButton isLoading={isPending} type="submit">
                                {initialValues.note_id ? "Lưu thay đổi" : "Thêm mới"}
                            </LoadingButton>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </Form>
    );
};

DialogAddEditNote.displayName = "DialogAddEditNote";

export default memo(DialogAddEditNote);
