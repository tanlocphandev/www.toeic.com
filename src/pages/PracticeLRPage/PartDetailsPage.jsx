import Head from "@/components/shared/Head";
import ListQuestion from "@/components/shared/ListQuestion";
import QuestionQuantity from "@/components/shared/PartTest/QuestionQuantity";
import SkeletonQuestion from "@/components/shared/SkeletonQuestion";
import Container from "@/components/ui/container";
import PlaceHolderLoading from "@/components/ui/place-holder-loading";
import { Skeleton } from "@/components/ui/skeleton";
import { toastConfigWarning } from "@/configs/toast.config";
import { EXAM_TYPES, TIMER_TYPES } from "@/constants";
import { useMutationCreateExam } from "@/hooks/exam/exam.mutation.hook";
import {
    useGetQuestionByTestPartId,
    useGetQuestionByTestQuestionTypeId,
} from "@/hooks/question/question.query.hook";
import { useGetQuestionTypeBySlug } from "@/hooks/questionType/useDataQuestionType";
import { useGetTestPartById } from "@/hooks/testPart/testPart.query.hook";
import { useRouter } from "@/hooks/useRouter";
import useTimer from "@/hooks/useTimer";
import { useAuthSlice } from "@/redux/slices/auth.slice";
import { questionActions, useQuestionSlice } from "@/redux/slices/question.slice";
import { mapValueQuestionType, numberToTime } from "@/utils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

const PartDetailsPage = () => {
    const dispatch = useDispatch();
    const { mutate, isPending } = useMutationCreateExam();
    const router = useRouter();

    const { slug, partId, testId } = useParams();
    const { answerSelected, orderSelected } = useQuestionSlice();
    const { userId } = useAuthSlice();

    const [stopCounter, setTopCounter] = useState(false);
    const timer = useTimer({ initialValue: 0, type: TIMER_TYPES.UP, stopCounter });

    const responseQuestionType = useGetQuestionTypeBySlug(slug);
    const responseTestPart = useGetTestPartById({
        partId,
        testId,
        select: (data) => data?.metadata,
    });
    const responseQuestions = useGetQuestionByTestQuestionTypeId({
        testId,
        questionTypeId: responseQuestionType.data?.metadata?.type_id,
        select: (data) => data?.metadata,
    });

    useEffect(() => {
        return () => {
            dispatch(questionActions.reset());
        };
    }, []);

    const handleSubmit = () => {
        const { data } = responseQuestions;

        if (!data || !data?.questions) return;

        const { questions } = data;
        const newAnswer = { ...answerSelected };

        questions.forEach((question) => {
            if (question?.group_id) {
                question.group_questions.forEach((gQ) => {
                    if (!newAnswer[gQ.question_id]) {
                        newAnswer[gQ.question_id] = null;
                    }
                });

                return;
            }

            if (!newAnswer[question.question_id]) {
                newAnswer[question.question_id] = null;
            }
        });

        const payload = {
            answers: newAnswer,
            timer,
            questionTypeId: responseQuestionType.data?.metadata?.type_id,
            testId: responseTestPart.data?.test_id,
            userId: +userId,
            examType: EXAM_TYPES.ONE_TEST,
        };

        if (Object.values(payload.answers).every((answer) => !answer)) {
            toast.warning("Vui lòng chọn đáp án!", toastConfigWarning);
            return;
        }

        setTopCounter(true);

        mutate(payload, {
            onSuccess: (data) => {
                if (data.metadata) {
                    router.push(`/results/${data.metadata}`);
                }
            },
        });
    };

    return (
        <>
            <PlaceHolderLoading isLoading={isPending} textLoading="Đang chấm điểm" />

            <Head
                title={
                    responseQuestionType.isLoading
                        ? "Loading..."
                        : `#${responseTestPart?.data?.test?.test_of_year} ${mapValueQuestionType(
                              responseQuestionType.data?.metadata
                          )}`
                }
            />

            <Container>
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
                            <SkeletonQuestion />
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
                            isPending={isPending}
                        />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PartDetailsPage;
