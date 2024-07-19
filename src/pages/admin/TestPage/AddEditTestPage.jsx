import Head from "@/components/shared/Head";
import { TypographyH2 } from "@/components/ui/typography";
import FormAddEditTest from "@/pages/admin/TestPage/components/FormAddEditTest";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

const AddEditTestPage = () => {
    const params = useParams();

    const isAddMode = useMemo(() => !params?.id, [params?.id]);

    const initialValues = useMemo(() => {
        return {
            testName: "",
            testOfYear: 0,
            testNoOfYear: 1,
            duration: 120,
        };
    }, []);

    const handleSubmit = (values) => {
        console.log(`values:::`, values);
    };

    return (
        <div>
            <Head isAdmin title={isAddMode ? `Thêm đề thi` : "Cập nhật đề thi"} />

            <TypographyH2 text={isAddMode ? `Thêm đề thi` : "Cập nhật đề thi"} className="mb-5" />

            <FormAddEditTest initialValues={initialValues} onSubmit={handleSubmit} />
        </div>
    );
};

export default AddEditTestPage;
