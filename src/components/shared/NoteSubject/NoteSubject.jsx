import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import NoteHistory from "./components/NoteHistory";

const NoteSubject = () => {
    const [isNoteHistory, setIsNoteHistory] = useState(false);

    const openNoteHistory = () => {
        setIsNoteHistory(true);
    };

    const closeNoteHistory = () => {
        setIsNoteHistory(false);
    };

    return (
        <div>
            <button
                onClick={openNoteHistory}
                className={`bg-yellow-500 rounded-lg flex items-center justify-center transition-opacity fixed bottom-2 left-2 px-4 py-2 space-x-2`}
            >
                <FaRegEdit className="text-xl" />
                <span className="text-md font-medium">GHI CHÚ</span>
            </button>

            {isNoteHistory && (
                <NoteHistory closeNoteHistory={closeNoteHistory} openNoteDialog={openNoteHistory} />
            )}
        </div>
    );
};

export default NoteSubject;
