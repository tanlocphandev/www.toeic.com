import DialogSeeQuestion from "@/components/shared/dialog/DialogSeeQuestion";
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
import uploadService from "@/services/upload.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
    testName: z
        .string({ required_error: "Đây là trường bắt buộc" })
        .min(2, "Ít nhất 2 kí tự!")
        .max(255, "Nhiều nhất 255 kí tự!"),
    testOfYear: z.coerce
        .number({ required_error: "Đây là trường bắt buộc" })
        .min(2000, "Năm ít nhất là 2000!")
        .max(3000, "Nhiều nhất là năm 3000!"),
    testNoOfYear: z.coerce
        .number({ required_error: "Đây là trường bắt buộc" })
        .min(1, "Bài thi có vị trí bắt đầu là 1!")
        .max(12, "Bài thi có vị trí lớn nhất là 12!"),
    duration: z.coerce
        .number({ required_error: "Đây là trường bắt buộc" })
        .min(120, "Ít nhất 120 phút"),
});

const FormAddEditTest = ({
    initialValues = {
        testName: "",
        testOfYear: 0,
        testNoOfYear: 1,
        duration: 120,
    },
    onSubmit = (values) => {},
    error = null,
    isLoading = false,
}) => {
    const [file, setFile] = useState(undefined);
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    });

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;

        console.log(`response:::`, response);

        if (!response?.results || !response?.parts) {
            toast.error("Vui lòng upload câu hỏi!", toastConfigError);
            return;
        }

        onSubmit({
            ...values,
            parts: response.parts,
            questions: response.results,
        });
    };

    const handleChangeFile = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        setFile(file);

        const { testOfYear, testNoOfYear } = form.getValues();

        const payload = {
            testOfYear,
            testNoOfYear,
            file,
        };

        try {
            setIsLoadingUpload(true);
            const response = await uploadService.uploadQuestion(payload);
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
            {response ? (
                <DialogSeeQuestion
                    totalAnswer={response?.totalAnswer}
                    data={response?.results}
                    parts={response?.parts}
                    open={open}
                    onClose={handleCloseDialog}
                />
            ) : null}

            <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                <FormField
                    control={form.control}
                    name="testName"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="text-right">Tên bài thi</FormLabel>

                                <FormControl>
                                    <Input
                                        autoFocus
                                        placeholder="Nhập tên bài thi..."
                                        className="col-span-3"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="testOfYear"
                    render={({ field }) => {
                        return (
                            <FormItem className="mt-2">
                                <FormLabel className="text-right">Năm ra đề thi</FormLabel>

                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Năm ra đề thi là năm nào?..."
                                        className="col-span-3"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="testNoOfYear"
                    render={({ field }) => {
                        return (
                            <FormItem className="mt-2">
                                <FormLabel className="text-right">
                                    Bài thi thứ mấy trong năm
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Đây là bài thi thứ mấy trong năm?..."
                                        className="col-span-3"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => {
                        return (
                            <FormItem className="mt-2">
                                <FormLabel className="text-right">Tổng thời gian thi</FormLabel>

                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Nhập tổng thời thi..."
                                        className="col-span-3"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormItem className="mt-2 relative">
                    <FormLabel className="text-right">Upload danh sách câu hỏi</FormLabel>

                    <FormControl>
                        <Input
                            type="file"
                            onChange={handleChangeFile}
                            className="col-span-3"
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        />
                    </FormControl>

                    {isLoadingUpload ? (
                        <div className="absolute top-0 w-full">
                            <div className="relative w-full h-1 mt-4 bg-primary/20 overflow-hidden rounded-full">
                                <div className="absolute animate-progress-bar top-0 left-0 h-full w-full bg-primary" />
                            </div>
                        </div>
                    ) : null}
                </FormItem>

                {response ? (
                    <div className="mt-1">
                        <Button type="button" variant="destructive" onClick={() => setOpen(true)}>
                            Xem câu hỏi
                        </Button>
                    </div>
                ) : null}

                <LoadingButton
                    className="mt-5"
                    isLoading={isLoading || isLoadingUpload}
                    type="submit"
                >
                    {initialValues?.id ? "Lưu thay đổi" : "Thêm mới"}
                </LoadingButton>
            </form>
        </Form>
    );
};

export default FormAddEditTest;
