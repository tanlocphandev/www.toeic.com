import { toastConfigError, toastConfigSuccess } from "@/configs/toast.config";
import { queryKeyPart } from "@/hooks/part/useDataPart";
import partService from "@/services/part.service";
import { errorMessage } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

const useMutationPart = ({ page, search, setSelected }) => {
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
        mutationFn: (values) => partService.create(values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyPart({ page, search }),
                exact: true,
            });
            setSelected({
                open: false,
                data: null,
            });
            handleClearError();
            toast.success("Thêm part thành công", toastConfigSuccess);
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
        mutationFn: (values) => partService.upload(values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyPart({ page, search }),
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
                    setErrorExist(details.map((t) => ({ name: t.partName })));
                }

                toast.error(newMessage, toastConfigError);
            }
        },
    });

    const updateMutation = useMutation({
        mutationFn: (values) => partService.update(values.partId, values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyPart({ page, search }),
                exact: true,
            });
            setSelected({
                open: false,
                data: null,
            });
            handleClearError();
            toast.success("Cập nhật part thành công", toastConfigSuccess);
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
        mutationFn: (partId) => partService.delete(partId),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeyPart({ page, search }),
                exact: true,
            });
            setSelected({
                open: false,
                data: null,
            });
            toast.success("Xóa part thành công", toastConfigSuccess);
        },
        onError: errorMessage,
    });

    return {
        addMutation,
        updateMutation,
        uploadMutation,
        error,
        errorExist,
        handleCloseExist,
        setError,
        deleteMutation,
    };
};

export default useMutationPart;
