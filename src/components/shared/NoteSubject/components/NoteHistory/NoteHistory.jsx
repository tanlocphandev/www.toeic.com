import { useState } from "react";
import { FcReading } from "react-icons/fc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import NoteDialog from "../NoteDialog";

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
    const [notes, setNotes] = useState(NoteHistoryDetail);

    const openNoteDialog = () => {
        setIsNoteDialogOpen(true);
    };

    const closeNoteDialog = () => {
        setIsNoteDialogOpen(false);
    };

    const saveNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    return (
        <div className="fixed top-0 left-0 bottom-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
            <div className="bg-white p-6 max-w-lg w-full h-full text-[#34447c] z-50 relative">
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
                <p className="font-medium mb-2 underline">Danh sách lịch sử ghi chú</p>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-200 ">
                            <th className="border border-gray-300 p-2 w-[200px]">Tên file</th>
                            <th className="border border-gray-300 p-2 text-center">Ngày tạo</th>
                            <th className="border border-gray-300 p-2 text-center">Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {NoteHistoryDetail.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                            >
                                <td className="border border-gray-300 p-2">
                                    <div className="flex items-center flex-wrap w-[200px]">
                                        {item.title}
                                    </div>
                                </td>

                                <td className="border border-gray-300 p-2 text-center">
                                    {item.date}
                                </td>
                                <td className="border border-gray-300 p-2 text-center">
                                    <button>
                                        <RiErrorWarningFill className="w-full m-auto text-2xl" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isNoteDialogOpen && (
                <NoteDialog
                    closeDialog={closeNoteDialog}
                    saveNote={saveNote}
                    openNoteHistory={openNoteHistory}
                />
            )}
        </div>
    );
};

export default NoteHistory;
