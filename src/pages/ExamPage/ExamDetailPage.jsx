import QuestionQuantity from "@/components/shared/PartTest/QuestionQuantity";
import PartFive from "../PracticeLRPage/components/PartFive";
import PartFour from "../PracticeLRPage/components/PartFour";
import PartOne from "../PracticeLRPage/components/PartOne";
import PartSeven1 from "../PracticeLRPage/components/PartSeven1";
import PartSeven2 from "../PracticeLRPage/components/PartSeven2";
import PartSeven3 from "../PracticeLRPage/components/PartSeven3";
import PartSix from "../PracticeLRPage/components/PartSix";
import PartThree from "../PracticeLRPage/components/PartThree";
import PartTwo from "../PracticeLRPage/components/PartTwo";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const ExamDetailPage = () => {
    const { id } = useParams();

    const partRefs = {
        part1: useRef(null),
        part2: useRef(null),
        part3: useRef(null),
        part4: useRef(null),
        part5: useRef(null),
        part6: useRef(null),
        part7: useRef(null),
    };

    const scrollToPart = (part) => {
        partRefs[part].current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="max-w-6xl mx-auto p-2">
            {/* Khi nộp bài thì hiện lên */}
            <div className="flex justify-center my-5">
                {Array.from({ length: 7 }).map((_, index) => (
                    <button
                        key={index}
                        className="text-[#34447c] bg-[#e3faff] border border-[#34447c] hover:bg-[#34447c] hover:text-white py-1 px-5 ml-2 rounded-lg text-[14px]"
                        onClick={() => scrollToPart(`part${index + 1}`)}
                    >
                        Part {index + 1}
                    </button>
                ))}
            </div>

            <div className="flex justify-between mt-10">
                <div className="flex justify-between flex-col w-[80%] mr-2 ">
                    <div ref={partRefs.part1}>
                        <PartOne />
                    </div>
                    <div ref={partRefs.part2}>
                        <PartTwo />
                    </div>
                    <div ref={partRefs.part3}>
                        <PartThree />
                    </div>
                    <div ref={partRefs.part4}>
                        <PartFour />
                    </div>
                    <div ref={partRefs.part5}>
                        <PartFive />
                    </div>
                    <div ref={partRefs.part6}>
                        <PartSix />
                    </div>
                    <div ref={partRefs.part7}>
                        <PartSeven1 />
                    </div>
                    <div>
                        <PartSeven2 />
                    </div>
                    <div>
                        <PartSeven3 />
                    </div>
                </div>

                <div className="w-[20%]">
                    <QuestionQuantity partId={200} id={id} />
                </div>
            </div>
        </div>
    );
};

export default ExamDetailPage;
