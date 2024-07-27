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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    number_correct_answer: z.coerce
        .number({ required_error: "Đây là trường bắt buộc" })
        .min(0, "Năm ít nhất là 0 câu đúng!")
        .max(100, "Nhiều nhất là 100 câu đúng!"),
    listening_score: z.coerce
        .number({ required_error: "Đây là trường bắt buộc" })
        .min(5, "Điểm nghe ít nhất là 5 điểm!")
        .max(495, "Nhiều nhất là 495 điểm!"),
    reading_score: z.coerce
        .number({ required_error: "Đây là trường bắt buộc" })
        .min(5, "Điểm đọc ít nhất là 5 điểm!")
        .max(495, "Nhiều nhất là 495 điểm!"),
});

const DialogAddEditScoreDetails = ({
    open = false,
    onClose = () => {},
    onSubmit = (values) => {},
    isPending = false,
    initialValues = {
        number_correct_answer: 0,
        listening_score: 0,
        reading_score: 0,
        details_id: 0,
    },
}) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
        values: initialValues,
    });

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;
        onSubmit({ details_id: initialValues.details_id, ...values });
    };

    if (!open) return null;

    return (
        <Form {...form}>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {initialValues.details_id ? "Cập nhật điểm" : "Thêm điểm"}
                        </DialogTitle>

                        <DialogDescription>
                            Điền đầy đủ thông tin trước khi lưu điểm vào bảng.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={form.handleSubmit(handleOnSubmit)} className="grid gap-4 py-4">
                        <FormField
                            control={form.control}
                            name="number_correct_answer"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-right">Số câu đúng</FormLabel>

                                    <FormControl>
                                        <Input
                                            readOnly
                                            type="number"
                                            placeholder="Nhập số câu đúng..."
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
                            name="listening_score"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-right">Điểm nghe</FormLabel>

                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Nhập điểm..."
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
                            name="reading_score"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-right">Điểm đọc</FormLabel>

                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Nhập điểm..."
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
                                {initialValues.details_id ? "Lưu thay đổi" : "Thêm mới"}
                            </LoadingButton>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </Form>
    );
};

export default DialogAddEditScoreDetails;
