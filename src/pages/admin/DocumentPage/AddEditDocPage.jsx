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
    const mutationAddDoc = useMutationAddDocument();
    const mutationEditDoc = useMutationEditDocument();
    const queryClient = useQueryClient();
    const { data, isLoading } = useGetDocById({
        id: params?.id,
        select: (data) => data?.metadata,
    });

    const initialValues = useMemo(() => {
        if (!data) {
            return {
                doc_title: "",
                doc_desc: "",
                doc_link: null,
                doc_text: "",
                doc_type: "",
                doc_id: null,
                doc_video: null,
                doc_audio: null,
                doc_pdf: null,
                doc_thumbnail: null,
            };
        }

        console.log(`data:::`, data);

        return data;
    }, [data]);

    const handleSubmit = (values) => {
        console.log(`values:::`, values);

        if (isAddMode) {
            mutationAddDoc.mutate(values, {
                onSuccess: () => {
                    toast.success("Thêm tài liệu thành công", toastConfigSuccess);
                    router.replace("/admin/documents");
                },
                onError: errorMessage,
            });
        } else {
            mutationEditDoc.mutate(values, {
                onSuccess: () => {
                    toast.success("Cập nhật tài liệu thành công", toastConfigSuccess);
                    router.replace("/admin/documents");
                },
                onError: errorMessage,
            });
        }
    };

    const title = useMemo(() => (isAddMode ? `Thêm tài liệu` : "Cập nhật tài liệu"), [isAddMode]);

    return (
        <>
            <Head title={title} isAdmin />

            <TypographyH2 text={title} />

            <BreadcrumbBase
                className={"mb-5"}
                data={[{ label: "Quản lý tài liệu", to: "/admin/documents" }, { label: title }]}
            />

            <FormAddEditDoc
                onSubmit={handleSubmit}
                isPending={mutationAddDoc.isPending || mutationEditDoc.isPending}
                initialValues={initialValues}
            />
        </>
    );
};

export default AddEditDocPage;
