import Container from "@/components/ui/container";
import { documentTypes } from "@/constants/document.constant";
import { useGetDoc } from "@/hooks/document/document.query.hook";
import SkeletonLoadingDoc from "@/pages/DocumentPage/components/SkeletonLoadingDoc";
import { parserSearchMulti } from "@/utils";
import { useCallback, useRef } from "react";
import Book from "./components/Tips/Book";
import DocList from "./components/Tips/DocList";
import ListeningTips from "./components/Tips/ListeningTips";
import ReadingTips from "./components/Tips/ReadingTips";

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
        ref: "video",
        name: "Tài liệu Video",
    },
    {
        ref: "post",
        name: "Bài viết",
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
    const params = useCallback((value) => {
        return parserSearchMulti({
            params: [
                {
                    key: "doc_type",
                    value: value,
                },
                {
                    key: "doc_status",
                    value: "active",
                },
            ],
        });
    }, []);

    const docAudio = useGetDoc(
        {
            ...params(documentTypes.audio),
            all: 1,
        },
        (data) => data.metadata
    );

    const docVideo = useGetDoc(
        {
            ...params(documentTypes.video),
            all: 1,
        },
        (data) => data.metadata
    );

    const docText = useGetDoc(
        {
            ...params(documentTypes.text),
            all: 1,
        },
        (data) => data.metadata
    );

    const docPdf = useGetDoc(
        {
            ...params(documentTypes.document),
            all: 1,
        },
        (data) => data.metadata
    );

    // console.log(`data`, {
    //     docAudio: docAudio.data,
    //     docVideo: docVideo.data,
    //     docText: docText.data,
    //     docPdf: docPdf.data,
    // });

    const docRefs = {
        book: useRef(null),
        audio: useRef(null),
        video: useRef(null),
        post: useRef(null),
        lctips: useRef(null),
        rctips: useRef(null),
    };

    const scrollToPart = (doc) => {
        docRefs[doc].current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Container title={"Kho tài liệu"}>
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

                {docPdf.isLoading ? (
                    <SkeletonLoadingDoc />
                ) : (
                    <Book docRefs={docRefs} data={docPdf.data} />
                )}

                {docAudio.isLoading ? (
                    <SkeletonLoadingDoc column={2} />
                ) : (
                    <DocList docRefs={docRefs.audio} data={docAudio.data} title="Tài liệu Audio" />
                )}

                {docText.isLoading ? (
                    <SkeletonLoadingDoc column={2} />
                ) : (
                    <DocList docRefs={docRefs.post} data={docText.data} title="Bài viết" />
                )}

                {docVideo.isLoading ? (
                    <SkeletonLoadingDoc column={2} />
                ) : (
                    <DocList docRefs={docRefs.video} data={docVideo.data} title="Tài liệu Video" />
                )}
            </div>

            <ListeningTips docRefs={docRefs} />

            <ReadingTips docRefs={docRefs} />
        </Container>
    );
};

export default DocumentsPage;
