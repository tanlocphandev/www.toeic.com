import ConfirmNavigation from "@/components/shared/dialog/ConfirmNavigation";
import Head from "@/components/shared/Head";
import { TypographyH2 } from "@/components/ui/typography";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import { useMutationAddTest, useMutationEditTest } from "@/hooks/question/question.mutation.hook";
import { useGetTestDetails } from "@/hooks/test/test.query.hook";
import usePreventLeaveBrowser from "@/hooks/usePreventLeaveBrowser";
import useBlockerRoute from "@/hooks/usePromptLeaveRoute";
import { useRouter } from "@/hooks/useRouter";
import FormAddEditTest from "@/pages/admin/TestPage/components/FormAddEditTest";
import { errorMessage, getQueryKeys } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const AddEditTestPage = () => {
    const params = useParams();
    const router = useRouter();

    const isAddMode = useMemo(() => !params?.id, [params?.id]);
    const mutationAddTest = useMutationAddTest();
    const mutationEditTest = useMutationEditTest();
    const testSelected = useGetTestDetails(params?.id);
    const queryClient = useQueryClient();

    const [block, setBlock] = useState(true);

    usePreventLeaveBrowser();

    const blocker = useBlockerRoute(block);

    const initialValues = useMemo(() => {
        if (!isAddMode)
            return {
                test_id: testSelected.data?.metadata?.test_id,
                testName: testSelected.data?.metadata?.test_name,
                testOfYear: testSelected.data?.metadata?.test_of_year,
                testNoOfYear: testSelected.data?.metadata?.test_no_of_year,
                duration: testSelected.data?.metadata?.test_duration,
            };

        return {
            testName: "",
            testOfYear: 0,
            testNoOfYear: 1,
            duration: 120,
        };
    }, [isAddMode, testSelected.data]);

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

            return;
        }

        mutationEditTest.mutate(values, {
            onSuccess: () => {
                toast.success("Cập nhật đề thi thành công", toastConfigSuccess);
                setBlock(false);
                queryClient.invalidateQueries({
                    queryKey: getQueryKeys({
                        key: QUERY_KEYS.TEST.GET_ALL,
                        page: 1,
                    }),
                    exact: true,
                });
                router.delay("/admin/tests", 200);
            },
            onError: errorMessage,
        });

        console.log(`values:::`, values);
    };

    return (
        <div>
            <Head isAdmin title={isAddMode ? `Thêm đề thi` : "Cập nhật đề thi"} />

            <TypographyH2 text={isAddMode ? `Thêm đề thi` : "Cập nhật đề thi"} className="mb-5" />

            <ConfirmNavigation blocker={blocker} />

            <FormAddEditTest
                initialValues={initialValues}
                onSubmit={handleSubmit}
                isLoading={mutationAddTest.isPending || mutationEditTest.isPending}
            />
        </div>
    );
};

export default AddEditTestPage;
