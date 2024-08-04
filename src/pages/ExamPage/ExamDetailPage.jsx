import ConfirmNavigation from "@/components/shared/dialog/ConfirmNavigation";
import DialogConfirm from "@/components/shared/dialog/DialogConfirm";
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
import { useGetQuestionByTest } from "@/hooks/question/question.query.hook";
import { useGetTestDetails } from "@/hooks/test/test.query.hook";
import usePreventLeaveBrowser from "@/hooks/usePreventLeaveBrowser";
import useBlockerRoute from "@/hooks/usePromptLeaveRoute";
import { useRouter } from "@/hooks/useRouter";
import useTimer from "@/hooks/useTimer";
import { useAuthSlice } from "@/redux/slices/auth.slice";
import { questionActions, useQuestionSlice } from "@/redux/slices/question.slice";
import { numberToTime } from "@/utils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ExamDetailPage = () => {
    const { id } = useParams();
    const { userId } = useAuthSlice();
    const { answerSelected, orderSelected } = useQuestionSlice();

    const router = useRouter();
    const dispatch = useDispatch();
    usePreventLeaveBrowser();

    const [stopCounter, setTopCounter] = useState(false);
    const timer = useTimer({ initialValue: 60 * 120, type: TIMER_TYPES.DOWN, stopCounter });
    const [block, setBlock] = useState(true);
    const [confirmSubmit, setConfirmSubmit] = useState(false);

    const blocker = useBlockerRoute(block);
    const { mutate, isPending } = useMutationCreateExam();
    const { data, isLoading } = useGetQuestionByTest(id, (data) => {
        return {
            questions: data?.metadata,
            questionOrders: data?.options,
        };
    });
    const { data: detailsTest } = useGetTestDetails(id);

    useEffect(() => {
        return () => {
            dispatch(questionActions.reset());
        };
    }, []);

    useEffect(() => {
        if (timer > 60) return;

        if (timer === 60) {
            toast.warning("Bạn còn 1 phút để làm bài!", toastConfigWarning);
            return;
        }

        if (timer === 30) {
            toast.warning("Đãy còn 30s để làm bài!", toastConfigWarning);
            return;
        }

        if (timer === 0) {
            toast.warning("Bạn đã hết thời gian làm bài. Vui lòng chờ xử lý!", toastConfigWarning);
            setTopCounter(true);
            handleSubmit();
        }
    }, [timer]);

    const handleConfirmSubmit = () => {
        setConfirmSubmit(true);
        setTopCounter(true);
    };

    const handleCancelSubmit = () => {
        setConfirmSubmit(false);
        setTopCounter(false);
    };

    const handleSubmit = () => {
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

        const usedTimer = 120 * 60 - timer;

        const payload = {
            answers: newAnswer,
            timer: usedTimer <= 0 ? 120 * 60 : usedTimer,
            questionTypeId: null,
            testId: +id,
            userId: +userId,
            examType: EXAM_TYPES.FULL_TEST,
        };

        if (Object.values(payload.answers).every((answer) => !answer)) {
            toast.warning("Vui lòng chọn ít nhất 1 câu!", toastConfigWarning);
            return;
        }

        setTopCounter(true);

        mutate(payload, {
            onSuccess: (data) => {
                if (data.metadata) {
                    setBlock(false);
                    router.delay(`/finished/${data.metadata}`);
                }
            },
        });
    };

    return (
        <Container>
            <DialogConfirm
                open={confirmSubmit}
                onConfirm={handleSubmit}
                title="Xác nhận trước khi nộp bài"
                message="Bạn có chắc chắn muốn bài? Hãy suy nghĩ kĩ trước khi nộp bài!"
                onClose={handleCancelSubmit}
            />

            <Head
                title={
                    isLoading
                        ? "Loading..."
                        : `EST FullTest ${detailsTest?.metadata?.test_no_of_year}`
                }
            />

            <ConfirmNavigation
                btnTextKeep="Tiếp tục làm bài"
                btnTextLeave="Thoát bài thi"
                title="Bạn đang trong quá trình thực bài thi"
                blocker={blocker}
            />

            <PlaceHolderLoading isLoading={isPending} textLoading="Đang nộp bài..." />

            {isLoading ? (
                <div className="flex justify-center items-center mt-4">
                    <Skeleton className="h-8 w-[600px]" />
                </div>
            ) : (
                <div className="flex justify-center items-center mt-4">
                    <h1 className="text-3xl font-medium text-center uppercase text-[#34447c]">
                        {`EST FullTest ${detailsTest?.metadata?.test_no_of_year}`}
                    </h1>
                </div>
            )}

            <div className="flex justify-between mt-10">
                <div className="flex justify-between flex-col w-[80%] mr-2 ">
                    {isLoading ? (
                        <SkeletonQuestion />
                    ) : (
                        <ListQuestion
                            detailsTest={detailsTest?.metadata}
                            data={data?.questions}
                            isFullTest
                        />
                    )}
                </div>

                <div className="w-[20%] sticky top-0">
                    <QuestionQuantity
                        duration={numberToTime(timer)}
                        onSubmit={handleConfirmSubmit}
                        isLoading={isLoading}
                        examType={EXAM_TYPES.FULL_TEST}
                        questionOrders={data?.questionOrders}
                        activeQuantity={orderSelected}
                        isPending={isPending}
                    />
                </div>
            </div>
        </Container>
    );
};

export default ExamDetailPage;
