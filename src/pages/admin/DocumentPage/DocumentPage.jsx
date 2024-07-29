import ActionComponent from "@/components/shared/ActionComponent";
import DialogConfirm from "@/components/shared/dialog/DialogConfirm";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import TooltipBase from "@/components/shared/TooltipBase";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import { documentTypeLabels } from "@/constants/document.constant";
import { useMutationDeleteDocument } from "@/hooks/document/document.mutation.hook";
import { useGetDoc } from "@/hooks/document/document.query.hook";
import useQueryString from "@/hooks/useQueryString";
import { getQueryKeys, parserSearch } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const DocumentPage = () => {
    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";
    const [selectedDelete, setSelectedDelete] = useState(null);
    const { mutate, isPending } = useMutationDeleteDocument();
    const queryClient = useQueryClient();

    const { data, isLoading } = useGetDoc({
        ...parserSearch({ isQueryLike: true, key: "doc_title", value: search }),
        page,
    });

    const handleConfirmDelete = () => {
        console.log(selectedDelete);

        mutate(selectedDelete?.doc_id, {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: getQueryKeys({
                        key: QUERY_KEYS.DOCUMENT.GET_ALL,
                        ...parserSearch({ isQueryLike: true, key: "doc_title", value: search }),
                        page,
                    }),
                    exact: true,
                });
                setSelectedDelete(null);
                toast.success("Xóa tài liệu thành công", toastConfigSuccess);
            },
        });
    };

    const columns = [
        {
            key: "doc_id",
            title: "Id",
            classNameColumn: "w-[50px]",
        },
        {
            key: "doc_title",
            title: "Tiêu đề",
        },
        {
            key: "doc_desc",
            title: "Mô tả ngắn",
        },
        {
            key: "doc_type",
            title: "Loại tài liệu",
            render: (row) => documentTypeLabels[row?.doc_type],
        },
        {
            key: "action",
            title: "Hành động",
            render: (row) => {
                return (
                    <>
                        <TooltipBase title={"Sửa thông tin"}>
                            <Button asChild variant="outline" className="text-blue-500">
                                <Link to={`/admin/documents/edit/${row?.doc_id}`}>
                                    <MdEdit />
                                </Link>
                            </Button>
                        </TooltipBase>

                        <TooltipBase title="Xóa tài liệu">
                            <Button
                                onClick={() => setSelectedDelete(row)}
                                variant="outline"
                                className="text-red-500 ml-2"
                            >
                                <MdDelete />
                            </Button>
                        </TooltipBase>
                    </>
                );
            },
        },
    ];

    return (
        <div>
            <Head isAdmin title={"Danh sách bài đăng"} />

            <DialogConfirm
                open={!!selectedDelete}
                onClose={() => setSelectedDelete(null)}
                onConfirm={handleConfirmDelete}
                isPending={isPending}
            />

            <TypographyH2 text="Danh sách bài đăng" className="mb-5" />

            <ActionComponent>
                <Button asChild variant="outline">
                    <Link to={"/admin/documents/add"}>
                        <IoIosAdd className="mr-1" />
                        <span>Thêm tài liệu</span>
                    </Link>
                </Button>
            </ActionComponent>

            <TableComponent
                className={"mt-5"}
                isFetching={isLoading}
                columns={columns}
                rows={data?.metadata}
                pagination={data?.options}
            />
        </div>
    );
};

export default DocumentPage;
