import ActionComponent from "@/components/shared/ActionComponent";
import BreadcrumbBase from "@/components/shared/BreadcrumbBase";
import DialogConfirm from "@/components/shared/dialog/DialogConfirm";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import TooltipBase from "@/components/shared/TooltipBase";
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
    USER_STATUSES,
} from "@/constants";
import useQueryString from "@/hooks/useQueryString";
import { useMutationAddTeacher, useMutationChangeStatus } from "@/hooks/user/user.mutation.hook";
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
    const [selectedChangeStatus, setSelectedChangStatus] = useState(null);

    const { data, isFetching } = useGetUser({ page: page, limit: PAGINATION.LIMIT });
    const queryClient = useQueryClient();
    const mutationAddTeacher = useMutationAddTeacher();
    const mutationChangeStatus = useMutationChangeStatus();

    const revalidate = () => {
        queryClient.invalidateQueries({
            queryKey: getQueryKeys({
                key: QUERY_KEYS.USER.GET_ALL,
                page,
                limit: PAGINATION.LIMIT,
            }),
            exact: true,
        });
    };

    const handleSelectedChangeStatus = (data) => {
        setSelectedChangStatus(data);
    };

    const handleCloseDialogChangeStatus = () => {
        setSelectedChangStatus(null);
    };

    const handleConfirmChangeStatus = () => {
        const payload = {
            userId: selectedChangeStatus?.user_id,
            status:
                selectedChangeStatus?.user_status === USER_STATUSES.ACTIVE
                    ? USER_STATUSES.INACTIVE
                    : USER_STATUSES.ACTIVE,
        };

        mutationChangeStatus.mutate(payload, {
            onSuccess: () => {
                revalidate();
                toast.success(
                    selectedChangeStatus?.user_status === USER_STATUSES.ACTIVE
                        ? "Vô hiệu hóa tài khoản thành công."
                        : "Tài khoản đã được kích hoạt trở lại.",
                    toastConfigSuccess
                );
                setSelectedChangStatus(null);
            },
            onError: errorMessage,
        });
    };

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

                revalidate();
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
            classNameColumn: "max-w-[100px]",
            classNameRow: "truncate max-w-[100px]",
            render: (row) => {
                return (
                    <TooltipBase title={row?.user_email}>
                        <p>{row?.user_email}</p>
                    </TooltipBase>
                );
            },
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
            classNameColumn: "max-w-[100px]",
            classNameRow: (row) => {
                return `${USER_STATUS_COLORS[row?.user_status]} font-medium truncate max-w-[100px]`;
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
                    <TooltipBase title={"Nếu tài khoản không còn hoạt động bạn có thể vô hiệu hóa"}>
                        <Button
                            disabled={row?.user_role === USER_ROLES.ADMIN}
                            onClick={
                                row?.user_role === USER_ROLES.ADMIN
                                    ? undefined
                                    : () => handleSelectedChangeStatus(row)
                            }
                            variant="outline"
                            className={
                                row?.user_status === USER_STATUSES.ACTIVE
                                    ? "text-red-500"
                                    : "text-green-500"
                            }
                        >
                            {row?.user_status === USER_STATUSES.ACTIVE
                                ? "Vô hiệu hóa"
                                : "Kích hoạt"}
                        </Button>
                    </TooltipBase>
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

            <DialogConfirm
                open={!!selectedChangeStatus}
                onClose={handleCloseDialogChangeStatus}
                onConfirm={handleConfirmChangeStatus}
                title="Thay đổi trạng thái"
                isPending={mutationChangeStatus.isPending}
                message={
                    selectedChangeStatus?.user_status === USER_STATUSES.ACTIVE
                        ? "Bạn có chắc chắn muốn vô hiệu hóa tài khoản này không. Việc này sẽ ảnh hưởng đến việc sử dụng hệ thống!"
                        : "Bạn có chắc chắn muốn kích hoạt lại tài khoản này không. Hãy suy nghĩ thật kĩ!"
                }
            />

            <Head isAdmin title={"Người dùng"} />

            <TypographyH2 text="Danh sách người dùng" />

            <BreadcrumbBase
                data={[{ label: "Trang chủ" }, { label: "Quản lý người dùng" }]}
                className="mb-5"
            />

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
