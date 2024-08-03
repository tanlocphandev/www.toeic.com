import TooltipBase from "@/components/shared/TooltipBase";
import DialogConfirm from "@/components/shared/dialog/DialogConfirm";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import { useMutationAddRoleGrant } from "@/hooks/role/role.mutation.hook";
import { errorMessage, getQueryKeys } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { Fragment, useState } from "react";
import { toast } from "sonner";

const DialogAddGrantRole = ({
    open = false,
    onClose = () => {},
    selectedRole = null,
    isLoading = false,
    data = [],
}) => {
    const [selectedRemoveGrant, setSelectedRemoveGrant] = useState(null);
    const queryClient = useQueryClient();
    const mutationAddRoleGrant = useMutationAddRoleGrant();

    const handleAddGrant = (row) => {
        setSelectedRemoveGrant(row);
    };

    const handleCloseDialogConfirm = () => {
        setSelectedRemoveGrant(null);
    };

    const revalidate = () => {
        queryClient.invalidateQueries({
            queryKey: getQueryKeys({
                key: QUERY_KEYS.ROLE.GET_ALL,
                roleId: selectedRole?.role_id,
                isSelectNotInRoleId: true,
            }),
        });
    };

    const handleConfirmAddRole = () => {
        const payload = {
            role_id: selectedRemoveGrant?.role_id,
            grant_id: selectedRemoveGrant?.grant_id,
        };

        mutationAddRoleGrant.mutate(payload, {
            onSuccess: () => {
                toast.success("Thêm quyền thành công", toastConfigSuccess);
                revalidate();
                handleCloseDialogConfirm();
            },
            onError: errorMessage,
        });
    };

    const columns = [
        {
            key: "grant_action",
            title: "Phân loại hành động",
            render: (row) => {
                return row?.grant_action;
            },
            classNameRow: "border border-gray-300 p-2 font-medium text-red-500",
        },
        {
            key: "grant_action_base",
            title: "create:own",
            render: (row) => {
                return row?.grant_action === "create:own" ? (
                    <TooltipBase title={"Xóa quyền (hành động này)"}>
                        <Checkbox checked={false} onCheckedChange={() => handleAddGrant(row)} />
                    </TooltipBase>
                ) : null;
            },
            classNameRow: "border border-gray-300 p-2 text-center",
        },
        {
            key: "grant_action_base",
            title: "read:own",
            render: (row) => {
                return row?.grant_action === "read:own" ? (
                    <TooltipBase title={"Xóa quyền (hành động này)"}>
                        <Checkbox checked={false} onCheckedChange={() => handleAddGrant(row)} />
                    </TooltipBase>
                ) : null;
            },
            classNameRow: "border border-gray-300 p-2 text-center",
        },
        {
            key: "grant_action_base",
            title: "update:own",
            render: (row) => {
                return row?.grant_action === "update:own" ? (
                    <TooltipBase title={"Xóa quyền (hành động này)"}>
                        <Checkbox checked={false} onCheckedChange={() => handleAddGrant(row)} />
                    </TooltipBase>
                ) : null;
            },
            classNameRow: "border border-gray-300 p-2 text-center",
        },
        {
            key: "grant_action_base",
            title: "delete:own",
            render: (row) => {
                return row?.grant_action === "delete:own" ? (
                    <TooltipBase title={"Xóa quyền (hành động này)"}>
                        <Checkbox checked={false} onCheckedChange={() => handleAddGrant(row)} />
                    </TooltipBase>
                ) : null;
            },
            classNameRow: "border border-gray-300 p-2 text-center",
        },
        {
            key: "grant_action_base",
            title: "create:any",
            render: (row) => {
                return row?.grant_action === "create:any" ? (
                    <TooltipBase title={"Xóa quyền (hành động này)"}>
                        <Checkbox checked={false} onCheckedChange={() => handleAddGrant(row)} />
                    </TooltipBase>
                ) : null;
            },
            classNameRow: "border border-gray-300 p-2 text-center",
        },
        {
            key: "grant_action_base",
            title: "read:any",
            render: (row) => {
                return row?.grant_action === "read:any" ? (
                    <TooltipBase title={"Xóa quyền (hành động này)"}>
                        <Checkbox checked={false} onCheckedChange={() => handleAddGrant(row)} />
                    </TooltipBase>
                ) : null;
            },
            classNameRow: "border border-gray-300 p-2 text-center",
        },
        {
            key: "grant_action_base",
            title: "update:any",
            render: (row) => {
                return row?.grant_action === "update:any" ? (
                    <TooltipBase title={"Xóa quyền (hành động này)"}>
                        <Checkbox checked={false} onCheckedChange={() => handleAddGrant(row)} />
                    </TooltipBase>
                ) : null;
            },
            classNameRow: "border border-gray-300 p-2 text-center",
        },
        {
            key: "grant_action_base",
            title: "delete:any",
            render: (row) => {
                return row?.grant_action === "delete:any" ? (
                    <TooltipBase title={"Xóa quyền (hành động này)"}>
                        <Checkbox checked={false} onCheckedChange={() => handleAddGrant(row)} />
                    </TooltipBase>
                ) : null;
            },
            classNameRow: "border border-gray-300 p-2 text-center",
        },
    ];

    return (
        <>
            {/* Admin not allow remove self role */}
            <DialogConfirm
                open={!!selectedRemoveGrant}
                onClose={handleCloseDialogConfirm}
                onConfirm={handleConfirmAddRole}
                title={"Thêm quyền (hành động đang tham chiếu)"}
                message={`Bạn có chắc chắn muốn thêm hành động \`${selectedRemoveGrant?.grant_action}\` của tài nguyên \`${selectedRemoveGrant?.resource}\`. Hành động thêm này sẽ làm vai trò \`${selectedRole?.role_name}\` có quyền này. Hãy cân nhắc cẩn thận trước khi xóa ?`}
                isPending={mutationAddRoleGrant.isPending}
            />

            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="max-w-5xl h-auto">
                    <DialogHeader>
                        <DialogTitle>
                            Thêm quyền dành cho vai trò: {selectedRole?.role_name}
                        </DialogTitle>
                        <DialogDescription>Mô tả: {selectedRole?.role_desc}</DialogDescription>
                    </DialogHeader>

                    <div className="max-h-[70vh] pt-2 w-full">
                        <ScrollArea className="m-4 h-full">
                            {isLoading ? (
                                Array.from({ length: 10 }).map((_, index) => {
                                    return <Skeleton key={index} className={"h-8 w-full mb-2"} />;
                                })
                            ) : (
                                <Table className="relative" divClassName="h-full">
                                    <TableHeader className="sticky w-full top-0 h-10 border  bg-gray-300 z-50">
                                        <TableRow>
                                            {columns.map((column, idx) => {
                                                return (
                                                    <TableHead
                                                        className={
                                                            "font-medium border border-white text-center z-50"
                                                        }
                                                        key={idx}
                                                    >
                                                        {column.title}
                                                    </TableHead>
                                                );
                                            })}
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {data.length > 0 ? (
                                            data.map((row, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <TableRow>
                                                            <TableCell
                                                                className="border border-gray-300 p-2 w-[200px] text-center bg-[#34447c] text-white font-medium"
                                                                colSpan={columns.length}
                                                            >
                                                                {`Tài nguyên cho phép: ${row.resource}`}
                                                            </TableCell>
                                                        </TableRow>

                                                        {row?.grants?.map((grant, idxGrant) => {
                                                            return (
                                                                <TableRow key={idxGrant}>
                                                                    {columns.map((column, idx) => {
                                                                        return (
                                                                            <TableCell
                                                                                className={
                                                                                    column?.classNameRow
                                                                                        ? typeof column.classNameRow ===
                                                                                          "function"
                                                                                            ? column.classNameRow(
                                                                                                  grant
                                                                                              )
                                                                                            : column.classNameRow
                                                                                        : null
                                                                                }
                                                                                key={idx}
                                                                            >
                                                                                {column?.render
                                                                                    ? column.render(
                                                                                          grant
                                                                                      )
                                                                                    : grant[
                                                                                          column.key
                                                                                      ]}
                                                                            </TableCell>
                                                                        );
                                                                    })}
                                                                </TableRow>
                                                            );
                                                        })}
                                                    </Fragment>
                                                );
                                            })
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={columns.length}
                                                    className="font-medium"
                                                    align="center"
                                                >
                                                    Chưa có hành động nào!
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            )}
                        </ScrollArea>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DialogAddGrantRole;
