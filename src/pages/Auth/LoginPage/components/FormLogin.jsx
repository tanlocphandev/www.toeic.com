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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
    email: z.string().email("Địa chỉ email không hợp lệ!"),
    password: z
        .string()
        .min(4, "Mật khẩu ít nhất 4 kí tự!")
        .max(50, "Mật khẩu nhiều nhất 50 kí tự!"),
});

const FormLogin = ({ onSubmit = (values) => {} }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleOnSubmit = (values) => {
        if (!onSubmit) return;
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleOnSubmit)}
                className="mt-12 flex-center flex-col"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="grid w-full max-w-sm items-center gap-1.5">
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
                        <FormItem className="grid w-full max-w-sm items-center gap-1.5  mt-5">
                            <FormLabel>Mật khẩu</FormLabel>

                            <div className="relative">
                                <RiLockPasswordLine className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500" />
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Nhập mật khẩu của bạn"
                                        className="pl-10"
                                        {...field}
                                    />
                                </FormControl>
                            </div>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid w-full max-w-sm items-center gap-1.5 mt-7">
                    <Button type="submit" className="w-full">
                        Đăng nhập
                    </Button>
                </div>

                <div className="flex justify-between w-full max-w-sm items-center mt-7">
                    <Link
                        to={"/register"}
                        className="text-red-500 hover:text-red-600 transition-colors"
                    >
                        Chưa có tài khoản? Đăng ký
                    </Link>

                    <Link className="text-gray-500 underline hover:no-underline hover:text-gray-600 transition-colors">
                        Quên mật khẩu
                    </Link>
                </div>
            </form>
        </Form>
    );
};

FormLogin.displayName = "FormLogin";

export default FormLogin;
