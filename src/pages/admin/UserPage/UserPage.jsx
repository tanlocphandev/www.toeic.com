import ActionComponent from "@/components/shared/ActionComponent";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { toastConfigSuccess } from "@/configs/toast.config";
import {
    GENDER_LABELS,
    PAGINATION,
    QUERY_KEYS,
    USER_ROLE_LABELS,
    USER_ROLES,
    USER_STATUS_COLORS,
    USER_STATUS_LABELS,
} from "@/constants";
import useQueryString from "@/hooks/useQueryString";
import { useMutationAddTeacher } from "@/hooks/user/user.mutation.hook";
import { useGetUser } from "@/hooks/user/user.query.hook";
import DialogAddTeacher from "@/pages/admin/UserPage/components/DialogAddTeacher";
import { errorMessage, getQueryKeys } from "@/utils";
import { fDate } from "@/utils/fDate";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const UserPage = () => {
    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const [openAddTeacher, setOpenAddTeacher] = useState(false);

    const { data, isFetching } = useGetUser({ page: page, limit: PAGINATION.LIMIT });
    const queryClient = useQueryClient();
    const mutationAddTeacher = useMutationAddTeacher();

    const handleOnAddTeacher = () => {
        setOpenAddTeacher(true);
    };

    const handleCloseAddTeacher = () => {
        setOpenAddTeacher(false);
    };

    const handleSubmitAddTeacher = (values, { reset, resetFiled }) => {
        const payload = {
            ...values,
            dob: fDate(values.dob, "YYYY-MM-DD"),
        };

        mutationAddTeacher.mutate(payload, {
            onSuccess: () => {
                toast.success("Thêm Giáo viên thành công", toastConfigSuccess);

                queryClient.invalidateQueries({
                    queryKey: getQueryKeys({
                        key: QUERY_KEYS.USER.GET_ALL,
                        page,
                        limit: PAGINATION.LIMIT,
                    }),
                    exact: true,
                });

                reset();
                resetFiled();
                setOpenAddTeacher(false);
            },
            onError: errorMessage,
        });
    };

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
                return row?.user_sex ? GENDER_LABELS[row?.user_sex] : "N/A";
            },
        },
        {
            key: "user_role",
            title: "Vai trò",
            classNameRow: (row) => {
                return row?.user_role === USER_ROLES.ADMIN
                    ? `font-medium text-red-500`
                    : row?.user_role === USER_ROLES.TEACHER
                    ? `font-medium text-blue-500`
                    : `font-medium text-green-500`;
            },
            render: (row) => {
                return USER_ROLE_LABELS[row?.user_role];
            },
        },
        {
            key: "user_dob",
            title: "Ngày sinh",
            render: (row) => {
                return row?.user_dob ? fDate(row?.user_dob, "DD/MM/YYYY") : "N/A";
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
        <>
            {openAddTeacher ? (
                <DialogAddTeacher
                    open={openAddTeacher}
                    onClose={handleCloseAddTeacher}
                    onSubmit={handleSubmitAddTeacher}
                    isPending={mutationAddTeacher.isPending}
                />
            ) : null}

            <Head isAdmin title={"Người dùng"} />

            <TypographyH2 text="Danh sách người dùng" className="mb-5" />

            <ActionComponent
                className="mb-5"
                onClickBtnAdd={handleOnAddTeacher}
                btnTextAdd="Thêm giáo viên"
            />

            <TableComponent
                isFetching={isFetching}
                columns={columns}
                rows={data?.metadata}
                pagination={data?.options}
            />
        </>
    );
};

export default UserPage;
