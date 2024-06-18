import Container from "@/components/shared/Container";
import { TypographyP } from "@/components/ui/typography";
import FormRegister from "@/pages/Auth/RegisterPage/components/FormRegister";
import AuthService from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const RegisterPage = () => {
    const [errors, setError] = useState(null);
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: (values) => AuthService.register(values),
        onSuccess: () => {
            toast.success("Đăng ký thành công");
            navigate("/login", { replace: true });
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response && error.response.data) {
                const { details, message } = error.response.data;
                toast.error(message);
                if (!details) return;
                setError(details);
            }
        },
    });

    const handleSubmit = (values) => {
        mutate(values);
    };

    return (
        <Container title={"Đăng ký"} data-aos="fade-right">
            <div className="flex-center flex-col mt-8">
                <div className="flex items-center border p-2 rounded-sm w-80 cursor-pointer transition-colors hover:border-red-500">
                    <div className="w-9 h-9 rounded-sm bg-red-500 flex-center">
                        <AiOutlineGooglePlus className="text-white text-2xl" />
                    </div>

                    <TypographyP text="Đăng ký với google" className="ml-4" />
                </div>

                <div className="flex-center mt-4">
                    <div className="w-9 h-[1px] bg-gray-300" />
                    <TypographyP
                        text="Hoặc đăng ký với email của bạn"
                        className="mx-4 text-gray-500"
                    />
                    <div className="w-9 h-[1px] bg-gray-300" />
                </div>
            </div>

            <FormRegister onSubmit={handleSubmit} errors={errors} isPending={isPending} />
        </Container>
    );
};

export default RegisterPage;
