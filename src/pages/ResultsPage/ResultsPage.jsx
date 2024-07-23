import Head from "@/components/shared/Head";
import ListQuestion from "@/components/shared/ListQuestion";
import QuestionQuantity from "@/components/shared/PartTest/QuestionQuantity";
import SkeletonQuestion from "@/components/shared/SkeletonQuestion";
import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetExamDetails } from "@/hooks/exam/exam.query.hook";
import { mapValueToResult, numberToTime } from "@/utils";
import { Link, useParams } from "react-router-dom";

const ResultsPage = () => {
    const { resultId } = useParams();

    const { data, isLoading } = useGetExamDetails(resultId, (data) => data?.metadata);

    return (
        <>
            <Head title={"Kết quả chi tiết"} />

            <Container className={"min-h-[100vh]"}>
                {isLoading ? (
                    <div className="flex justify-center items-center mt-4">
                        <Skeleton className="h-8 w-[600px]" />
                    </div>
                ) : (
                    <div className="flex justify-center items-center mt-4">
                        <h1 className="text-3xl font-medium text-center uppercase text-[#34447c]">
                            {`Đáp án chi tiết: Practice Set TOEIC ${data?.test?.test_of_year} ${data?.test?.test_name}`}
                        </h1>

                        <Link to={`/`}>
                            <button className="bg-[#e3faff] py-1 border border-[#34447c] text-black px-2 rounded-lg ml-4 hover:bg-[#34447c] hover:text-white">
                                Quay về trang kết quả
                            </button>
                        </Link>
                    </div>
                )}

                <div className="flex justify-between mt-10">
                    <div className="flex justify-between flex-col w-[80%] mr-2 ">
                        {isLoading ? (
                            <SkeletonQuestion />
                        ) : (
                            <ListQuestion data={mapValueToResult(data?.examDetails)} isResult />
                        )}
                    </div>

                    <div className="w-[20%] sticky top-0">
                        <QuestionQuantity
                            duration={numberToTime(data?.exam_used_timer)}
                            isLoading={isLoading}
                            examType={data?.exam_type}
                            questionOrders={data?.questionOrders}
                            isShowAnswerCorrect
                            isShowSubmit={false}
                            questionCorrect={data?.exam_count_question_correct}
                            questionTotal={data?.exam_total_question}
                            questionWrong={data?.exam_count_question_wrong}
                            questionSkip={data?.exam_count_question_skip}
                            questionOrderCorrect={data?.questionOrderCorrect}
                            questionOrderWrong={data?.questionOrderWrong}
                            questionOrderSkip={data?.questionOrderSkip}
                        />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ResultsPage;
