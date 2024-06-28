import ActionComponent from "@/components/shared/ActionComponent";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { PAGINATION, QUERY_KEYS } from "@/constants";
import useQueryString from "@/hooks/useQueryString";
import TagService from "@/services/tag.service";
import { useQuery } from "@tanstack/react-query";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const TagPage = () => {
    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";

    const { data, isFetching } = useQuery({
        queryKey: [QUERY_KEYS.TAG.GET_ALL, page, PAGINATION.LIMIT, search && `tag_name:${search}`],
        queryFn: () =>
            TagService.getAll({
                page: page,
                limit: PAGINATION.LIMIT,
                ...(search && { queryLike: `tag_name:${search}` }),
            }),
        retry: 0,
        staleTime: 1000 * 10,
    });

    const columns = [
        {
            key: "tag_id",
            title: "Id",
            classNameColumn: "w-[100px]",
        },
        {
            key: "tag_name",
            title: "Tên tag",
        },
        {
            key: "tag_slug",
            title: "Slug tag",
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
            <Head isAdmin title={"Tag"} />

            <TypographyH2 text="Danh sách tag" className="mb-5" />

            <ActionComponent />

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

export default TagPage;
