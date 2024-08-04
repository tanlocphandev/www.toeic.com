import ActionComponent from "@/components/shared/ActionComponent";
import BreadcrumbBase from "@/components/shared/BreadcrumbBase";
import DialogConfirm from "@/components/shared/dialog/DialogConfirm";
import DialogShowErrorExist from "@/components/shared/dialog/DialogShowErrorExist";
import DialogUpload from "@/components/shared/dialog/DialogUpload";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import useDataTag from "@/hooks/tag/useDataTag";
import useMutationTag from "@/hooks/tag/useMutationTag";
import useQueryString from "@/hooks/useQueryString";
import DialogAddTag from "@/pages/admin/TagPage/components/DialogAddTag";
import { useMemo, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const TagPage = () => {
    const [selected, setSelected] = useState({
        open: false,
        data: null,
    });
    const [openUpload, setOpenUpload] = useState(false);
    const [selectedDelete, setSelectedDelete] = useState(null);

    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";

    const { data, isFetching } = useDataTag({ search, page });
    const {
        addMutation,
        error,
        updateMutation,
        uploadMutation,
        errorExist,
        deleteMutation,
        handleCloseExist,
        setError,
    } = useMutationTag({
        search,
        page,
        setSelected,
    });

    const handleSelectedDelete = (data) => {
        setSelectedDelete(data);
    };

    const handleCloseDialogConfirm = () => {
        setSelectedDelete(null);
    };

    const handleConfirmDelete = () => {
        deleteMutation.mutate(selectedDelete?.tag_id, {
            onSuccess: () => {
                setSelectedDelete(null);
            },
        });
    };

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

    const handleOpenUpload = () => setOpenUpload(true);

    const handleCloseUpload = () => setOpenUpload(false);

    const handleSubmit = (values) => {
        values = {
            ...values,
            tagId: selected?.data?.tag_id,
        };

        if (values.tagId) {
            updateMutation.mutate(values);
            return;
        }

        addMutation.mutate(values);
    };

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
                tagId: "",
                tagName: "",
            };
        }

        return {
            tagId: selected.data.tag_id,
            tagName: selected.data.tag_name,
        };
    }, [selected.data]);

    const columns = [
        {
            key: "tag_id",
            title: "Id",
            classNameColumn: "w-[100px]",
        },
        {
            key: "tag_name",
            title: "Tên tag",
            classNameColumn: "max-w-[200px]",
            classNameRow: "truncate max-w-[200px]",
        },
        {
            key: "tag_slug",
            title: "Slug tag",
            classNameColumn: "max-w-[200px]",
            classNameRow: "truncate max-w-[200px]",
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
            <Head isAdmin title={"Tag"} />

            <TypographyH2 text="Danh sách tag" />

            <BreadcrumbBase
                data={[{ label: "Danh mục" }, { label: "Danh sách tag" }]}
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
                <DialogAddTag
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
                    title="Thêm tag từ file"
                    open={openUpload}
                    onClose={handleCloseUpload}
                    onSubmit={handleSubmitOpenUpload}
                />
            ) : null}

            <ActionComponent
                onClickBtnAdd={handleOpenDialog}
                onClickBtnUpload={handleOpenUpload}
                btnTextAdd="Thêm tag"
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

export default TagPage;
