import DialogConfirm from "@/components/shared/dialog/DialogConfirm";
import DialogAddEditNote from "@/components/shared/NoteSubject/components/DialogAddEditNote";
import TooltipBase from "@/components/shared/TooltipBase";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import {
    useMutationAddNote,
    useMutationDeleteNote,
    useMutationEditNote,
} from "@/hooks/note/note.mutation.hook";
import { useGetNote } from "@/hooks/note/note.query.hook";
import { errorMessage, errorMessageDetails, getQueryKeys, parserSearch } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { FcReading } from "react-icons/fc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin7Line, RiErrorWarningFill } from "react-icons/ri";
import { toast } from "sonner";
import NoteDialog from "../NoteDialog";
import {
    useMutationAddNoteDetails,
    useMutationDeleteNoteDetails,
    useMutationEditNoteDetails,
} from "@/hooks/noteDetails/noteDetails.mutation.hook";
import DialogNoteDetails from "@/components/shared/NoteSubject/components/DialogNoteDetails";

const NoteHistoryDetail = [
    {
        title: "Listening",
        date: "2022/01/01 11:17:24",
    },
    {
        title: "Reading",
        date: "2022/01/02 11:17:24",
    },
    {
        title: "Test2020 Test2020 Test2020 Test2020 Test2020 Test2020 Test2020",
        date: "2022/01/03 11:17:24",
    },
];

