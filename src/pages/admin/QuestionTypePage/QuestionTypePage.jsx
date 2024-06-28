import ActionComponent from "@/components/shared/ActionComponent";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { PAGINATION, QUERY_KEYS } from "@/constants";
import useQueryString from "@/hooks/useQueryString";
import QuestionTypeService from "@/services/questionType.service";
import { fDate } from "@/utils/fDate";
import { useQuery } from "@tanstack/react-query";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const QuestionTypePage = () => {
    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";

    const { data, isFetching } = useQuery({
        queryKey: [
            QUERY_KEYS.QUESTION_TYPE.GET_ALL,
            page,
            PAGINATION.LIMIT,
            search && `type_name:${search}`,
        ],
        queryFn: () =>
            QuestionTypeService.getAll({
                page: page,
                limit: PAGINATION.LIMIT,
                order: "type_name",
                ...(search && { queryLike: `type_name:${search}` }),
            }),
        retry: 0,
        staleTime: 1000 * 10,
    });

    const columns = [
        {
            key: "type_id",
            title: "Id",
            classNameColumn: "w-[100px]",
        },
        {
            key: "type_name",
            title: "Tên loại câu hỏi",
        },
        {
            key: "created_at",
            title: "Ngày tạo",
            render: (row) => {
                return fDate(row?.created_at);
            },
        },
        {
            key: "action",
            title: "Hành động",
            render: (row) => {
                return (
                    <>
                        <Button asChild variant="outline" className="text-blue-500">
                            <Link to={`/admin`}>
                                <MdEdit />
                            </Link>
                        </Button>

                        <Button variant="outline" className="text-red-500 ml-2">
                            <MdDelete />
                        </Button>
                    </>
                );
            },
        },
    ];

    return (
        <div>
            <Head isAdmin title={"Loại câu hỏi"} />

            <TypographyH2 text="Danh sách Loại câu hỏi" className="mb-5" />

            <ActionComponent>
                <Button asChild>
                    <Link to={`/admin`}>
                        <IoMdAdd className="text-lg mr-1" />
                        <span>Thêm câu hỏi</span>
                    </Link>
                </Button>
            </ActionComponent>

            <TableComponent
                className={"mt-5"}
                isFetching={isFetching}
                columns={columns}
                rows={data?.metadata}
                pagination={data?.options}
            />
        </div>
    );
};

export default QuestionTypePage;
