import ActionComponent from "@/components/shared/ActionComponent";
import BreadcrumbBase from "@/components/shared/BreadcrumbBase";
import DialogConfirm from "@/components/shared/dialog/DialogConfirm";
import DialogShowErrorExist from "@/components/shared/dialog/DialogShowErrorExist";
import DialogUpload from "@/components/shared/dialog/DialogUpload";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import useDataPart from "@/hooks/part/useDataPart";
import useMutationPart from "@/hooks/part/useMutationPart";
import useQueryString from "@/hooks/useQueryString";
import DialogAddPart from "@/pages/admin/PartPage/components/DialogAddPart";
import { useMemo, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const PartPage = () => {
    const [selected, setSelected] = useState({
        open: false,
        data: null,
    });
    const [openUpload, setOpenUpload] = useState(false);
    const [selectedDelete, setSelectedDelete] = useState(null);

    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";

    const { data, isFetching } = useDataPart({ page, search });
    const {
        addMutation,
        error,
        updateMutation,
        uploadMutation,
        errorExist,
        deleteMutation,
        handleCloseExist,
        setError,
    } = useMutationPart({
        search,
        page,
        setSelected,
    });

    const handleCloseDialog = () => {
        setSelected({
            open: false,
            data: null,
        });
    };

    const handleOpenDialog = () => {
        if (error) {
            setError(null);
        }

        setSelected({
            open: true,
            data: null,
        });
    };

    const handleSelectedDelete = (data) => {
        setSelectedDelete(data);
    };

    const handleCloseDialogConfirm = () => {
        setSelectedDelete(null);
    };

    const handleSubmit = (values) => {
        values = {
            ...values,
            partId: selected?.data?.part_id,
        };

        if (values.partId) {
            updateMutation.mutate(values);
            return;
        }

        addMutation.mutate(values);
    };

    const handleOpenUpload = () => setOpenUpload(true);

    const handleCloseUpload = () => setOpenUpload(false);

    const handleSubmitOpenUpload = (file) => {
        uploadMutation.mutate(file, {
            onSuccess: () => {
                handleCloseUpload();
            },
        });
    };

    const handleConfirmDelete = () => {
        deleteMutation.mutate(selectedDelete?.part_id, {
            onSuccess: () => {
                setSelectedDelete(null);
            },
        });
    };

    const initialValues = useMemo(() => {
        if (!selected.data) {
            return {
                partNumber: 0,
                partId: "",
                partName: "",
                description: "",
            };
        }

        return {
            partId: selected.data.part_id,
            partName: selected.data.part_name,
            partNumber: selected.data?.part_number,
            description: selected?.data?.part_desc || "",
        };
    }, [selected.data]);

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
                        <Button
                            onClick={() => setSelected({ open: true, data: row })}
                            variant="outline"
                            className="text-blue-500"
                        >
                            <MdEdit />
                        </Button>

                        <Button
                            onClick={() => handleSelectedDelete(row)}
                            variant="outline"
                            className="text-red-500 ml-2"
                        >
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

            <TypographyH2 text="Danh sách Part" />

            <BreadcrumbBase
                data={[{ label: "Danh mục" }, { label: "Danh sách part" }]}
                className="mb-5"
            />

            <DialogConfirm
                open={selectedDelete}
                onClose={handleCloseDialogConfirm}
                onConfirm={handleConfirmDelete}
                isPending={deleteMutation.isPending}
            />

            {errorExist.length ? (
                <DialogShowErrorExist open data={errorExist} onClose={handleCloseExist} />
            ) : null}

            {selected.open ? (
                <DialogAddPart
                    initialValues={initialValues}
                    open={selected.open}
                    onClose={handleCloseDialog}
                    onSubmit={handleSubmit}
                    error={error}
                    isPending={updateMutation.isPending || addMutation.isPending}
                />
            ) : null}

            {openUpload ? (
                <DialogUpload
                    title="Thêm part từ file"
                    open={openUpload}
                    onClose={handleCloseUpload}
                    onSubmit={handleSubmitOpenUpload}
                />
            ) : null}

            <ActionComponent
                btnTextAdd="Thêm part"
                onClickBtnAdd={handleOpenDialog}
                onClickBtnUpload={handleOpenUpload}
                onClickBtnExport={() => {
                    console.log("export");
                }}
            />

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
