import InputPassword from "@/components/shared/InputPassword";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { GENDER_LABELS } from "@/constants";
import useErrorMessage from "@/hooks/useErrorMessage";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { CiCalendar } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { z } from "zod";

const addTeacherSchema = z.object({
    fullName: z
        .string({ required_error: "Họ và tên là trường bắt buộc" })
        .min(2, "Họ và tên ít nhất 2 kí tự!")
        .max(100, "Họ và tên nhiều nhất 100 kí tự!"),
    email: z
        .string({ required_error: "Địa chỉ email là trường bắt buộc" })
        .email("Địa chỉ email không hợp lệ!")
        .max(100, "Địa chỉ email nhiều nhất 100 kí tự!"),
    password: z
        .string({ required_error: "Mật này là trường bắt buộc" })
        .min(4, "Mật này ít nhất 4 kí tự!")
        .max(50, "Mật này nhiều nhất 50 kí tự!"),
    gender: z.enum(["male", "female"], {
        required_error: "Giới tính là trường bắt buộc",
        message: "Giới tính phải là: male hoặc female",
    }),
    dob: z.date({
        required_error: "Ngày sinh là trường bắt buộc",
        message: "Vui lòng chọn ngày sinh",
    }),
});

const editTeacherSchema = z.object({
    fullName: z
        .string({ required_error: "Họ và tên là trường bắt buộc" })
        .min(2, "Họ và tên ít nhất 2 kí tự!")
        .max(100, "Họ và tên nhiều nhất 100 kí tự!"),
    gender: z.enum(["male", "female"], {
        required_error: "Giới tính là trường bắt buộc",
        message: "Giới tính phải là: male hoặc female",
    }),
    dob: z.date({
        required_error: "Ngày sinh là trường bắt buộc",
        message: "Vui lòng chọn ngày sinh",
    }),
});

const DialogAddTeacher = ({
    open,
    onClose,
    isEdit = false,
    initialValues = {
        fullName: "",
        email: "",
        password: "",
        gender: "",
        dob: "",
    },
    isPending = false,
    onSubmit = (values, formOptions) => {},
    error = null,
}) => {
    const form = useForm({
        resolver: zodResolver(isEdit ? editTeacherSchema : addTeacherSchema),
        defaultValues: initialValues,
        values: initialValues,
    });

    useErrorMessage({ errors: error, form: form });

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;

        onSubmit(values, { reset: form.reset, resetFiled: form.resetField });
    };

    return (
        <Form {...form}>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {isEdit ? "Cập nhật thông tin" : "Thêm giáo viên"}
                        </DialogTitle>
                        <DialogDescription>
                            Điền đầy đủ thông tin trước khi{" "}
                            {isEdit ? "cập nhật thông tin." : "thêm giáo viên."}
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>
                                        Họ và tên <span className="text-red-500">*</span>
                                    </FormLabel>

                                    <div className="relative">
                                        <GoPerson className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500" />
                                        <FormControl>
                                            <Input
                                                placeholder="Nhập họ và tên"
                                                className="pl-10"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>
                                        Email <span className="text-red-500">*</span>
                                    </FormLabel>

                                    <div className="relative">
                                        <MdOutlineEmail className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500" />

                                        <FormControl>
                                            <Input
                                                readOnly={isEdit}
                                                placeholder="Nhập email"
                                                className="pl-10"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {isEdit ? null : (
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="mb-4">
                                        <FormLabel>
                                            Mật khẩu <span className="text-red-500">*</span>
                                        </FormLabel>

                                        <InputPassword placeholder="Nhập mật khẩu" {...field} />

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}

                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => {
                                return (
                                    <FormItem className="mb-4">
                                        <FormLabel>
                                            Giới tính <span className="text-red-500">*</span>
                                        </FormLabel>

                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Chọn giới tính" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {Object.entries(GENDER_LABELS).map(
                                                        ([key, label], index) => (
                                                            <SelectItem key={index} value={key}>
                                                                {label}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                                <FormItem className="flex flex-col mb-4">
                                    <FormLabel>
                                        Ngày sinh <span className="text-red-500">*</span>
                                    </FormLabel>

                                    <Popover modal className="">
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "dd/MM/yyyy")
                                                    ) : (
                                                        <span>Chọn ngày</span>
                                                    )}

                                                    <CiCalendar className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>

                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                captionLayout="dropdown-buttons"
                                                month={field.value || new Date()}
                                                onMonthChange={field.onChange}
                                                fromYear={1960}
                                                toYear={2030}
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() ||
                                                    date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <LoadingButton isLoading={isPending} type="submit">
                                {isEdit ? "Lưu thay đổi" : "Thêm mới"}
                            </LoadingButton>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </Form>
    );
};

DialogAddTeacher.displayName = "DialogAddTeacher";

export default memo(DialogAddTeacher);
