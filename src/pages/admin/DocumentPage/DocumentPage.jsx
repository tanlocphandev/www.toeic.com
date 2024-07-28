import ActionComponent from "@/components/shared/ActionComponent";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import TooltipBase from "@/components/shared/TooltipBase";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { useGetDoc } from "@/hooks/document/document.query.hook";
import useQueryString from "@/hooks/useQueryString";
import { parserSearch } from "@/utils";
import { IoIosAdd } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const DocumentPage = () => {
    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";

    const { data, isLoading } = useGetDoc({
        ...parserSearch({ isQueryLike: true, key: "doc_title", value: search }),
        page,
    });

    const columns = [
        {
            key: "doc_id",
            title: "Id",
            classNameColumn: "w-[100px]",
        },
        {
            key: "doc_title",
            title: "Tiêu đề",
        },
        {
            key: "doc_desc",
            title: "Slug tag",
        },
        {
            key: "doc_type",
            title: "Loại tài liệu",
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
                            <Button variant="outline" className="text-red-500 ml-2">
                                <MdDelete />
                            </Button>
                        </TooltipBase>
                    </>
                );
            },
        },
    ];

    console.log(`data:::`, data);

    return (
        <div>
            <Head isAdmin title={"Danh sách bài đăng"} />

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
