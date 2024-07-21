import Head from "@/components/shared/Head";
import ListQuestion from "@/components/shared/ListQuestion";
import QuestionQuantity from "@/components/shared/PartTest/QuestionQuantity";
import { Skeleton } from "@/components/ui/skeleton";
import { EXAM_TYPES, TIMER_TYPES } from "@/constants";
import { useGetQuestionByTestPartId } from "@/hooks/question/question.query.hook";
import { useGetQuestionTypeBySlug } from "@/hooks/questionType/useDataQuestionType";
import { useGetTestPartById } from "@/hooks/testPart/testPart.query.hook";
import useTimer from "@/hooks/userTimer";
import { useQuestionSlice } from "@/redux/slices/question.slice";
import { mapValueQuestionType, numberToTime } from "@/utils";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const PartDetailsPage = () => {
    const { slug, partId, testId } = useParams();
    const { answerSelected, orderSelected } = useQuestionSlice();
    const [stopCounter, setTopCounter] = useState(false);
    const timer = useTimer({ initialValue: 0, type: TIMER_TYPES.UP, stopCounter });

    const responseQuestionType = useGetQuestionTypeBySlug(slug);
    const responseTestPart = useGetTestPartById({
        partId,
        testId,
        select: (data) => data?.metadata,
    });
    const responseQuestions = useGetQuestionByTestPartId({
        testId,
        partId,
        select: (data) => data?.metadata,
    });

    const handleSubmit = () => {
        setTopCounter(true);
        console.log(`submit:::`, {
            answerSelected,
            orderSelected,
        });
    };

    return (
        <>
            <Head
                title={
                    responseQuestionType.isLoading
                        ? "Loading..."
                        : `#${responseTestPart?.data?.test?.test_of_year} ${mapValueQuestionType(
                              responseQuestionType.data?.metadata
                          )}`
                }
            />

            <div className="max-w-6xl mx-auto p-2 scroll-smooth relative">
                {responseTestPart.isLoading ? (
                    <div className="flex justify-center items-center mt-4">
                        <Skeleton className="h-8 w-[600px]" />
                    </div>
                ) : (
                    <div className="flex justify-center items-center mt-4">
                        <h1 className="text-3xl font-medium text-center uppercase text-[#34447c]">
                            {`Practice Set TOEIC ${responseTestPart?.data?.test?.test_of_year} ${responseTestPart?.data?.test?.test_name}`}
                        </h1>

                        <Link to={`/practice-lc-rc/${slug}`}>
                            <button className="bg-[#e3faff] py-1 border border-[#34447c] text-black px-2 rounded-lg ml-4 hover:bg-[#34447c] hover:text-white">
                                Thoát
                            </button>
                        </Link>
                    </div>
                )}

                <div className="flex justify-between mt-10">
                    <div className="flex justify-between flex-col w-[80%] mr-2 ">
                        {responseQuestions.isLoading ? (
                            Array.from({ length: 6 }).map((_, idx) => (
                                <div className="w-full rounded-lg border mb-3 p-3" key={idx}>
                                    <Skeleton className={"mb-4 h-8 w-full"} />
                                    <Skeleton className={"mb-4 h-20 w-full"} />

                                    <div className="flex space-x-4">
                                        <Skeleton className={"mb-4 h-8 w-8 rounded-full"} />
                                        <Skeleton className={"mb-4 h-8 w-full"} />
                                    </div>

                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <Skeleton
                                            className={"ml-12 mb-4 h-4 w-[300px]"}
                                            key={index}
                                        />
                                    ))}
                                </div>
                            ))
                        ) : (
                            <ListQuestion data={responseQuestions.data?.questions} />
                        )}
                    </div>

                    <div className="w-[20%] sticky top-0">
                        <QuestionQuantity
                            duration={numberToTime(timer)}
                            onSubmit={handleSubmit}
                            isLoading={responseQuestions.isLoading}
                            examType={EXAM_TYPES.ONE_TEST}
                            questionOrders={responseQuestions.data?.questionOrders}
                            activeQuantity={orderSelected}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartDetailsPage;
