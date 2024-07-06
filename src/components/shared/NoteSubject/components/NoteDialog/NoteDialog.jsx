import { useState } from "react";
import { FcReading } from "react-icons/fc";
import { IoReturnUpBackOutline } from "react-icons/io5";

const NoteDialog = ({ closeDialog, saveNote }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSave = () => {
        if (title && content) {
            const newNote = {
                title,
                date: new Date().toISOString(),
                content,
            };
            saveNote(newNote);
            closeDialog();
        }
    };

    return (
        <div className="fixed top-0 left-0 bottom-0 bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 max-w-lg w-full h-full text-[#34447c]">
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={closeDialog}
                        className="text-xl text-red-500 shadow-md border border-red-500 rounded-lg p-1"
                    >
                        <IoReturnUpBackOutline />
                    </button>
                    <h2 className="text-md font-bold flex items-center">
                        <FcReading className="mr-2 text-2xl" /> Tạo Ghi Chú
                    </h2>
                </div>
                <p className="mb-4">
                    Bạn có thể tạo ghi chú đối với những phần quan trọng trong lúc học và luyện thi
                    TOEIC.
                </p>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">
                        Content <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg outline-none"
                        rows="7"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-[#34447c] text-white rounded-lg"
                    >
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteDialog;
