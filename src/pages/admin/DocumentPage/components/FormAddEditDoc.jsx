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
import { documentTypeLabels, documentTypes } from "@/constants/document.constant";
import uploadService from "@/services/upload.service";
import { errorMessage } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
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
    doc_link: z.string().url("Link không hợp lệ").nullable().optional(),
    doc_text: z.string().nullable().optional(),
});

const FormAddEditDoc = ({
    initialValues = {
        doc_title: "",
        doc_desc: "",
        doc_link: null,
        doc_text: "",
        doc_type: "",
        doc_id: null,
        doc_video: null,
        doc_audio: null,
        doc_pdf: null,
        doc_thumbnail: null,
    },
    onSubmit,
    isPending = false,
}) => {
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);

    const [media, setMedia] = useState(() => {
        return {
            doc_video: initialValues.doc_video,
            doc_audio: initialValues.doc_audio,
            doc_pdf: initialValues.doc_pdf,
            doc_thumbnail: initialValues.doc_thumbnail,
        };
    });

    const isMounted = useRef(true);

    useEffect(() => {
        if (!isMounted.current) return;
        if (!initialValues.doc_id) return;

        setMedia((media) => ({
            ...media,
            doc_video: initialValues.doc_video,
            doc_audio: initialValues.doc_audio,
            doc_pdf: initialValues.doc_pdf,
            doc_thumbnail: initialValues.doc_thumbnail,
        }));

        isMounted.current = false;

        return () => {
            isMounted.current = false;
        };
    }, [isMounted.current, initialValues.doc_id]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
        values: initialValues,
    });

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;
        onSubmit({ doc_id: initialValues.doc_id, ...values, ...media });
    };

    const handleChangeFileAudio = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const payload = {
            file,
            folder: "toeic/documents/audios",
        };

        try {
            setIsLoadingUpload(true);
            const response = await uploadService.uploadAudio(payload);
            setMedia((media) => ({ ...media, doc_audio: response.metadata }));
        } catch (error) {
            console.log(`upload error:::`, error);
            errorMessage(error);
        } finally {
            setIsLoadingUpload(false);
        }
    };

    const handleChangeFileImage = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const payload = {
            file,
            folder: "toeic/documents/images",
        };

        try {
            setIsLoadingUpload(true);
            const response = await uploadService.uploadImage(payload);
            setMedia((media) => ({ ...media, doc_thumbnail: response.metadata }));
        } catch (error) {
            console.log(`upload error:::`, error);
            errorMessage(error);
        } finally {
            setIsLoadingUpload(false);
        }
    };

    const handleChangeFileVideo = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const payload = {
            file,
        };

        try {
            setIsLoadingUpload(true);
            const response = await uploadService.uploadVideo(payload);
            setMedia((media) => ({ ...media, doc_video: response.metadata }));
        } catch (error) {
            console.log(`upload error:::`, error);
            errorMessage(error);
        } finally {
            setIsLoadingUpload(false);
        }
    };

    const handleChangeFilePDF = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const payload = {
            file,
        };

        try {
            setIsLoadingUpload(true);
            const response = await uploadService.uploadPdf(payload);
            setMedia((media) => ({ ...media, doc_pdf: response.metadata }));
        } catch (error) {
            console.log(`upload error:::`, error);
            errorMessage(error);
        } finally {
            setIsLoadingUpload(false);
        }
    };

    return (
        <Form {...form}>
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

                {form.watch("doc_type") === documentTypes.audio ? (
                    <FormItem className="mt-4 relative">
                        <FormLabel className="text-right">Upload audio tài liệu</FormLabel>

                        <FormControl>
                            <Input
                                type="file"
                                onChange={handleChangeFileAudio}
                                className="col-span-3"
                                accept="audio/*"
                            />
                        </FormControl>
                    </FormItem>
                ) : form.watch("doc_type") === documentTypes.video ? (
                    <Fragment>
                        <FormItem className="mt-4 relative">
                            <FormLabel className="text-right">Upload video</FormLabel>

                            <FormControl>
                                <Input
                                    type="file"
                                    onChange={handleChangeFileVideo}
                                    className="col-span-3"
                                    accept="video/*"
                                />
                            </FormControl>
                        </FormItem>

                        <FormField
                            control={form.control}
                            name="doc_link"
                            render={({ field }) => (
                                <FormItem className="mt-4 relative">
                                    <FormLabel className="text-right">Link video</FormLabel>

                                    <FormControl>
                                        <Input type="text" placeholder="Link video" {...field} />
                                    </FormControl>

                                    <FormMessage />

                                    <FormDescription>
                                        Chỉ chọn một trong 2 cách dành cho tài liệu video
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                    </Fragment>
                ) : form.watch("doc_type") === documentTypes.document ? (
                    <Fragment>
                        <FormItem className="mt-4 relative">
                            <FormLabel className="text-right">Upload tài liệu sách PDF</FormLabel>

                            <FormControl>
                                <Input
                                    type="file"
                                    onChange={handleChangeFilePDF}
                                    className="col-span-3"
                                    accept="application/pdf"
                                />
                            </FormControl>
                        </FormItem>

                        <FormField
                            control={form.control}
                            name="doc_link"
                            render={({ field }) => (
                                <FormItem className="mt-4 relative">
                                    <FormLabel className="text-right">Link tài liệu PDF</FormLabel>

                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Link tài liệu PDF"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />

                                    <FormDescription>
                                        Chỉ chọn một trong 2 cách dành cho tài liệu PDF
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                    </Fragment>
                ) : form.watch("doc_type") === documentTypes.text ? (
                    <FormField
                        control={form.control}
                        name="doc_text"
                        render={({ field }) => (
                            <FormItem className="mt-4 relative">
                                <FormLabel className="text-right">Nội dung bài viết</FormLabel>

                                <Editor placeholder="Nội dung bài viết..." {...field} />

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ) : null}

                <FormItem className="mt-4 relative">
                    <FormLabel className="text-right">Upload ảnh đại diện</FormLabel>

                    <FormControl>
                        <Input
                            type="file"
                            onChange={handleChangeFileImage}
                            className="col-span-3"
                            accept="image/*"
                        />
                    </FormControl>

                    {media.doc_thumbnail?.url ? (
                        <div className="mt-4">
                            <img
                                src={media.doc_thumbnail?.url}
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

                <LoadingButton
                    isLoading={isPending || isLoadingUpload}
                    type="submit"
                    className="mt-8"
                >
                    {initialValues.doc_id ? "Lưu thay đổi" : "Thêm mới"}
                </LoadingButton>
            </form>
        </Form>
    );
};

FormAddEditDoc.displayName = "FormAddEditDoc";

export default FormAddEditDoc;
