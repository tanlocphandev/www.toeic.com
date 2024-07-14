import { Progress } from "@/components/ui/progress";
import { FaRegClock, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useBackground from "@/hooks/useBackground";

const exams = [
    {
        title: "EST FullTest 1",
        progress: 20,
        participants: 3,
        id: 1,
    },
    {
        title: "EST FullTest 2",
        progress: 40,
        participants: 5,
        id: 2,
    },
    {
        title: "EST FullTest 3",
        progress: 60,
        participants: 7,
        id: 3,
    },
    {
        title: "EST FullTest 4",
        progress: 80,
        participants: 9,
        id: 4,
    },
    {
        title: "EST FullTest 5",
        progress: 100,
        participants: 11,
        id: 5,
    },
    {
        title: "EST FullTest 6",
        progress: 100,
        participants: 11,
        id: 6,
    },
    {
        title: "EST FullTest 7",
        progress: 100,
        participants: 11,
        id: 7,
    },
    {
        title: "EST FullTest 8",
        progress: 100,
        participants: 11,
        id: 8,
    },
    {
        title: "EST FullTest 9",
        progress: 100,
        participants: 11,
        id: 9,
    },
    {
        title: "EST FullTest 10",
        progress: 100,
        participants: 11,
        id: 10,
    },
];

const ExamPage = () => {
    useBackground({ selector: "#exam" });

    return (
        <div id="exam">
            <div className="max-w-6xl mx-auto p-2 pb-16">
                <h1 className="text-2xl font-medium text-center my-4 uppercase text-[#34447c]">
                    Start your toeic online fulltest now
                </h1>

                <div className="mt-10">
                    <div className="flex justify-center mb-5">
                        <button className="text-[#34447c] bg-[#e3faff] border border-[#34447c] hover:bg-[#34447c] hover:text-white py-1 px-5 ml-2 rounded-lg text-[14px]">
                            2018
                        </button>
                        <button className="text-[#34447c] bg-[#e3faff] border border-[#34447c] hover:bg-[#34447c] hover:text-white py-1 px-5 ml-2 rounded-lg text-[14px]">
                            2019
                        </button>
                        <button className="text-[#34447c] bg-[#e3faff] border border-[#34447c] hover:bg-[#34447c] hover:text-white py-1 px-5 ml-2 rounded-lg text-[14px]">
                            2020
                        </button>
                        <button className="text-[#34447c] bg-[#e3faff] border border-[#34447c] hover:bg-[#34447c] hover:text-white py-1 px-5 ml-2 rounded-lg text-[14px]">
                            2021
                        </button>
                        <button className="text-[#34447c] bg-[#e3faff] border border-[#34447c] hover:bg-[#34447c] hover:text-white py-1 px-5 ml-2 rounded-lg text-[14px]">
                            2022
                        </button>
                        <button className="text-[#34447c] bg-[#e3faff] border border-[#34447c] hover:bg-[#34447c] hover:text-white py-1 px-5 ml-2 rounded-lg text-[14px]">
                            2023
                        </button>
                    </div>

                    <div className="flex justify-between">
                        <div className="grid grid-cols-5 gap-5 m-auto">
                            {exams.map((test, index) => (
                                <div
                                    key={index}
                                    className="bg-white border rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    <img src="/exam.jpg" alt="" />
                                    <h2 className="text-xl font-semibold my-2">{test.title}</h2>
                                    <p className="flex items-center text-xs">
                                        <Progress
                                            value={test.progress}
                                            className="bg-orange-200 mr-1"
                                        />
                                        {test.progress}%
                                    </p>

                                    <div className="flex justify-between my-2">
                                        <p className="flex items-center">
                                            <FaUserEdit className="mr-1" /> {test.participants}
                                        </p>
                                        <p className="flex items-center">
                                            <FaRegClock className="mr-1" />2 hours
                                        </p>
                                    </div>

                                    <Link to={`/exams/${test.id}`}>
                                        <button className="bg-[#34447c] text-white py-1 rounded-lg w-full mt-3">
                                            Thi ngay
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamPage;
