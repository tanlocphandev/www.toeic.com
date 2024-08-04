import { toastConfigError, toastConfigSuccess } from "@/configs/toast.config";
import { queryKeyTag } from "@/hooks/tag/useDataTag";
import tagService from "@/services/tag.service";
import { errorMessage } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

const useMutationTag = ({ page, search, setSelected }) => {
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
        mutationFn: (values) => tagService.create(values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyTag({ search, page }),
                exact: true,
            });
            setSelected({
                open: false,
                data: null,
            });
            handleClearError();
            toast.success("Thêm tag thành công", toastConfigSuccess);
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
        mutationFn: (values) => tagService.upload(values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyTag({ search, page }),
                exact: true,
            });

            handleClearError();

            toast.success("Upload thành công", toastConfigSuccess);
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response && error.response.data) {
                const { details, message } = error.response.data;

                let newMessage = message;

                if (details) {
                    setErrorExist(details.map((t) => ({ name: t.tagName })));
                }

                toast.error(newMessage, toastConfigError);
            }
        },
    });

    const updateMutation = useMutation({
        mutationFn: (values) => tagService.update(values.tagId, values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyTag({ search, page }),
                exact: true,
            });
            setSelected({
                open: false,
                data: null,
            });

            handleClearError();
            toast.success("Cập nhật tag thành công", toastConfigSuccess);
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
        mutationFn: (tagId) => tagService.delete(tagId),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyTag({ page, search }),
                exact: true,
            });
            toast.success("Xóa part thành công", toastConfigSuccess);
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

export default useMutationTag;
