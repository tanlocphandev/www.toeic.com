import ActionComponent from "@/components/shared/ActionComponent";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { PAGINATION, QUERY_KEYS } from "@/constants";
import useQueryString from "@/hooks/useQueryString";
import PartService from "@/services/part.service";
import { useQuery } from "@tanstack/react-query";
import { IoMdAdd } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa6";

const PartPage = () => {
    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";

    const { data, isFetching } = useQuery({
        queryKey: [
            QUERY_KEYS.PART.GET_ALL,
            page,
            PAGINATION.LIMIT,
            search && `part_name:${search}`,
        ],
        queryFn: () =>
            PartService.getAll({
                page: page,
                limit: PAGINATION.LIMIT,
                order: "part_name",
                ...(search && { queryLike: `part_name:${search}` }),
            }),
        retry: 0,
        staleTime: 1000 * 10,
    });

    const columns = [
        {
            key: "part_id",
            title: "Id",
            classNameColumn: "w-[100px]",
        },
        {
            key: "part_name",
            title: "Tên part",
        },
        {
            key: "part_slug",
            title: "Slug part",
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
            <Head isAdmin title={"Part"} />

            <TypographyH2 text="Danh sách Part" className="mb-5" />

            <ActionComponent>
                <Button asChild>
                    <Link to={`/admin`}>
                        <IoMdAdd className="text-lg mr-1" />
                        <span>Thêm part</span>
                    </Link>
                </Button>

                <Button asChild>
                    <Link to={`/admin`}>
                        <FaFileImport className="text-lg mr-1" />
                        <span>Upload</span>
                    </Link>
                </Button>

                <Button asChild>
                    <Link to={`/admin`}>
                        <FaFileExport className="text-lg mr-1" />
                        <span>Xuất file</span>
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

export default PartPage;
