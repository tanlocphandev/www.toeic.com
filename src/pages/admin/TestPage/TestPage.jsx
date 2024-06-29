import Head from "@/components/shared/Head";
import { TypographyH2 } from "@/components/ui/typography";

const TestPage = () => {
    return (
        <div>
            <Head isAdmin title={"Danh sách bài test"} />

            <TypographyH2 text="Danh sách bài test" className="mb-5" />

            <TypographyH2 text="Đang phát triển" className="mb-5 text-red-500" />
        </div>
    );
};

export default TestPage;
