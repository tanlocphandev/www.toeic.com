import { PAGINATION, QUERY_KEYS } from "@/constants";
import PartService from "@/services/part.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

const useMutationPart = ({ page, search, setSelected }) => {
    const queryClient = useQueryClient();
    const [error, setError] = useState(null);

    const addMutation = useMutation({
        mutationFn: (values) => PartService.create(values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: [
                    QUERY_KEYS.PART.GET_ALL,
                    page,
                    PAGINATION.LIMIT,
                    search && `part_name:${search}`,
                ],
                exact: true,
            });
            setSelected({
                open: false,
                data: null,
            });
            toast.success("Thêm part thành công");
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response && error.response.data) {
                const { message, details } = error.response.data;
                toast.error(message);
                setError(details);
            }
        },
    });

    const uploadMutation = useMutation({
        mutationFn: (values) => PartService.upload(values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: [
                    QUERY_KEYS.PART.GET_ALL,
                    page,
                    PAGINATION.LIMIT,
                    search && `part_name:${search}`,
                ],
                exact: true,
            });

            toast.success("Upload thành công");
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response && error.response.data) {
                const { details, message } = error.response.data;

                let newMessage = message;

                if (details) {
                    newMessage = `Đã tồn tại: ` + details.map((t) => t.partName).join(", ");
                }

                toast.error(message, {
                    classNames: {
                        title: "text-red-500",
                        icon: "text-red-500",
                    },
                    duration: 4000,
                });
            }
        },
    });

    const updateMutation = useMutation({
        mutationFn: (values) => PartService.update(values.partId, values),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: [
                    QUERY_KEYS.PART.GET_ALL,
                    page,
                    PAGINATION.LIMIT,
                    search && `part_name:${search}`,
                ],
                exact: true,
            });
            setSelected({
                open: false,
                data: null,
            });
            toast.success("Cập nhật part thành công");
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response && error.response.data) {
                const { message, details } = error.response.data;
                toast.error(message);
                setError(details);
            }
        },
    });

    return { addMutation, updateMutation, uploadMutation, error };
};

export default useMutationPart;
