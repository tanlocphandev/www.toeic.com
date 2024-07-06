import { practices } from "@/mock/practice.mock";
import { tests } from "@/mock/test.mock";
import { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import useBackground from "@/hooks/useBackground";

const PracticeDetailsPage = () => {
    const { partId } = useParams();

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!partId) return;

        const _data = practices.find((t) => t.slug === partId);

        if (!_data) {
            navigate(-1);
            return;
        }

        setData(_data);
    }, [partId]);

    useBackground({
        selector: "#practice",
    });

    return (
        <div id="practice">
            <div className="max-w-6xl mx-auto p-2 pb-16">
                <h1 className="text-2xl font-medium text-center my-4 uppercase text-[#34447c]">
                    Luyện thi TOEIC online có đáp án
                </h1>

                <h3 className="text-xl text-center">{data?.title}</h3>

                <div className="flex justify-between mt-5">
                    <div className="grid grid-cols-5 gap-5 w-[70%] h-[176px] mt-9 m-auto">
                        {tests
                            .map((t) => ({ ...t, part: data?.part }))
                            .map((test, index) => (
                                <div
                                    key={index}
                                    className="bg-white border rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    <h2 className="text-xl font-semibold mb-2">{test.title}</h2>
                                    <p className="flex items-center text-xs">
                                        <Progress
                                            value={test.progress}
                                            className="bg-orange-200 mr-1"
                                        />
                                        {test.progress}%
                                    </p>
                                    <p>Tham gia: {test.participants}</p>
                                    <Link to={`/practice-lc-rc/${partId}/${test.part}/${test.id}`}>
                                        <button className="bg-[#34447c] text-white py-1 rounded-lg w-full mt-3">
                                            Study
                                        </button>
                                    </Link>
                                </div>
                            ))}
                    </div>

                    <div className="w-[20%]">
                        <div className="flex items-center">
                            <AiFillThunderbolt className="text-yellow-400 mr-1 text-2xl" />
                            <h3 className="text-[#13283b] font-bold text-xl">OTHER PRACTICES: </h3>
                        </div>

                        {practices.map((item, index) => (
                            <div key={index} className="my-2">
                                <Link to={`/practice-lc-rc/${item.slug}`}>
                                    <button className="bg-white text-black rounded-lg border hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 w-full py-2 ">
                                        {item.title}
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeDetailsPage;
