import { memo } from "react";
import { Link } from "react-router-dom";

const audio = [
    {
        title: "Audio Giao Tiếp Ngữ Âm",
        sub: "Các em nhấn vào đây nhé !!!!",
        img: "/doc/audio1.jpg",
    },
    {
        title: "Audio Giao Tiếp Ngữ Âm",
        sub: "Các em nhấn vào đây nhé !!!!",
        img: "/doc/audio1.jpg",
    },
    {
        title: "Audio Giao Tiếp Ngữ Âm",
        sub: "Các em nhấn vào đây nhé !!!!",
        img: "/doc/audio1.jpg",
    },
];

const DocList = ({ docRefs, data = [], title }) => {
    return (
        <div
            className="bg-[url('/bg-statistical.jpg')] w-full bg-no-repeat bg-cover bg-bottom pt-4 px-4 rounded-lg border border-[#34447c] flex space-y-4 flex-col"
            ref={docRefs}
        >
            <h3 className="text-lg text-white bg-gray-500 w-[150px] py-1 px-2">{title}</h3>

            <div className="flex flex-wrap w-full justify-between">
                {data.map((audio, index) => (
                    <div
                        key={index}
                        className="flex space-x-4 bg-white p-4 rounded-lg w-[49%] mb-4"
                    >
                        <div className="w-[150px] h-[150px]">
                            <img
                                className="w-full h-full object-contain"
                                src={audio?.doc_thumbnail?.url || "/doc/audio1.jpg"}
                                alt=""
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl text-[#34447c] font-medium">
                                {audio.doc_title}
                            </h3>

                            <p className="text-gray-500 my-4">{audio.doc_desc}</p>

                            <Link
                                to={audio.doc_link || `/documents/${audio.doc_id}`}
                                className="bg-[#34447c] text-white py-2 px-5 rounded-lg"
                                target={audio.doc_link ? "_blank" : "_self"}
                            >
                                Xem ngay
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

DocList.displayName = "DocList";

export default memo(DocList);
