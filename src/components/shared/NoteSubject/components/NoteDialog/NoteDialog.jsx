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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { FcReading } from "react-icons/fc";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { z } from "zod";

const formSchema = z.object({
    note_id: z
        .string({ required_error: "Danh mục ghi chú là trường bắt buộc" })
        .min(1, "Danh mục ghi chú là trường bắt buộc!")
        .max(255, "Nhiều nhất 255 kí tự!"),
    detail_title: z
        .string({ required_error: "Tiêu đề ghi chú là trường bắt buộc!" })
        .min(2, "Ít nhất 2 kí tự!")
        .max(255, "Nhiều nhất 255 kí tự!"),
    detail_content: z
        .string({ required_error: "Nội dung ghi chú là trường bắt buộc!" })
        .min(2, "Ít nhất 2 kí tự!")
        .max(255, "Nhiều nhất 255 kí tự!"),
});

const NoteDialog = ({
    closeDialog,
    initialValues = {
        detail_id: null,
        note_id: "",
        detail_title: "",
        detail_content: "",
    },
    onSubmit = (values, reset) => {},
    noteId = "",
    isPending = false,
    cateNotes = [],
}) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
        values: initialValues,
    });

    const isMounted = useRef(true);

    useEffect(() => {
        if (!noteId || !isMounted.current) return;

        form.setValue("note_id", `${noteId}`, { shouldValidate: true });

        isMounted.current = false;

        return () => {
            isMounted.current = false;
        };
    }, [noteId, isMounted.current]);

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;
        const payload = noteId
            ? { ...values, note_id: noteId, detail_id: initialValues.detail_id }
            : {
                  ...values,
                  note_id: +values.note_id,
                  detail_id: initialValues.detail_id,
              };

        onSubmit(payload, form.reset);
    };

    return (
        <div className="fixed top-0 left-0 bottom-0 bg-black bg-opacity-50 z-30 max-w-[600px]">
            <div className="fixed inset-0 bg-black bg-opacity-50 z-30"></div>

            <div className="bg-white w-full h-full p-6 z-30 relative text-[#34447c]">
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={closeDialog}
                        className="text-xl text-red-500 shadow-md border border-red-500 rounded-lg p-1"
                    >
                        <IoReturnUpBackOutline />
                    </button>
                    <h2 className="text-md font-bold flex items-center">
                        <FcReading className="mr-2 text-2xl" /> Tạo Ghi Chú
                    </h2>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                        <p className="mb-4">
                            Bạn có thể tạo ghi chú đối với những phần quan trọng trong lúc học và
                            luyện thi TOEIC.
                        </p>

                        {cateNotes.length > 0 && (
                            <FormField
                                control={form.control}
                                name="note_id"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="mb-4">
                                            <FormLabel>
                                                Danh mục ghi chú{" "}
                                                <span className="text-red-500">*</span>
                                            </FormLabel>

                                            <FormControl>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Chọn danh mục ghi chú" />
                                                    </SelectTrigger>

                                                    <SelectContent>
                                                        {cateNotes.map((note, index) => (
                                                            <SelectItem
                                                                key={index}
                                                                value={`${note.note_id}`}
                                                            >
                                                                {note.note_name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                        )}

                        <FormField
                            control={form.control}
                            name="detail_title"
                            render={({ field }) => {
                                return (
                                    <FormItem className="mb-4">
                                        <FormLabel className="text-right">
                                            Tiêu đề <span className="text-red-500">*</span>
                                        </FormLabel>

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
                                );
                            }}
                        />

                        <FormField
                            control={form.control}
                            name="detail_content"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>
                                        Nội dung <span className="text-red-500">*</span>
                                    </FormLabel>

                                    <FormControl>
                                        <Textarea placeholder="Nhập nội dung" rows={2} {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end mt-5">
                            <LoadingButton
                                isLoading={isPending}
                                type="submit"
                                className="bg-[#34447c] text-white"
                            >
                                {initialValues.detail_id ? "Lưu thay đổi" : "Thêm mới"}
                            </LoadingButton>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default NoteDialog;
