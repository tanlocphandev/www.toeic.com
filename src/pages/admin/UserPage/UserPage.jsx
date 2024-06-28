import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import {
    PAGINATION,
    QUERY_KEYS,
    USER_ROLE_LABELS,
    USER_ROLES,
    USER_STATUS_COLORS,
    USER_STATUS_LABELS,
} from "@/constants";
import useQueryString from "@/hooks/useQueryString";
import UserService from "@/services/user.service";
import { fDate } from "@/utils/fDate";
import { useQuery } from "@tanstack/react-query";

const UserPage = () => {
    const query = useQueryString();
    const page = Number(query?.page) || 1;

    const { data, isFetching } = useQuery({
        queryKey: [QUERY_KEYS.USER.GET_ALL, page, PAGINATION.LIMIT],
        queryFn: () => UserService.getAll({ page: page, limit: PAGINATION.LIMIT }),
        retry: 0,
        staleTime: 1000 * 10,
    });

    const columns = [
        {
            key: "user_id",
            title: "Id",
            classNameColumn: "w-[40px]",
        },
        {
            key: "user_fullName",
            title: "Họ và tên",
        },
        {
            key: "user_email",
            title: "Email",
        },
        {
            key: "user_sex",
            title: "Giới tính",
            render: (row) => {
                return row?.user_sex || "N/A";
            },
        },
        {
            key: "user_role",
            title: "Vai trò",
            classNameRow: (row) => {
                return row?.user_role === USER_ROLES.ADMIN ? `font-medium text-red-500` : "";
            },
            render: (row) => {
                return USER_ROLE_LABELS[row?.user_role];
            },
        },
        {
            key: "user_dob",
            title: "Ngày sinh",
            render: (row) => {
                return row?.user_dob || "N/A";
            },
        },
        {
            key: "user_status",
            title: "Trạng thái",
            classNameRow: (row) => {
                return `${USER_STATUS_COLORS[row?.user_status]} font-medium`;
            },
            render: (row) => {
                return USER_STATUS_LABELS[row?.user_status];
            },
        },
        {
            key: "created_at",
            title: "Ngày đăng ký",
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
                        <Button variant="outline" className="text-red-500">
                            Ban
                        </Button>
                    </>
                );
            },
        },
    ];

    return (
        <div>
            <Head isAdmin title={"Người dùng"} />

            <TypographyH2 text="Danh sách người dùng" className="mb-5" />

            <TableComponent
                isFetching={isFetching}
                columns={columns}
                rows={data?.metadata}
                pagination={data?.options}
            />
        </div>
    );
};

export default UserPage;
