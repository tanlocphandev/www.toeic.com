import InputPassword from "@/components/shared/InputPassword";
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
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
    email: z.string().email("Địa chỉ email không hợp lệ!"),
    password: z
        .string()
        .min(4, "Mật khẩu ít nhất 4 kí tự!")
        .max(50, "Mật khẩu nhiều nhất 50 kí tự!"),
    fullName: z
        .string()
        .min(2, "Họ và tên ít nhất 2 kí tự!")
        .max(100, "Mật khẩu nhiều nhất 100 kí tự!"),
});

const FormRegister = ({ onSubmit = (values) => {}, errors = null, isPending = false }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            fullName: "",
        },
    });

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;
        onSubmit(values);
    };

    useEffect(() => {
        if (!errors) return;

        let isMounting = true;

        if (isMounting) {
            Object.keys(errors).forEach((key) => {
                form.setError(key, { type: "custom", message: errors[key] });
            });
        }

        return () => {
            isMounting = false;
        };
    }, [errors, form]);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleOnSubmit)}
                className="mt-12 flex-center flex-col"
            >
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem className="grid w-full max-w-sm items-center gap-1.5">
                            <FormLabel>Họ và tên</FormLabel>

                            <div className="relative">
                                <GoPerson className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500" />
                                <FormControl>
                                    <Input
                                        placeholder="Nhập họ và tên của bạn"
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
                        <FormItem className="grid w-full max-w-sm items-center gap-1.5 my-5">
                            <FormLabel>Email</FormLabel>

                            <div className="relative">
                                <MdOutlineEmail className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500" />

                                <FormControl>
                                    <Input
                                        placeholder="Nhập email của bạn"
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
                    name="password"
                    render={({ field }) => (
                        <FormItem className="grid w-full max-w-sm items-center gap-1.5">
                            <FormLabel>Mật khẩu</FormLabel>

                            <InputPassword placeholder="Nhập mật khẩu của bạn" {...field} />

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid w-full max-w-sm items-center gap-1.5 mt-7">
                    <LoadingButton type="submit" className="w-full">
                        Đăng ký
                    </LoadingButton>
                </div>

                <Link
                    to={"/login"}
                    className="text-red-500 hover:text-red-600 transition-colors mt-7"
                >
                    Đã có tài khoản? Đăng nhập
                </Link>
            </form>
        </Form>
    );
};

FormRegister.displayName = "FormRegister";

export default FormRegister;
