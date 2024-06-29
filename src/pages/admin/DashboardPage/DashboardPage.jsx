import Head from "@/components/shared/Head";
import { TypographyH2 } from "@/components/ui/typography";

const DashboardPage = () => {
    return (
        <div>
            <Head isAdmin title={"Dashboard"} />

            <TypographyH2 text="Đang phát triển" className="mb-5 text-red-500" />
        </div>
    );
};

export default DashboardPage;
