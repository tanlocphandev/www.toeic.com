import ConfirmNavigation from "@/components/shared/dialog/ConfirmNavigation";
import Head from "@/components/shared/Head";
import { TypographyH2 } from "@/components/ui/typography";
import { toastConfigSuccess } from "@/configs/toast.config";
import { useMutationAddTest } from "@/hooks/question/question.mutation.hook";
import usePreventLeaveBrowser from "@/hooks/usePreventLeaveBrowser";
import useBlockerRoute from "@/hooks/usePromptLeaveRoute";
import { useRouter } from "@/hooks/useRouter";
import FormAddEditTest from "@/pages/admin/TestPage/components/FormAddEditTest";
import { errorMessage } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const AddEditTestPage = () => {
    const params = useParams();

    const isAddMode = useMemo(() => !params?.id, [params?.id]);
    const mutationAddTest = useMutationAddTest();
    const router = useRouter();
    const [block, setBlock] = useState(true);

    usePreventLeaveBrowser();

    const blocker = useBlockerRoute(block);

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
                    toast.success("Thêm đề thi thành công", toastConfigSuccess);
                    setBlock(false);
                    router.delay("/admin/tests", 200);
                },
                onError: errorMessage,
            });
        }
    };

    return (
        <div>
            <Head isAdmin title={isAddMode ? `Thêm đề thi` : "Cập nhật đề thi"} />

            <TypographyH2 text={isAddMode ? `Thêm đề thi` : "Cập nhật đề thi"} className="mb-5" />

            <ConfirmNavigation blocker={blocker} />

            <FormAddEditTest initialValues={initialValues} onSubmit={handleSubmit} />
        </div>
    );
};

export default AddEditTestPage;
