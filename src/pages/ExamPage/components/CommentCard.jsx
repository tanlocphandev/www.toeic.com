import DialogConfirm from "@/components/shared/dialog/DialogConfirm";
import Spinner from "@/components/ui/spinner";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS, USER_ROLES } from "@/constants";
import {
    useMutationAddComment,
    useMutationChangeStatusComment,
    useMutationDeleteComment,
    useMutationEditComment,
} from "@/hooks/comment/comment.mutation.hook";
import { useGetComment } from "@/hooks/comment/comment.query.hook";
import { cn } from "@/lib/utils";
import CardOptionComment from "@/pages/ExamPage/components/CardOptionComment";
import FormComment from "@/pages/ExamPage/components/FormComment";
import { useAuthSlice } from "@/redux/slices/auth.slice";
import { errorMessage, getQueryKeys } from "@/utils";
import { fToNow } from "@/utils/fDate";
import { useQueryClient } from "@tanstack/react-query";
import { memo, useCallback, useMemo, useState } from "react";
import { toast } from "sonner";

const CommentCard = ({ isChild = false, version = 0, comment = null }) => {
    const [showChild, setShowChild] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const queryClient = useQueryClient();
    const [selectedEdit, setSelectedEdit] = useState(null);
    const [selectedDelete, setSelectedDelete] = useState(null);

    const mutationAddComment = useMutationAddComment();
    const mutationDeleteComment = useMutationDeleteComment();
    const mutationChangeStatus = useMutationChangeStatusComment();
    const mutationEditComment = useMutationEditComment();

    const { user } = useAuthSlice();

    const { data, isLoading } = useGetComment({
        params: {
            testId: comment?.test_id,
            include: true,
            parentCommentId: comment?.comment_id,
        },
        enabled: showChild && comment?.comment_status === "active",
        select: (data) => {
            return data?.metadata;
        },
    });

    const revalidate = useCallback(() => {
        queryClient.invalidateQueries({
            queryKey: getQueryKeys({
                key: QUERY_KEYS.COMMENT.GET_ALL,
            }),
        });

        queryClient.invalidateQueries({
            queryKey: getQueryKeys({
                key: QUERY_KEYS.TEST.GET_WITH_YEARS,
            }),
            exact: true,
        });
    }, []);

    const handleSubmitReply = useCallback((values, resetValues) => {
        if (values?.commentId) {
            const payload = {
                comment_id: values?.commentId,
                comment_content: values?.content,
            };

            mutationEditComment.mutate(payload, {
                onSuccess: () => {
                    toast.success("Chỉnh sửa bình luận thành công", toastConfigSuccess);

                    resetValues();

                    revalidate();

                    setShowForm(false);
                },
                onError: errorMessage,
            });
        } else {
            mutationAddComment.mutate(values, {
                onSuccess: () => {
                    toast.success("Trả lời bình luận thành công", toastConfigSuccess);

                    resetValues();

                    revalidate();

                    setShowForm(false);
                },
                onError: errorMessage,
            });
        }
    }, []);

    const handleSelectedEdit = useCallback(() => {
        setShowForm(true);
        setSelectedEdit(comment);
    }, [comment]);

    const handleSelectedDelete = useCallback(() => {
        setSelectedDelete(comment);
    }, [comment]);

    const handleOnToggleForm = useCallback(() => {
        setShowForm((prev) => {
            if (prev) {
                setSelectedEdit(null);
                return false;
            }

            return true;
        });
    }, []);

    const handleOnCancel = useCallback(() => {
        setSelectedEdit(null);
        setShowForm(false);
    }, []);

    const handleCloseDialogDelete = useCallback(() => {
        setSelectedDelete(null);
    }, []);

    const handleConfirmDelete = useCallback(() => {
        if (!selectedDelete) return;

        const payload = {
            commentId: +selectedDelete?.comment_id,
            testId: +selectedDelete?.test_id,
        };

        mutationDeleteComment.mutate(payload, {
            onError: errorMessage,
            onSuccess: () => {
                toast.success("Xóa bình luận thành công.", toastConfigSuccess);
                revalidate();
                setSelectedDelete(null);
            },
        });
    }, [selectedDelete]);

    const handleChangeStatus = useCallback(() => {
        const payload = {
            comment_id: comment?.comment_id,
            comment_status: comment?.comment_status === "active" ? "inactive" : "active",
        };

        mutationChangeStatus.mutate(payload, {
            onError: errorMessage,
            onSuccess: () => {
                toast.success("Thay đổi trạng thái bình luận thành công.", toastConfigSuccess);
                revalidate();
            },
        });
    }, [comment?.comment_status]);

    const initialValues = useMemo(() => {
        return {
            testId: comment?.test_id,
            parentCommentId: comment?.comment_id,
            content: selectedEdit?.comment_content || "",
            commentId: selectedEdit?.comment_id,
        };
    }, [
        comment?.test_id,
        comment?.comment_id,
        selectedEdit?.comment_content,
        selectedEdit?.comment_id,
    ]);

    if (user?.user_role !== USER_ROLES.ADMIN && comment?.comment_status === "inactive")
        return <></>;

    return (
        <>
            <DialogConfirm
                open={!!selectedDelete}
                onClose={handleCloseDialogDelete}
                onConfirm={handleConfirmDelete}
                isPending={mutationDeleteComment.isLoading}
            />

            <div
                className={cn({
                    relative: isChild,
                    "opacity-50 cursor-not-allowed event-none":
                        comment?.comment_status === "inactive",
                })}
                style={{ marginLeft: `${version * 48}px` }}
            >
                <div className="flex gap-1 flex-row">
                    <div className="flex-shrink-0 w-12 flex justify-center mt-2 mb-2">
                        <img
                            src={comment?.user?.avatar?.url || "/avatar.webp"}
                            className="w-8 h-8 block shadow-[0_0_10px] shadow-red-600 rounded-full object-cover border-2 border-red-300"
                            alt="Avatar"
                        />
                    </div>

                    <div className="flex flex-col w-full rounded-lg px-2 py-1 bg-gray-300/20">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-sm font-medium">
                                    {comment?.user?.user_fullName}
                                </span>
                                <span className="text-[12px] font-medium italic text-gray-500">
                                    {` - ${fToNow(comment?.created_at)}`}
                                </span>
                                {comment?.comment_status === "inactive" ? (
                                    <span className="text-[12px] font-medium italic text-red-500">
                                        {` - Đã ẩn bình luận`}
                                    </span>
                                ) : null}
                            </div>

                            <span
                                onClick={
                                    comment?.comment_status === "inactive"
                                        ? undefined
                                        : handleOnToggleForm
                                }
                                className="text-[12px] font-medium italic ml-2 text-gray-500 cursor-pointer hover:underline"
                            >
                                Phản hồi
                            </span>
                        </div>

                        <span className="text-sm font-sans">{comment?.comment_content}</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <CardOptionComment
                            onEdit={handleSelectedEdit}
                            onDelete={handleSelectedDelete}
                            onChangeStatus={handleChangeStatus}
                            isAdmin={user?.user_role === USER_ROLES.ADMIN}
                            isHiddenEdit={comment?.user?.user_id !== user?.user_id}
                            isHiddenDelete={comment?.user?.user_id !== user?.user_id}
                            isHiddenChangeStatus={comment?.comment_status === "inactive"}
                        />
                    </div>
                </div>
            </div>

            {showForm ? (
                <div
                    className="max-w-full px-2 pr-9"
                    style={{ marginLeft: `${(version + 1) * 50}px` }}
                >
                    <FormComment
                        className={"mb-1"}
                        initialValue={initialValues}
                        onSubmit={handleSubmitReply}
                        isPending={mutationAddComment.isPending}
                        onCancel={handleOnCancel}
                    />
                </div>
            ) : null}

            {comment?.comment_count_children > 0
                ? data?.map((item, index) => (
                      <CommentCard
                          isChild={true}
                          comment={item}
                          key={index}
                          version={version + 1}
                      />
                  ))
                : null}

            {comment?.comment_count_children > 0 && !data?.length ? (
                <div
                    style={{ marginLeft: `${(version + 1) * 50}px` }}
                    className="text-red-500 cursor-pointer hover:text-red-600 hover:underline font-medium text-sm flex"
                    onClick={() => setShowChild(true)}
                >
                    <span>Hiển thị bình luận đã trả lời</span>
                    <span className="ml-1">({comment?.comment_count_children})</span>
                    {isLoading ? <Spinner className={"w-4 h-4 ml-2"} /> : null}
                </div>
            ) : null}
        </>
    );
};

CommentCard.displayName = "CommentCard";

export default memo(CommentCard);
