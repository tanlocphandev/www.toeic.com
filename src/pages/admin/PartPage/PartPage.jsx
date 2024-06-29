import ActionComponent from "@/components/shared/ActionComponent";
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

    const initialValues = useMemo(() => {
        if (!selected.data) {
            return {
                partId: "",
                partName: "",
            };
        }

        return {
            partId: selected.data.part_id,
            partName: selected.data.part_name,
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
