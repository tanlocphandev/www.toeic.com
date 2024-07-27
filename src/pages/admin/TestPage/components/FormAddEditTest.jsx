import DialogSeeQuestion from "@/components/shared/dialog/DialogSeeQuestion";
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

const audioTest2020 = {
    asset_id: "3583ac2b504df716687a66625270787e",
    duration: 2760.7565,
    format: "mp3",
    public_id: "audio/toeic/2020/test1",
    resource_type: "video",
    secure_url:
        "https://res.cloudinary.com/dtsq971i7/video/upload/v1722090709/audio/toeic/2020/test1.mp3",
    url: "http://res.cloudinary.com/dtsq971i7/video/upload/v1722090709/audio/toeic/2020/test1.mp3",
};

const FormAddEditTest = ({
    initialValues = {
        test_id: null,
        testName: "",
        testOfYear: 0,
        testNoOfYear: 1,
        duration: 120,
    },
    onSubmit = (values) => {},
    error = null,
    isLoading = false,
}) => {
    const [audioResponse, setAudioResponse] = useState(null);
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

        if (initialValues.test_id) {
            onSubmit({ ...values, test_id: initialValues.test_id, audio: audioResponse });
            return;
        }

        if (!response?.results || !response?.parts) {
            toast.error("Vui lòng upload câu hỏi!", toastConfigError);
            return;
        }

        onSubmit({
            ...values,
            audio: audioResponse,
            parts: response.parts,
            questions: response.results,
        });
    };

    const handleChangeFile = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

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

    const handleChangeFileAudio = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const { testOfYear, testNoOfYear } = form.getValues();

        const payload = {
            testOfYear,
            testNoOfYear,
            file,
        };

        try {
            setIsLoadingUpload(true);
            const response = await uploadService.uploadAudio(payload);

            console.log("response", response);

            setAudioResponse(response.metadata);
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

                {initialValues.test_id ? null : (
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
                    </FormItem>
                )}

                {response ? (
                    <div className="mt-1">
                        <Button type="button" variant="destructive" onClick={() => setOpen(true)}>
                            Xem câu hỏi
                        </Button>
                    </div>
                ) : null}

                <FormItem className="mt-3 relative">
                    <FormLabel className="text-right">Upload audio danh cho phần thi</FormLabel>

                    <FormControl>
                        <Input type="file" onChange={handleChangeFileAudio} accept="audio/*" />
                    </FormControl>
                </FormItem>

                <div className="mt-2">
                    <LinearProgress isLoading={isLoadingUpload} />
                </div>

                <LoadingButton
                    className="mt-5"
                    isLoading={isLoading || isLoadingUpload}
                    type="submit"
                >
                    {initialValues?.test_id ? "Lưu thay đổi" : "Thêm mới"}
                </LoadingButton>
            </form>
        </Form>
    );
};

export default FormAddEditTest;
