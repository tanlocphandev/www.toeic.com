import { toastConfigError } from "@/configs/toast.config";
import { QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const adminRoute = (path) => (path ? `/admin/${path}` : "/admin");

export const getQueryKeys = (params = {}) => {
    return Object.values(params);
};

export const mapperAnswerToText = (answerOrder) => {
    return {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
    }[answerOrder];
};

export const mapValueToReview = (data = []) => {
    return data.map((item) => {
        if (item.group_question_order) {
            return {
                group_id: item.group_id,
                group_question_order: item.group_question_order,
                group_transcript: item.group_transcript,
                part: item?.part?.part_number,
                uploadAudioCloud: item?.group_audio,
                audio: item?.group_audio,
                uploadImageCloud: item?.group_image,
                text: item?.group_text,
                question_type: item.questionType.type_name,
                group_questions: item.group_questions.map((q) => {
                    const answerCorrect = q.answers.find((a) => a.answer_isCorrect);

                    return {
                        order: q.question_order,
                        group_question_order: item.group_question_order,
                        text_question: q.question_text,
                        is_correct_cap: mapperAnswerToText(answerCorrect?.answer_order),
                        question_type: q.questionType.type_name,
                        tags: q.tags.map((t) => t.tag.tag_name),
                        part: q?.part?.part_number,
                        explain: q.question_explain,
                        answers: q.answers,
                    };
                }),
            };
        }

        const answerCorrect = item.answers.find((a) => a.answer_isCorrect);

        return {
            order: item.question_order,
            is_correct_cap: mapperAnswerToText(answerCorrect?.answer_order),
            question_type: item.questionType.type_name,
            tags: item.tags.map((t) => t.tag.tag_name),
            part: item?.part?.part_number,
            transcript: item.question_transcript,
            explain: item.question_explain,
            answers: item.answers,
            uploadImageCloud: item?.question_image,
            uploadAudioCloud: item?.question_audio,
            text_question: item.question_text,
        };
    });
};

export const errorMessage = (error) => {
    let message = "";

    if (isAxiosError(error) && error.response && error.response.data) {
        message = error.response.data.message;
    } else {
        message = error.message;
    }

    toast.error(message, toastConfigError);
};

export const sleep = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const mapValueQuestionType = (value) => {
    return `Phần ${value?.part?.part_number}: ${
        value?.part?.part_number >= 7 ? `Đọc hiểu - ${value?.type_name}` : value?.type_name
    }`;
};
