import Head from "@/components/shared/Head";
import { TypographyH2 } from "@/components/ui/typography";

const PostPage = () => {
    return (
        <div>
            <Head isAdmin title={"Danh sách bài đăng"} />

            <TypographyH2 text="Danh sách bài đăng" className="mb-5" />

            <TypographyH2 text="Đang phát triển" className="mb-5 text-red-500" />
        </div>
    );
};

export default PostPage;
