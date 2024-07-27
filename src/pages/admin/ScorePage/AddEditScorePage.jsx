import BreadcrumbBase from "@/components/shared/BreadcrumbBase";
import ConfirmNavigation from "@/components/shared/dialog/ConfirmNavigation";
import Head from "@/components/shared/Head";
import { TypographyH2 } from "@/components/ui/typography";
import { toastConfigError, toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import { useMutationAddScore, useMutationEditScore } from "@/hooks/score/score.mutation.hook";
import { useGetScoreById } from "@/hooks/score/score.query.hook";
import usePreventLeaveBrowser from "@/hooks/usePreventLeaveBrowser";
import useBlockerRoute from "@/hooks/usePromptLeaveRoute";
import { useRouter } from "@/hooks/useRouter";
import FormAddEditScore from "@/pages/admin/ScorePage/components/FormAddEditScore";
import { errorMessage, getQueryKeys } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const AddEditScorePage = () => {
    const params = useParams();
    const router = useRouter();
    const isAddMode = useMemo(() => !params?.id, [params?.id]);
    const mutationAddScore = useMutationAddScore();
    const mutationEditScore = useMutationEditScore();
    const queryClient = useQueryClient();
    const { data, isLoading } = useGetScoreById({
        id: params?.id,
        select: (data) => data?.metadata,
    });

    const [block, setBlock] = useState(true);

    usePreventLeaveBrowser();

    const blocker = useBlockerRoute(block);

    const initialValues = useMemo(() => {
        if (!data)
            return {
                scoreName: "",
            };

        return {
            id: data?.score_id,
            scoreName: data?.score_name,
        };
    }, [data]);

    const handleSubmit = (values) => {
        if (isAddMode) {
            if (!values?.scores?.length) {
                toast.error("Vui lòng upload điểm!", toastConfigError);
                return;
            }

            mutationAddScore.mutate(values, {
                onSuccess: () => {
                    toast.success("Thêm bảng điểm thành công", toastConfigSuccess);
                    setBlock(false);
                    queryClient.invalidateQueries({
                        queryKey: getQueryKeys({ key: QUERY_KEYS.SCORE.GET_ALL, page: 1 }),
                        exact: true,
                    });
                    router.delay("/admin/scores");
                },
                onError: errorMessage,
            });
        } else {
            mutationEditScore.mutate(
                { score_name: values?.scoreName, id: params?.id },
                {
                    onSuccess: () => {
                        toast.success("Cập nhật bảng điểm thành công", toastConfigSuccess);
                        setBlock(false);
                        queryClient.invalidateQueries({
                            queryKey: getQueryKeys({ key: QUERY_KEYS.SCORE.GET_ALL, page: 1 }),
                            exact: true,
                        });
                        router.delay("/admin/scores");
                    },
                    onError: errorMessage,
                }
            );
        }
    };

    const title = useMemo(() => (isAddMode ? `Thêm bảng điểm` : "Cập nhật bảng điểm"), [isAddMode]);

    return (
        <div>
            <Head isAdmin title={title} />

            <TypographyH2 text={title} />

            <BreadcrumbBase
                className={"mb-5"}
                data={[
                    { label: "Quản lý đề thi", to: "/admin/tests" },
                    { label: "Quản lý bảng điểm", to: "/admin/scores" },
                    { label: title },
                ]}
            />

            <ConfirmNavigation blocker={blocker} />

            <FormAddEditScore
                onSubmit={handleSubmit}
                isPending={mutationAddScore.isPending || mutationEditScore.isPending}
                initialValues={initialValues}
            />
        </div>
    );
};

export default AddEditScorePage;
