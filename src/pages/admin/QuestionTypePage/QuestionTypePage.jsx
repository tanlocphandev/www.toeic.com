import ActionComponent from "@/components/shared/ActionComponent";
import BreadcrumbBase from "@/components/shared/BreadcrumbBase";
import DialogConfirm from "@/components/shared/dialog/DialogConfirm";
import DialogShowErrorExist from "@/components/shared/dialog/DialogShowErrorExist";
import DialogUpload from "@/components/shared/dialog/DialogUpload";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { useGetPart } from "@/hooks/part/useDataPart";
import useDataQuestionType from "@/hooks/questionType/useDataQuestionType";
import useMutationQuestionType from "@/hooks/questionType/useMutationQuestionType";
import useQueryString from "@/hooks/useQueryString";
import DialogAddQuestionType from "@/pages/admin/QuestionTypePage/components/DialogAddQuestionType";
import { fDate } from "@/utils/fDate";
import { useMemo, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const QuestionTypePage = () => {
    const [selected, setSelected] = useState({
        open: false,
        data: null,
    });
    const [openUpload, setOpenUpload] = useState(false);
    const [selectedDelete, setSelectedDelete] = useState(null);
    const { data: partOptions } = useGetPart({
        params: { all: true },
        select: (data) => data?.metadata || [],
    });

    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";

    const { data, isFetching } = useDataQuestionType({ page, search });
    const {
        addMutation,
        error,
        updateMutation,
        errorExist,
        uploadMutation,
        deleteMutation,
        handleCloseExist,
        setError,
    } = useMutationQuestionType({
        search,
        page,
        setSelected,
    });

    const handleSelectedDelete = (row) => {
        setSelectedDelete(row);
    };

    const handleCloseDialogDelete = () => {
        setSelectedDelete(null);
    };

    const handleConfirmDelete = () => {
        deleteMutation.mutate(selectedDelete?.type_id, {
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

    const handleSubmit = (values) => {
        values = {
            ...values,
            typeId: selected?.data?.type_id,
        };

        if (values.typeId) {
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
                typeId: "",
                typeName: "",
                partId: "",
                description: "",
                thumb: null,
            };
        }

        return {
            typeId: selected.data.type_id,
            typeName: selected.data.type_name,
            partId: selected.data.part_id,
            description: selected.data.type_desc,
            thumb: selected.data.type_thumb,
        };
    }, [selected.data]);

    const columns = [
        {
            key: "type_id",
            title: "Id",
            classNameColumn: "w-[100px]",
        },
        {
            key: "type_name",
            title: "Tên loại câu hỏi",
        },
        {
            key: "type_desc",
            title: "Mô tả",
            classNameColumn: "w-[150px]",
            classNameRow: "max-w-[150px] truncate",
            render: (row) => {
                return row?.type_desc || "";
            },
        },
        {
            key: "type_name",
            title: "Tên loại câu hỏi",
        },
        {
            key: "type_thumb",
            title: "Ảnh",
            render: (row) => {
                if (!row?.type_thumb) return null;

                return (
                    <img
                        src={row?.type_thumb?.url}
                        alt={row?.type_name}
                        loading="lazy"
                        className="w-[50px] h-[50px] object-cover"
                    />
                );
            },
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
            <Head isAdmin title={"Loại câu hỏi"} />

            <TypographyH2 text="Danh sách Loại câu hỏi" />

            <BreadcrumbBase
                data={[{ label: "Danh mục" }, { label: "Phân loại câu hỏi" }]}
                className="mb-5"
            />

            <DialogConfirm
                open={selectedDelete}
                onClose={handleCloseDialogDelete}
                onConfirm={handleConfirmDelete}
                isPending={deleteMutation.isPending}
            />

            {errorExist.length ? (
                <DialogShowErrorExist open data={errorExist} onClose={handleCloseExist} />
            ) : null}

            {selected.open ? (
                <DialogAddQuestionType
                    dataPart={partOptions}
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
                    title="Thêm loại câu hỏi từ file"
                    open={openUpload}
                    onClose={handleCloseUpload}
                    onSubmit={handleSubmitOpenUpload}
                />
            ) : null}

            <ActionComponent
                btnTextAdd="Thêm loại câu hỏi"
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

export default QuestionTypePage;
