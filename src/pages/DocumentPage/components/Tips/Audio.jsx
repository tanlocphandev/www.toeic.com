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

const Audio = ({ docRefs }) => {
    return (
        <div
            className="bg-[url('/bg-statistical.jpg')] w-full bg-no-repeat bg-cover bg-bottom pt-4 px-4 rounded-lg border border-[#34447c] flex space-y-4 flex-col"
            ref={docRefs.audio}
        >
            <h3 className="text-lg text-white bg-gray-500 w-[150px] py-1 px-2">Tài liệu Audio</h3>
            <div className="flex flex-wrap w-[100%] justify-between">
                {audio.map((audio, index) => (
                    <div
                        key={index}
                        className="flex space-x-4 bg-white p-4 rounded-lg w-[49%] mb-4"
                    >
                        <div className="w-[150px] h-[150px]">
                            <img className="w-full h-full object-contain" src={audio.img} alt="" />
                        </div>

                        <div>
                            <h3 className="text-2xl text-[#34447c] font-medium">{audio.title}</h3>
                            <p className="text-gray-500 my-4">{audio.sub}</p>
                            <button className="bg-[#34447c] text-white py-2 px-5 rounded-lg">
                                Xem ngay
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Audio;
