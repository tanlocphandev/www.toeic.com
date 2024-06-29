import Head from "@/components/shared/Head";
import { TypographyH2 } from "@/components/ui/typography";

const CommentPage = () => {
    return (
        <div>
            <Head isAdmin title={"Danh sách comment"} />

            <TypographyH2 text="Danh sách comment" className="mb-5" />

            <TypographyH2 text="Đang phát triển" className="mb-5 text-red-500" />
        </div>
    );
};

export default CommentPage;
