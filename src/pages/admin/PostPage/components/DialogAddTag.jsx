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
    tagName: z.string().min(4, "Ít nhất 4 kí tự!").max(255, "Nhiều nhất 255 kí tự!"),
});

const DialogAddTag = ({
    open,
    onClose,
    initialValues = {
        tagId: "",
        tagName: "",
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
                        <DialogTitle>Thêm tag</DialogTitle>
                        <DialogDescription>
                            Điền đầy đủ thông tin trước khi tạo tag.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={form.handleSubmit(handleOnSubmit)} className="grid gap-4 py-4">
                        <FormField
                            control={form.control}
                            name="tagName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-right">Tên tag</FormLabel>

                                    <FormControl>
                                        <Input
                                            autoFocus
                                            placeholder="Nhập tag..."
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
                                {initialValues.tagId ? "Lưu thay đổi" : "Thêm mới"}
                            </LoadingButton>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </Form>
    );
};

DialogAddTag.displayName = "DialogAddTag";

export default memo(DialogAddTag);
