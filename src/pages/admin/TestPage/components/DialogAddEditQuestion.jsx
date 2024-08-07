import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import LoadingButton from "@/components/ui/loading-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import EditQuestion from "@/pages/admin/TestPage/components/EditQuestion";
import { memo, useState } from "react";

const DialogAddEditQuestion = ({
    open,
    onClose,
    isEditMode = false,
    selectedQuestion = null,
    onSubmit = (values) => {},
    isPending = false,
}) => {
    const [state, setData] = useState(selectedQuestion);

    const handleChangeExplain = (value) => {
        setData((prev) => ({ ...prev, question_explain: value }));
    };

    const handleChangeTranscript = (value) => {
        setData((prev) => ({ ...prev, question_transcript: value }));
    };

    const onChangeAnswer = (answerId, questionId) => {
        const foundIndexAnswerCorrect = state.answers.findIndex((item) => item.answer_isCorrect);
        const foundIndex = state.answers.findIndex((item) => item.answer_id === answerId);

        if (foundIndex === -1 || foundIndexAnswerCorrect === -1) return;

        state.answers[foundIndex] = {
            ...state.answers[foundIndex],
            answer_isCorrect: 1,
        };

        state.answers[foundIndexAnswerCorrect] = {
            ...state.answers[foundIndexAnswerCorrect],
            answer_isCorrect: 0,
        };

        setData((prev) => ({ ...prev, answers: state.answers }));
    };

    const handleSubmit = () => {
        const payload = {
            question_transcript: state.question_transcript,
            question_explain: state.question_explain,
            answers: state.answers,
            question_id: state.question_id,
            part_id: state.part_id,
        };

        onSubmit(payload);
    };

    if (!open) return null;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className=" max-w-3xl">
                <DialogHeader>
                    <div>
                        <DialogTitle>
                            {isEditMode ? `Chỉnh sửa câu hỏi` : `Thêm mới câu hỏi`}
                        </DialogTitle>
                        <DialogDescription>
                            {isEditMode
                                ? `Điền đầy đủ thông tin trước khi cập nhật`
                                : `Điền đầy đủ thông tin trước khi thêm`}
                        </DialogDescription>
                    </div>
                </DialogHeader>

                <div className="max-h-[70vh]">
                    <ScrollArea className="h-full">
                        <EditQuestion
                            onChangeExplain={handleChangeExplain}
                            onChangeTranscript={handleChangeTranscript}
                            onChangeAnswer={onChangeAnswer}
                            data={state}
                        />
                    </ScrollArea>
                </div>

                <DialogFooter>
                    <LoadingButton
                        isLoading={isPending}
                        variant="destructive"
                        onClick={handleSubmit}
                    >
                        Lưu thay đổi
                    </LoadingButton>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

DialogAddEditQuestion.displayName = "DialogAddEditQuestion";

export default memo(DialogAddEditQuestion);
