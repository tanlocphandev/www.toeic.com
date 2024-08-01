import DialogConfirm from "@/components/shared/dialog/DialogConfirm";
import DialogContentNote from "@/components/shared/NoteSubject/components/DialogContentNote";
import NoteDialog from "@/components/shared/NoteSubject/components/NoteDialog";
import TooltipBase from "@/components/shared/TooltipBase";
import { Skeleton } from "@/components/ui/skeleton";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import { useMutationDeleteNoteDetails } from "@/hooks/noteDetails/noteDetails.mutation.hook";
import { useGetNoteDetails } from "@/hooks/noteDetails/noteDetails.query.hook";
import { cn } from "@/lib/utils";
import { errorMessage, getQueryKeys, parserSearch } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { FcReading } from "react-icons/fc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { toast } from "sonner";

const DialogNoteDetails = ({
    open,
    onClose,
    cateNote = null,
    onSaveNote = (values, resetCallback) => {},
    isPendingAction = false,
}) => {
    const [selectedDetails, setSelectedDetails] = useState(null);
    const [selectedDelete, setSelectedDelete] = useState(null);
    const [isNoteDialogOpen, setIsNoteDialogOpen] = useState(false);
    const [selectedEdit, setSelectedEdit] = useState(null);

    const queryClient = useQueryClient();
    const { data, isFetching } = useGetNoteDetails({
        enabled: Boolean(cateNote),
        params: {
            all: true,
            ...parserSearch({ value: cateNote?.note_id, key: "note_id" }),
        },
        select: (data) => data?.metadata,
    });
    const mutationDeleteNote = useMutationDeleteNoteDetails();

    const handleSelectedDetails = (row) => {
        setSelectedDetails(row);
    };

    const handleCloseDialog = () => {
        setSelectedDetails(null);
    };

    const handleCloseDialogDelete = () => {
        setSelectedDelete(null);
    };

    const handleSelectedDelete = (row) => {
        setSelectedDelete(row);
    };

    const closeNoteDialog = () => {
        setIsNoteDialogOpen(false);
    };

    const revalidate = () => {
        if (!cateNote) return;

        queryClient.invalidateQueries({
            queryKey: getQueryKeys({
                key: QUERY_KEYS.NOTE_DETAILS.GET_ALL,
                all: true,
                ...parserSearch({ value: cateNote?.note_id, key: "note_id" }),
            }),
            exact: true,
        });
    };

    const handleConfirmDelete = () => {
        mutationDeleteNote.mutate(selectedDelete?.detail_id, {
            onSuccess: () => {
                toast.success("Xóa ghi chú thành công", toastConfigSuccess);
                revalidate();
                setSelectedDelete(null);
            },
            onError: errorMessage,
        });
    };

    const handleSelectedEdit = (row) => {
        setSelectedEdit(row);
        setIsNoteDialogOpen(true);
    };

    const openNoteDialog = () => {
        setIsNoteDialogOpen(true);
    };

    const handleSubmit = (values, reset) => {
        onSaveNote(values, reset, () => {
            setIsNoteDialogOpen(false);
        });
    };

    const initialValues = useMemo(() => {
        return {
            detail_id: null,
            note_id: "",
            detail_title: "",
            detail_content: "",
            ...selectedEdit,
        };
    }, [selectedEdit]);

    if (!open) return null;

    return (
        <>
            <DialogContentNote
                open={!!selectedDetails}
                data={selectedDetails}
                onClose={handleCloseDialog}
            />

            <DialogConfirm
                open={!!selectedDelete}
                onClose={handleCloseDialogDelete}
                onConfirm={handleConfirmDelete}
                isPending={mutationDeleteNote.isPending}
            />

            {isNoteDialogOpen && (
                <NoteDialog
                    closeDialog={closeNoteDialog}
                    onSubmit={handleSubmit}
                    cateNotes={[]}
                    noteId={cateNote?.note_id}
                    isPending={isPendingAction}
                    initialValues={initialValues}
                />
            )}

            <div className="fixed top-0 left-0 bottom-0 z-20 flex items-center justify-center min-w-[600px]">
                <div className="bg-white p-6  w-full h-full text-[#34447c] z-20 relative">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={openNoteDialog}
                            className="text-md font-bold flex items-center shadow-md py-1 px-3 border-[#34447c] border rounded-lg"
                        >
                            <FcReading className="mr-2 text-2xl" /> Tạo Ghi Chú
                        </button>
                        <IoIosCloseCircleOutline
                            onClick={onClose}
                            className="text-3xl text-red-500 cursor-pointer"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="font-medium mb-2">Danh sách ghi chú</p>
                        <p className="font-medium mb-2">Danh mục: {cateNote?.note_name}</p>
                    </div>

                    <div className="w-full h-[1px] bg-[#34447c] mt-2 mb-5" />

                    {isFetching ? (
                        <div className="w-full">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Skeleton key={index} className={"mb-4 h-12 w-full"} />
                            ))}
                        </div>
                    ) : (
                        <div className="w-full flex flex-col space-y-4">
                            {data.length ? (
                                data.map((row, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            `w-full border border-gray-200 p-4 shadow-md rounded-xl flex justify-between items-center cursor-pointer transition-all hover:bg-[#f5f5f5] hover:shadow hover:scale-105 duration-300`
                                        )}
                                    >
                                        <span className="font-medium">{row.detail_title}</span>

                                        <div className="flex items-center">
                                            <TooltipBase title={"Xem chi tiết"}>
                                                <button onClick={() => handleSelectedDetails(row)}>
                                                    <FcReading className="text-2xl" />
                                                </button>
                                            </TooltipBase>

                                            <TooltipBase title={"Chỉnh sửa"}>
                                                <button
                                                    onClick={() => handleSelectedEdit(row)}
                                                    className="ml-2 hover:text-blue-500 hover:opacity-80"
                                                >
                                                    <MdEdit className="w-full m-auto text-xl" />
                                                </button>
                                            </TooltipBase>

                                            <TooltipBase title={"Xóa"}>
                                                <button
                                                    className="ml-2"
                                                    onClick={() => handleSelectedDelete(row)}
                                                >
                                                    <RiDeleteBin7Line className="w-full m-auto text-xl text-red-400" />
                                                </button>
                                            </TooltipBase>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center font-medium">Không có ghi chú nào!</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DialogNoteDetails;
