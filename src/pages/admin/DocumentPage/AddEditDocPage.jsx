import BreadcrumbBase from "@/components/shared/BreadcrumbBase";
import Head from "@/components/shared/Head";
import { TypographyH2 } from "@/components/ui/typography";
import { toastConfigSuccess } from "@/configs/toast.config";
import {
    useMutationAddDocument,
    useMutationEditDocument,
} from "@/hooks/document/document.mutation.hook";
import { useGetDocById } from "@/hooks/document/document.query.hook";
import { useRouter } from "@/hooks/useRouter";
import FormAddEditDoc from "@/pages/admin/DocumentPage/components/FormAddEditDoc";
import { errorMessage } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const AddEditDocPage = () => {
    const params = useParams();
    const router = useRouter();
    const isAddMode = useMemo(() => !params?.id, [params?.id]);
    const mutationAddScore = useMutationAddDocument();
    const mutationEditScore = useMutationEditDocument();
    const queryClient = useQueryClient();
    const { data, isLoading } = useGetDocById({
        id: params?.id,
        select: (data) => data?.metadata,
    });

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
            mutationAddScore.mutate(values, {
                onSuccess: () => {
                    toast.success("Thêm tài liệu thành công", toastConfigSuccess);
                    router.replace("/admin/documents");
                },
                onError: errorMessage,
            });
        } else {
            mutationEditScore.mutate(
                { score_name: values?.scoreName, id: params?.id },
                {
                    onSuccess: () => {
                        toast.success("Cập nhật tài liệu thành công", toastConfigSuccess);
                        router.replace("/admin/documents");
                    },
                    onError: errorMessage,
                }
            );
        }
    };

    const title = useMemo(() => (isAddMode ? `Thêm tài liệu` : "Cập nhật tài liệu"), [isAddMode]);

    return (
        <>
            <Head title={title} />

            <TypographyH2 text={title} />

            <BreadcrumbBase
                className={"mb-5"}
                data={[{ label: "Quản lý tài liệu", to: "/admin/documents" }, { label: title }]}
            />

            <FormAddEditDoc
                onSubmit={handleSubmit}
                isPending={mutationAddScore.isPending || mutationEditScore.isPending}
                initialValues={initialValues}
            />
        </>
    );
};

export default AddEditDocPage;
