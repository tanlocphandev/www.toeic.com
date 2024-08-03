import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import { EXAM_TYPES } from "@/constants";
import { useGetExamDetails } from "@/hooks/exam/exam.query.hook";
import StatisticBox from "@/pages/ExamPage/components/StatisticBox";
import TableAnswerDetail from "@/pages/ExamPage/components/TableAnswerDetail";
import { numberToTime } from "@/utils";
import { Fragment, useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaAngleDown, FaBookReader, FaHeadphonesAlt } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";

const percentScore = (score) => {
    return Math.round((score * 100) / 495);
};

const ResultExamPage = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetExamDetails(id, (data) => data?.metadata);

    const [questionTypes, setQuestionTypes] = useState([]);

    useEffect(() => {
        if (!data || !data?.examDetails) return;

        const _questionTypes = [];

        data.examDetails.forEach((examDetail) => {
            if (examDetail?.group) {
                examDetail.group_questions.forEach((groupQuestion) => {
                    groupQuestion.tags.forEach((tag) => {
                        let record = {
                            ...tag,
                            part_number: groupQuestion?.part?.part_number,
                            questionWrong: 0,
                            questionCorrect: 0,
                            questionSkip: 0,
                            questionTotal: 1,
                            questions: [groupQuestion],
                        };

                        if (!groupQuestion.answer_id) {
                            record.questionSkip = 1;
                        } else if (
                            groupQuestion.answer_id === groupQuestion?.answerCorrect?.answer_id &&
                            groupQuestion?.answerCorrect?.answer_isCorrect
                        ) {
                            record.questionCorrect = 1;
                        } else {
                            record.questionWrong = 1;
                        }

                        const index = _questionTypes.findIndex(
                            (questionType) => questionType.tag_id === tag.tag_id
                        );

                        if (index !== -1) {
                            record = {
                                ..._questionTypes[index],
                                ...record,
                                questionTotal: _questionTypes[index].questionTotal + 1,
                                questionWrong:
                                    _questionTypes[index].questionWrong + record.questionWrong,
                                questionCorrect:
                                    _questionTypes[index].questionCorrect + record.questionCorrect,
                                questionSkip:
                                    _questionTypes[index].questionSkip + record.questionSkip,
                                questions: [..._questionTypes[index].questions, groupQuestion],
                            };

                            _questionTypes[index] = record;
                        } else {
                            _questionTypes.push(record);
                        }
                    });
                });
            } else {
                examDetail?.question?.tags?.forEach((tag) => {
                    let record = {
                        ...tag,
                        part_number: examDetail?.question?.part?.part_number,
                        questionWrong: 0,
                        questionCorrect: 0,
                        questionSkip: 0,
                        questionTotal: 1,
                        questions: [examDetail],
                    };

                    if (!examDetail.answer_id) {
                        record.questionSkip = 1;
                    } else if (
                        examDetail.answer_id === examDetail?.question?.answerCorrect?.answer_id &&
                        examDetail?.question?.answerCorrect?.answer_isCorrect
                    ) {
                        record.questionCorrect = 1;
                    } else {
                        record.questionWrong = 1;
                    }

                    const index = _questionTypes.findIndex(
                        (questionType) => questionType.tag_id === tag.tag_id
                    );

                    if (index !== -1) {
                        record = {
                            ..._questionTypes[index],
                            ...record,
                            questionTotal: _questionTypes[index].questionTotal + 1,
                            questionWrong:
                                _questionTypes[index].questionWrong + record.questionWrong,
                            questionCorrect:
                                _questionTypes[index].questionCorrect + record.questionCorrect,
                            questionSkip: _questionTypes[index].questionSkip + record.questionSkip,
                            questions: [..._questionTypes[index].questions, examDetail],
                        };

                        _questionTypes[index] = record;
                    } else {
                        _questionTypes.push(record);
                    }
                });
            }
        });

        const filterByPart = [];

        _questionTypes.forEach((questionType) => {
            const index = filterByPart.findIndex(
                (item) => item.part_number === questionType.part_number
            );

            if (index !== -1) {
                filterByPart[index] = {
                    ...filterByPart[index],
                    tags: [...filterByPart[index].tags, questionType],
                };
            } else {
                filterByPart.push({
                    part_number: questionType.part_number,
                    tags: [questionType],
                });
            }
        });

        setQuestionTypes(filterByPart);
    }, [data]);

    return (
        <Container title={"Kết quả luyện thi"} className="pt-4">
            <div className="flex justify-center mb-4">
                <h1 className="text-3xl font-medium text-center uppercase text-[#34447c]">
                    Kết quả luyện thi
                </h1>
            </div>

            <div className="flex justify-between">
                <div className="flex justify-between flex-col w-[80%] mr-2">
                    <div className="rounded-lg border shadow-md p-4 mb-4">
                        {isLoading ? (
                            <Skeleton className={"mb-4 h-12 w-full"} />
                        ) : (
                            <div className="bg-[#e3faff] text-[#34447c] p-3 rounded mb-6 flex items-center border border-[#34447c]">
                                <RiErrorWarningFill className="text-xl mr-2" />
                                <p>
                                    Đánh giá{" "}
                                    {data?.exam_type === EXAM_TYPES.FULL_TEST
                                        ? `điểm EST FullTest ${data?.test?.test_name}`
                                        : `quá trình luyện PRACTICE SET TOEIC ${data?.test?.test_of_year} ${data?.test?.test_name}`}
                                </p>
                            </div>
                        )}

                        <div className="flex justify-between space-x-2">
                            {isLoading ? (
                                Array.from({ length: 4 }).map((_, idx) => (
                                    <Skeleton key={idx} className={"mb-4 h-16 w-full"} />
                                ))
                            ) : (
                                <Fragment>
                                    <StatisticBox
                                        title={"Trả lời đúng"}
                                        text={`${data?.exam_count_question_correct}/${data?.exam_total_question}`}
                                        type={"correct"}
                                        color={"green"}
                                    />

                                    <StatisticBox
                                        title={"Trả lời sai"}
                                        text={`${data?.exam_count_question_wrong}/${data?.exam_total_question}`}
                                        type={"wrong"}
                                        color={"red"}
                                    />

                                    <StatisticBox
                                        title={"Bỏ qua"}
                                        text={`${data?.exam_count_question_skip}/${data?.exam_total_question}`}
                                        type={"skip"}
                                        color={"gray"}
                                    />

                                    <StatisticBox
                                        title={"Hoàn thành trong"}
                                        text={numberToTime(data?.exam_used_timer)}
                                        type={"clock"}
                                        color={"yellow"}
                                    />
                                </Fragment>
                            )}
                        </div>

                        {isLoading ? (
                            <div className="flex justify-between mt-6">
                                <div className="w-[30%] flex">
                                    <BsStars className="text-5xl text-yellow-500" />

                                    <div className="flex items-center justify-center">
                                        <Skeleton className={"w-36 h-36 rounded-full"} />
                                    </div>
                                </div>

                                <div className="w-[70%] flex flex-col">
                                    <Skeleton className="text-lg bg-gray-100 p-3 flex items-center justify-center h-12 mb-2" />

                                    <div className="mt-4">
                                        {Array.from({ length: 2 }).map((_, idx) => (
                                            <div
                                                className="border p-4 text-[#34447c] h-[130px]"
                                                key={idx}
                                            >
                                                <Skeleton className={"w-44 h-6"} />
                                                <Skeleton className="h-3 mt-8" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : data?.exam_type === EXAM_TYPES.FULL_TEST ? (
                            <div className="flex justify-between mt-6">
                                <div className="w-[30%] flex">
                                    <BsStars className="text-5xl text-yellow-500" />

                                    <div className="flex items-center justify-center">
                                        <div className="w-36 h-36 border-8 rounded-full flex items-center justify-center flex-col">
                                            <p className="text-xl font-bold">
                                                {data?.score?.totalScore}/990
                                            </p>
                                            <p className="text-sm text-red-600 font-medium">
                                                TOTAL SCORE
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[70%] flex flex-col">
                                    <p className="text-lg bg-gray-100 p-3 flex items-center justify-center">
                                        <GoGoal className="mr-2 text-red-500 text-xl" /> Mục tiêu:
                                        630
                                    </p>

                                    <div className="mt-4">
                                        <div className="border p-4 text-[#34447c] h-[120px]">
                                            <div className="flex items-center">
                                                <FaHeadphonesAlt />
                                                <p className="text-lg font-semibold mx-2">
                                                    LISTENING:
                                                </p>
                                                <p className="text-lg font-bold">
                                                    {data?.exam_count_listening_correct}/100
                                                </p>
                                            </div>
                                            <div className="relative h-3 bg-gray-300 mt-8 rounded">
                                                <div
                                                    className="h-3 bg-[#34447c] rounded-md"
                                                    style={{
                                                        width: `${percentScore(
                                                            data?.score?.listening
                                                                ?.listening_score || 0
                                                        )}%`,
                                                    }}
                                                />

                                                <div className="flex justify-between pt-1">
                                                    <p>{data?.score?.listening?.listening_score}</p>
                                                    <p>495</p>
                                                </div>

                                                <div
                                                    className="absolute top-[-30px] flex flex-col justify-center items-center"
                                                    style={{
                                                        left: `${
                                                            percentScore(
                                                                data?.score?.listening
                                                                    ?.listening_score || 0
                                                            ) - 2.4
                                                        }%`,
                                                        transform: "translateY(-10%)",
                                                    }}
                                                >
                                                    <p className="max-w-7 min-w-5 h-5 bg-yellow-500 rounded flex items-center justify-center text-sm">
                                                        {data?.score?.listening?.listening_score}
                                                    </p>
                                                    <FaAngleDown className="text-yellow-500 text-sm" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-4 text-[#34447c] h-[130px]">
                                            <div className="flex items-center">
                                                <FaBookReader />
                                                <p className="text-lg font-semibold mx-2">
                                                    READING:
                                                </p>
                                                <p className="text-lg font-bold">
                                                    {data?.exam_count_reading_correct || 0}
                                                    /100
                                                </p>
                                            </div>
                                            <div className="relative h-3 bg-gray-300 mt-8 rounded">
                                                <div
                                                    className=" h-3 bg-[#34447c] rounded-md"
                                                    style={{
                                                        width: `${percentScore(
                                                            data?.score?.reading?.reading_score || 0
                                                        )}%`,
                                                    }}
                                                />
                                                <div className="flex justify-between pt-1">
                                                    <p>{data?.score?.reading?.reading_score}</p>
                                                    <p>495</p>
                                                </div>
                                                <div
                                                    className="absolute top-[-30px] left-[0px] flex flex-col justify-center items-center"
                                                    style={{
                                                        left: `${
                                                            percentScore(
                                                                data?.score?.reading
                                                                    ?.reading_score || 0
                                                            ) - 2
                                                        }%`,
                                                        transform: "translateY(-10%)",
                                                    }}
                                                >
                                                    <p className="max-w-7 min-w-5 h-5 bg-yellow-500 rounded flex items-center justify-center text-sm">
                                                        {data?.score?.reading?.reading_score}
                                                    </p>
                                                    <FaAngleDown className="text-yellow-500 text-sm" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className=" rounded-lg border shadow-md p-4">
                        <div>
                            {isLoading || !questionTypes.length ? (
                                Array.from({ length: 10 }).map((_, index) => (
                                    <Skeleton
                                        key={index}
                                        className="text-lg bg-gray-100 p-3 flex items-center justify-center h-12 mb-2"
                                    />
                                ))
                            ) : (
                                <TableAnswerDetail dataResult={questionTypes} />
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-[20%]">
                    <div className="rounded-lg border shadow-md">
                        <button className="bg-slate-200 font-medium px-1 py-2 rounded-tl-lg rounded-tr-lg w-full mb-3">
                            Thông tin kỳ thi
                        </button>

                        {isLoading ? (
                            <div className="px-4 flex flex-col space-y-1">
                                {Array.from({ length: 2 }).map((_, index) => (
                                    <Skeleton key={index} className={"w-full h-[1.34rem]"} />
                                ))}
                            </div>
                        ) : (
                            <div className="px-4">
                                <p>+ Bộ đề thi: ETS {data?.test?.test_of_year}</p>
                                <p>
                                    +{" "}
                                    {data?.exam_type === EXAM_TYPES.ONE_TEST
                                        ? `PRACTICE ${data?.test?.test_name}`
                                        : `EST FullTest ${data?.test?.test_name}`}
                                </p>
                            </div>
                        )}

                        {isLoading ? (
                            <div className="my-4 flex justify-center space-x-1">
                                {Array.from({ length: 2 }).map((_, index) => (
                                    <Skeleton key={index} className={"w-[90px] h-[2rem]"} />
                                ))}
                            </div>
                        ) : (
                            <div className="my-4 flex justify-center space-x-1">
                                <Button
                                    asChild
                                    className="bg-[#34447c] p-2 text-white rounded hover:opacity-80 hover:bg-[#34447c]"
                                >
                                    <Link to={`/results/${id}`}>Xem đáp án</Link>
                                </Button>

                                <Button
                                    asChild
                                    className="bg-[#34447c] p-2 text-white rounded hover:opacity-80 hover:bg-[#34447c]"
                                >
                                    <Link to={`/exams`}>Tiếp tục thi</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ResultExamPage;
