import LinearProgress from "@/components/shared/LinearProgress";
import { Button } from "@/components/ui/button";
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
import { toastConfigError } from "@/configs/toast.config";
import DialogReviewScore from "@/pages/admin/ScorePage/components/DialogReviewScore";
import uploadService from "@/services/upload.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
    scoreName: z
        .string({ required_error: "Đây là trường bắt buộc" })
        .min(2, "Ít nhất 2 kí tự!")
        .max(255, "Nhiều nhất 255 kí tự!"),
});

const FormAddEditScore = ({
    initialValues = { scoreName: "", id: null },
    onSubmit,
    isPending = false,
}) => {
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState(null);

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

    return (
        <Form {...form}>
            <DialogReviewScore data={response} open={open} onClose={handleCloseDialog} />

            <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                <FormField
                    control={form.control}
                    name="scoreName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên bảng điểm</FormLabel>

                            <FormControl>
                                <Input placeholder="Nhập tên bảng điểm" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                {initialValues.id ? null : (
                    <FormItem className="mt-4 relative">
                        <FormLabel className="text-right">Upload bảng điểm câu hỏi</FormLabel>

                        <FormControl>
                            <Input
                                type="file"
                                onChange={handleChangeFile}
                                className="col-span-3"
                                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            />
                        </FormControl>

                        {isLoadingUpload ? (
                            <div className="absolute top-[15px] w-full">
                                <LinearProgress isLoading={true} />
                            </div>
                        ) : null}
                    </FormItem>
                )}

                {response ? (
                    <div className="mt-1">
                        <Button type="button" variant="destructive" onClick={() => setOpen(true)}>
                            Xem bảng điểm
                        </Button>
                    </div>
                ) : null}

                <LoadingButton isLoading={isPending} type="submit" className="mt-8">
                    {initialValues.id ? "Lưu thay đổi" : "Thêm mới"}
                </LoadingButton>
            </form>
        </Form>
    );
};

FormAddEditScore.displayName = "FormAddEditScore";

export default FormAddEditScore;
