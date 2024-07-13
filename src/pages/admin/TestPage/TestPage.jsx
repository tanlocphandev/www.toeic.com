import Head from "@/components/shared/Head";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { Link } from "react-router-dom";

const TestPage = () => {
    return (
        <div>
            <Head isAdmin title={"Danh sách bài test"} />

            <TypographyH2 text="Danh sách bài test" className="mb-5" />

            <Button asChild>
                <Link to={"/admin/tests/add"}>Thêm test</Link>
            </Button>
        </div>
    );
};

export default TestPage;
