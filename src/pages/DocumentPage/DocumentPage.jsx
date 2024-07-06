import { useRef } from "react";
import ListeningTips from "./components/Tips/ListeningTips";
import ReadingTips from "./components/Tips/ReadingTips";
import Book from "./components/Tips/Book";
import Audio from "./components/Tips/Audio";

const doc = [
    {
        ref: "book",
        name: "Tài liệu sách",
    },
    {
        ref: "audio",
        name: "Tài liệu Audio",
    },
    {
        ref: "lctips",
        name: "Listening Tips",
    },
    {
        ref: "rctips",
        name: "Reading Tips",
    },
];

const DocumentsPage = () => {
    const docRefs = {
        book: useRef(null),
        audio: useRef(null),
        lctips: useRef(null),
        rctips: useRef(null),
    };

    const scrollToPart = (doc) => {
        docRefs[doc].current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <div className="max-w-6xl mx-auto p-2 space-y-4">
                <h1 className="text-3xl font-medium text-center my-4 uppercase text-[#34447c]">
                    Kho tài liệu
                </h1>
                <div className="flex justify-center my-5 space-x-4">
                    {doc.map((item, index) => (
                        <button
                            key={index}
                            className="text-[#34447c] bg-[#e3faff] border border-[#34447c] py-2 px-5 rounded-lg"
                            onClick={() => scrollToPart(item.ref)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <Book docRefs={docRefs} />

                <Audio docRefs={docRefs} />
            </div>

            <ListeningTips docRefs={docRefs} />

            <ReadingTips docRefs={docRefs} />
        </div>
    );
};

export default DocumentsPage;
