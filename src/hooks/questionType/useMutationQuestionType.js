import { toastConfigError, toastConfigSuccess } from "@/configs/toast.config";
import { queryKeyQuestionType } from "@/hooks/questionType/useDataQuestionType";
import questionTypeService from "@/services/questionType.service";
import { errorMessage, sleep } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

const useMutationQuestionType = ({ page, search, setSelected }) => {
    const queryClient = useQueryClient();
    const [error, setError] = useState(null);
    const [errorExist, setErrorExist] = useState([]);

    const handleCloseExist = () => {
        setErrorExist([]);
    };

    const handleClearError = () => {
        if (!error) return;
        setError(null);
    };

    const addMutation = useMutation({
        mutationFn: (values) => questionTypeService.create(values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyQuestionType({ search, page }),
                exact: true,
            });
            setSelected({
                open: false,
                data: null,
            });
            handleClearError();
            toast.success("Thêm loại câu hỏi thành công", toastConfigSuccess);
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response && error.response.data) {
                const { message, details } = error.response.data;
                toast.error(message, toastConfigError);
                setError(details);
            }
        },
    });

    const uploadMutation = useMutation({
        mutationFn: (values) => questionTypeService.upload(values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyQuestionType({ search, page }),
                exact: true,
            });

            handleClearError();

            toast.success("Upload thành công", toastConfigSuccess);
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response && error.response.data) {
                const { message, details } = error.response.data;

                let newMessage = message;

                if (details) {
                    setErrorExist(details.map((t) => ({ name: t.typeName })));
                }

                toast.error(newMessage, toastConfigError);
            }
        },
    });

    const updateMutation = useMutation({
        mutationFn: (values) => questionTypeService.update(values.typeId, values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyQuestionType({ search, page }),
                exact: true,
            });
            setSelected({
                open: false,
                data: null,
            });

            handleClearError();
            toast.success("Cập nhật loai câu hỏi thành công", toastConfigSuccess);
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response && error.response.data) {
                const { message, details } = error.response.data;
                toast.error(message, toastConfigError);
                setError(details);
            }
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (typeId) => {
            await sleep();
            return await questionTypeService.delete(typeId);
        },
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyQuestionType({ search, page }),
                exact: true,
            });

            toast.success("Xóa loại câu hỏi thành công", toastConfigSuccess);
        },
        onError: errorMessage,
    });

    return {
        addMutation,
        updateMutation,
        uploadMutation,
        deleteMutation,
        error,
        errorExist,
        handleCloseExist,
        setError,
    };
};

export default useMutationQuestionType;