const NoteHistory = ({ closeNoteHistory, openNoteHistory }) => {
    const [isNoteDialogOpen, setIsNoteDialogOpen] = useState(false);
    const [openAddEditNote, setOpenAddEditNote] = useState(false);

    const [selectedSeeDetails, setSelectedSeeDetails] = useState(null);
    const [selectedNote, setSelectedNote] = useState(null);
    const [selectedDeletedNote, setSelectedDeletedNote] = useState(null);
    const [error, setError] = useState(null);

    const queryClient = useQueryClient();
    const mutationAddNote = useMutationAddNote();
    const mutationEditNote = useMutationEditNote();
    const mutationDeleteNote = useMutationDeleteNote();

    const mutationAddNoteDetails = useMutationAddNoteDetails();
    const mutationEditNoteDetails = useMutationEditNoteDetails();
    const mutationDeleteNoteDetails = useMutationDeleteNoteDetails();

    const { data, isLoading, isFetching } = useGetNote({
        params: { all: true },
        select: (data) => data?.metadata,
    });

    const openNoteDialog = () => {
        setIsNoteDialogOpen(true);
    };

    const closeNoteDialog = () => {
        setIsNoteDialogOpen(false);
    };

    const revalidateDetails = () => {
        if (!selectedSeeDetails) return;

        queryClient.invalidateQueries({
            queryKey: getQueryKeys({
                key: QUERY_KEYS.NOTE_DETAILS.GET_ALL,
                all: true,
                ...parserSearch({ value: selectedSeeDetails?.note_id, key: "note_id" }),
            }),
            exact: true,
        });
    };

    const saveNote = (newNote, resetCallback, hiddenDialogChildren) => {
        if (newNote.detail_id) {
            // Edit mode
            mutationEditNoteDetails.mutate(newNote, {
                onSuccess: () => {
                    toast.success("Cập nhật ghi chú thành công", toastConfigSuccess);
                    resetCallback();
                    closeNoteDialog();
                    revalidateDetails();
                    hiddenDialogChildren?.();
                },
                onError: errorMessage,
            });
        } else {
            // Add mode
            mutationAddNoteDetails.mutate(newNote, {
                onSuccess: () => {
                    toast.success("Thêm ghi chú thành công", toastConfigSuccess);
                    resetCallback();
                    closeNoteDialog();
                    revalidateDetails();
                    hiddenDialogChildren?.();
                },
                onError: errorMessage,
            });
        }
    };

    const handleOpenAddNote = () => {
        setOpenAddEditNote(true);
    };

    const handleCloseAddEditNote = () => {
        setOpenAddEditNote(false);
        setSelectedNote(null);
    };

    const handleSelectedSeeDetails = (row) => {
        setSelectedSeeDetails(row);
    };

    const initialValues = useMemo(() => {
        return {
            note_id: null,
            note_name: "",
            ...selectedNote,
        };
    }, [selectedNote]);

    const handleSelectedEditNote = (row) => {
        setSelectedNote(row);
        setOpenAddEditNote(true);
    };

    const revalidate = () => {
        queryClient.invalidateQueries({
            queryKey: getQueryKeys({
                key: QUERY_KEYS.NOTE.GET_ALL,
                all: true,
            }),
        });
    };

    const handleSaveNote = (values, resetCallback) => {
        if (selectedNote) {
            // Edit mode
            mutationEditNote.mutate(
                { ...values, note_id: selectedNote.note_id },
                {
                    onSuccess: () => {
                        toast.success("Cập nhật mục ghi chú thành công", toastConfigSuccess);
                        revalidate();
                        handleCloseAddEditNote();
                        resetCallback();
                    },
                    onError: (error) => {
                        setError(errorMessageDetails(error));
                    },
                }
            );
        } else {
            // Add mode
            mutationAddNote.mutate(values, {
                onSuccess: () => {
                    toast.success("Thêm mục ghi chú thành công", toastConfigSuccess);
                    revalidate();
                    handleCloseAddEditNote();
                    resetCallback();
                },
                onError: (error) => {
                    setError(errorMessageDetails(error));
                },
            });
        }
    };

    const handleConfirmDeleteNote = () => {
        mutationDeleteNote.mutate(selectedDeletedNote?.note_id, {
            onSuccess: () => {
                toast.success("Xóa mục ghi chú thành công", toastConfigSuccess);
                revalidate();
                setSelectedDeletedNote(null);
            },
            onError: errorMessage,
        });
    };

    const handleSelectedDeleteNote = (row) => {
        setSelectedDeletedNote(row);
    };

    return (
        <>
            <DialogAddEditNote
                open={openAddEditNote}
                initialValues={initialValues}
                onClose={handleCloseAddEditNote}
                isPending={mutationAddNote.isPending || mutationEditNote.isPending}
                onSubmit={handleSaveNote}
                error={error}
            />

            <DialogConfirm
                open={!!selectedDeletedNote}
                onConfirm={handleConfirmDeleteNote}
                onClose={() => setSelectedDeletedNote(null)}
                isPending={mutationDeleteNote.isPending}
            />

            <DialogNoteDetails
                open={!!selectedSeeDetails}
                cateNote={selectedSeeDetails}
                onClose={() => setSelectedSeeDetails(null)}
                onSaveNote={saveNote}
                isPendingAction={
                    mutationAddNoteDetails.isPending || mutationEditNoteDetails.isPending
                }
            />

            {isNoteDialogOpen && (
                <NoteDialog
                    closeDialog={closeNoteDialog}
                    onSubmit={saveNote}
                    openNoteHistory={openNoteHistory}
                    cateNotes={data}
                    isPending={mutationAddNoteDetails.isPending}
                />
            )}

            <div className="fixed top-0 left-0 bottom-0 z-10 flex items-center justify-center min-w-[600px]">
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
                <div className="bg-white p-6 w-full h-full text-[#34447c] z-10 relative">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={openNoteDialog}
                            className="text-md font-bold flex items-center shadow-md py-1 px-3 border-[#34447c] border rounded-lg"
                        >
                            <FcReading className="mr-2 text-2xl" /> Tạo Ghi Chú
                        </button>
                        <IoIosCloseCircleOutline
                            onClick={closeNoteHistory}
                            className="text-3xl text-red-500 cursor-pointer"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="font-medium mb-2">Danh mục ghi chú</p>
                        <Button className="bg-[#34447c] text-white" onClick={handleOpenAddNote}>
                            Thêm mục mới
                        </Button>
                    </div>

                    <div className="w-full h-[1px] bg-[#34447c] mt-2 mb-5"></div>

                    {isLoading ? (
                        <div className="w-full">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <Skeleton key={index} className={"mb-4 h-8 w-full"} />
                            ))}
                        </div>
                    ) : (
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-200 ">
                                    <th className="border border-gray-300 p-2">Tên mục ghi chú</th>

                                    <th className="border border-gray-300 p-2 text-center  w-[120px]">
                                        Chi tiết
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data?.length ? (
                                    data.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={`${
                                                index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                            }  hover:bg-gray-200 hover:opacity-90 hover:shadow-xl cursor-pointer duration-300`}
                                        >
                                            <td className="border border-gray-300 p-2">
                                                <div className="flex items-center flex-wrap">
                                                    {item.note_name}
                                                </div>
                                            </td>

                                            <td className="border border-gray-300 p-2 text-center  w-[120px]">
                                                <TooltipBase title={"Xem chi tiết"}>
                                                    <button
                                                        onClick={() =>
                                                            handleSelectedSeeDetails(item)
                                                        }
                                                    >
                                                        <RiErrorWarningFill className="w-full m-auto text-xl" />
                                                    </button>
                                                </TooltipBase>

                                                <TooltipBase title={"Chỉnh sửa"}>
                                                    <button
                                                        className="ml-2"
                                                        onClick={() => handleSelectedEditNote(item)}
                                                    >
                                                        <MdEdit className="w-full m-auto text-xl" />
                                                    </button>
                                                </TooltipBase>

                                                <TooltipBase title={"Xóa"}>
                                                    <button
                                                        className="ml-2"
                                                        onClick={() =>
                                                            handleSelectedDeleteNote(item)
                                                        }
                                                    >
                                                        <RiDeleteBin7Line className="w-full m-auto text-xl text-red-400" />
                                                    </button>
                                                </TooltipBase>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={3}
                                            className="border border-gray-300 p-2 text-center"
                                        >
                                            Không có mục ghi chú nào
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
};

export default NoteHistory;
