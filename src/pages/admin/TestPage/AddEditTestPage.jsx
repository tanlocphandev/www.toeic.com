import Head from "@/components/shared/Head";
import { TypographyH2 } from "@/components/ui/typography";
import { toastConfigSuccess } from "@/configs/toast.config";
import { useMutationAddTest } from "@/hooks/question/question.mutation.hook";
import usePreventLeaveBrowser from "@/hooks/usePreventLeaveBrowser";
import usePromptLeaveRoute from "@/hooks/usePromptLeaveRoute";
import FormAddEditTest from "@/pages/admin/TestPage/components/FormAddEditTest";
import { errorMessage } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const AddEditTestPage = () => {
    const params = useParams();

    const isAddMode = useMemo(() => !params?.id, [params?.id]);
    const mutationAddTest = useMutationAddTest();
    const navigate = useNavigate();
    const [isBlock, setIsBlock] = useState(true);

    usePreventLeaveBrowser();

    usePromptLeaveRoute({
        when: isBlock,
    });

    useEffect(() => {}, []);

    const initialValues = useMemo(() => {
        return {
            testName: "",
            testOfYear: 0,
            testNoOfYear: 1,
            duration: 120,
        };
    }, []);

    const handleSubmit = (values) => {
        if (isAddMode) {
            mutationAddTest.mutate(values, {
                onSuccess: () => {
                    setIsBlock(false);
                    toast.success("Thêm đề thi thành công", toastConfigSuccess);
                    navigate("/admin/test", { replace: true });
                },
                onError: errorMessage,
            });
        }
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
