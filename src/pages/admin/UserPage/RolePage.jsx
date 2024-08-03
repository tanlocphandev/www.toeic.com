import BreadcrumbBase from "@/components/shared/BreadcrumbBase";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import TooltipBase from "@/components/shared/TooltipBase";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { useGetRoles, useGetViewRoles } from "@/hooks/role/role.query.hook";
import DialogAddGrantRole from "@/pages/admin/UserPage/components/DialogAddGrantRole";
import DialogViewRole from "@/pages/admin/UserPage/components/DialogViewRole";
import { fDate } from "@/utils/fDate";
import { useCallback, useState } from "react";
import { RiAddFill, RiEye2Line } from "react-icons/ri";

const RolePage = () => {
    const [selectedRoleView, setSelectedRoleView] = useState(null);
    const [selectedAddGrantRole, setSelectedAddGrantRole] = useState(null);

    const mapData = useCallback((data) => {
        if (!data?.metadata || !data?.metadata?.grants?.length) return [];

        const { grants } = data?.metadata;

        const grantGroupByResource = grants.reduce((acc, cur) => {
            if (!acc[cur?.resource]) {
                acc[cur?.resource] = [];
            }

            acc[cur?.resource].push(cur);
            return acc;
        }, {});

        return Object.keys(grantGroupByResource).map((key) => ({
            resource: key,
            grants: grantGroupByResource[key],
        }));
    }, []);

    const { data, isFetching } = useGetRoles({}, (data) => data.metadata);
    const { data: dataViewRole, isLoading: isLoadingView } = useGetViewRoles({
        roleId: selectedRoleView?.role_id,
        select: mapData,
        isSelectNotInRoleId: false,
        enabled: Boolean(selectedRoleView?.role_id),
    });
    const { data: dataViewAddRole, isLoading: isLoadingAddRole } = useGetViewRoles({
        roleId: selectedAddGrantRole?.role_id,
        select: mapData,
        isSelectNotInRoleId: true,
        enabled: Boolean(selectedAddGrantRole?.role_id),
    });

    const handleSelectedRoleView = (role) => {
        setSelectedRoleView(role);
    };

    const handleSelectedAddGrantRole = (role) => {
        setSelectedAddGrantRole(role);
    };

    const columns = [
        {
            key: "role_name",
            title: "Tên quyền",
        },
        {
            key: "role_slug",
            title: "Slug",
        },
        {
            key: "role_desc",
            title: "Mô tả",
        },
        {
            key: "created_at",
            title: "Ngày tạo",
            render: (data) => fDate(data.created_at),
        },
        {
            key: "updated_at",
            title: "Ngày cập nhật",
            render: (data) => fDate(data.created_at),
        },
        {
            key: "actions",
            title: "Thao tác",
            render: (data) => (
                <>
                    <TooltipBase title={"Xem chi tiết"}>
                        <Button
                            variant="outline"
                            className="text-green-500"
                            onClick={() => handleSelectedRoleView(data)}
                        >
                            <RiEye2Line />
                        </Button>
                    </TooltipBase>

                    <TooltipBase title={"Xem chi tiết"}>
                        <Button
                            variant="outline"
                            className="text-blue-500 ml-2"
                            onClick={() => handleSelectedAddGrantRole(data)}
                        >
                            <RiAddFill />
                        </Button>
                    </TooltipBase>
                </>
            ),
        },
    ];

    return (
        <>
            <DialogViewRole
                open={!!selectedRoleView}
                onClose={() => setSelectedRoleView(null)}
                selectedRole={selectedRoleView}
                isLoading={isLoadingView}
                data={dataViewRole}
            />

            <DialogAddGrantRole
                data={dataViewAddRole}
                isLoading={isLoadingAddRole}
                open={!!selectedAddGrantRole}
                selectedRole={selectedAddGrantRole}
                onClose={() => setSelectedAddGrantRole(null)}
            />

            <Head isAdmin title={"Quản lý vai trò"} />

            <TypographyH2 text="Danh sách vai trò" />

            <BreadcrumbBase
                className="mb-5"
                data={[
                    { label: "Quản lý người dùng", to: "/admin/users" },
                    { label: "Quản lý vai trò" },
                ]}
            />

            <p className="mb-5 text-justify text-sm text-red-600 italic font-medium">
                * Quyền chỉ tạo được một lần không được phép chỉnh sửa hoặc xóa
            </p>

            <TableComponent
                isFetching={isFetching}
                columns={columns}
                rows={data}
                pagination={data?.options}
            />
        </>
    );
};

export default RolePage;
