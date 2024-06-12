import Container from "@/components/shared/Container";
import { TypographyP } from "@/components/ui/typography";
import FormLogin from "@/pages/Auth/LoginPage/components/FormLogin";
import { AiOutlineGooglePlus } from "react-icons/ai";

const LoginPage = () => {
    const handleSubmit = (values) => {
        console.log("====================================");
        console.log(`values`, values);
        console.log("====================================");
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

            <FormLogin onSubmit={handleSubmit} />
        </Container>
    );
};

export default LoginPage;
