import { Button } from "@/components/ui/button";
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
    partName: z
        .string()
        .min(4, "Mật khẩu ít nhất 4 kí tự!")
        .max(50, "Mật khẩu nhiều nhất 50 kí tự!"),
});

const DialogAddPart = ({
    open,
    onClose,
    initialValues = {
        partId: "",
        partName: "",
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
