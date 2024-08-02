import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import { useMutationAddComment } from "@/hooks/comment/comment.mutation.hook";
import { useGetComment } from "@/hooks/comment/comment.query.hook";
import FormComment from "@/pages/ExamPage/components/FormComment";
import ListCommentCard from "@/pages/ExamPage/components/ListCommentCard";
import { errorMessage, getQueryKeys } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { memo } from "react";
import { toast } from "sonner";

const DialogListComment = ({ open = false, onClose = () => {}, selectedTest = null }) => {
    const queryClient = useQueryClient();

    const { data, isLoading } = useGetComment({
        params: { testId: selectedTest?.test_id, include: true },
        enabled: Boolean(selectedTest),
        select: (data) => {
            return data?.metadata;
        },
    });

    const mutationAddComment = useMutationAddComment();

    const relative = () => {
        queryClient.invalidateQueries({
            queryKey: getQueryKeys({
                key: QUERY_KEYS.COMMENT.GET_ALL,
            }),
        });
    };

    const handleSubmitComment = (values, resetValues) => {
        mutationAddComment.mutate(values, {
            onSuccess: () => {
                toast.success("Bình luận thành công", toastConfigSuccess);
                resetValues();
                relative();
            },
            onError: errorMessage,
        });
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Bình luận</DialogTitle>

                    <DialogDescription>
                        {`Danh sách bình đề thi ${selectedTest?.test_name} ${selectedTest?.test_tag}`}
                    </DialogDescription>
                </DialogHeader>

                <div className="max-h-[70vh] pt-2  overflow-auto">
                    <div className="h-full">
                        {isLoading ? (
                            <div className="mb-4 space-y-4">
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <div key={index} className="flex gap-1 flex-row pr-2">
                                        <div className="flex-shrink-0 w-12 flex justify-center mt-2">
                                            <Skeleton className="w-8 h-8 block shadow-[0_0_10px] shadow-red-600 rounded-full object-cover border-2 border-red-300" />
                                        </div>

                                        <div className="flex flex-col w-full rounded-lg px-2 py-2 bg-gray-300/20">
                                            <div className="flex justify-between items-center">
                                                <div className="flex flex-row gap-2">
                                                    <Skeleton className="h-4 w-32" />
                                                    <Skeleton className="h-4 w-20" />
                                                </div>

                                                <Skeleton className="h-4 w-20" />
                                            </div>

                                            <Skeleton className="h-3 mt-2 w-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <ListCommentCard data={data} />
                        )}
                    </div>
                </div>

                <DialogFooter>
                    <FormComment
                        onSubmit={handleSubmitComment}
                        initialValue={{
                            testId: selectedTest?.test_id,
                            content: "",
                            parentCommentId: null,
                        }}
                        isPending={mutationAddComment.isPending}
                    />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

DialogListComment.displayName = "DialogListComment";

export default memo(DialogListComment);
