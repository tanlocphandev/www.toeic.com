import Container from "@/components/shared/Container";
import { TypographyP } from "@/components/ui/typography";
import { toastConfigError, toastConfigSuccess } from "@/configs/toast.config";
import { USER_ROLES } from "@/constants";
import FormLogin from "@/pages/Auth/LoginPage/components/FormLogin";
import { authActions } from "@/redux/slices/auth.slice";
import AuthService from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { mutate, isPending } = useMutation({
        mutationFn: (values) => AuthService.login(values),
        onSuccess: ({ metadata }) => {
            const { tokens, user } = metadata;
            toast.success("Đăng nhập thành công", toastConfigSuccess);
            dispatch(authActions.setAuth({ ...tokens, userId: user.user_id }));

            if (user.user_role === USER_ROLES.ADMIN) {
                navigate("/admin", { replace: true });
            } else {
                navigate("/", { replace: true });
            }
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response && error.response.data) {
                const { message } = error.response.data;
                toast.error(message, toastConfigError);
            }
        },
    });

    const handleSubmit = (values) => {
        mutate(values);
    };

    return (
        <Container title={"Đăng nhập"} data-aos="fade-left">
            <div className="flex-center flex-col mt-8">
                <div className="flex items-center border p-2 rounded-sm w-80 cursor-pointer transition-colors hover:border-red-500">
                    <div className="w-9 h-9 rounded-sm bg-red-500 flex-center">
                        <AiOutlineGooglePlus className="text-white text-2xl" />
                    </div>

                    <TypographyP text="Đăng nhập với google" className="ml-4" />
                </div>

                <div className="flex-center mt-4">
                    <div className="w-9 h-[1px] bg-gray-300" />
                    <TypographyP
                        text="Hoặc đăng nhập với email của bạn"
                        className="mx-4 text-gray-500"
                    />
                    <div className="w-9 h-[1px] bg-gray-300" />
                </div>
            </div>

            <FormLogin onSubmit={handleSubmit} isPending={isPending} />
        </Container>
    );
};

export default LoginPage;
