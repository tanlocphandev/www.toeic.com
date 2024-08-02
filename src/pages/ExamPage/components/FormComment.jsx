import TooltipBase from "@/components/shared/TooltipBase";
import { Input } from "@/components/ui/input";
import Spinner from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoSend } from "react-icons/io5";

const FormComment = ({
    className,
    onSubmit = (values, resetValues = () => {}) => {},
    initialValue = {
        commentId: 0,
        testId: 0,
        content: "",
        parentCommentId: null,
    },
    onCancel = () => {},
    isPending = false,
}) => {
    const [value, setValue] = useState(initialValue.content);
    const inputRef = useRef(null);
    const isMounted = useRef(true);

    useEffect(() => {
        if (!isMounted.current || !initialValue.commentId || !initialValue.content) return;

        setValue(initialValue.content);

        inputRef.current.focus();
        isMounted.current = false;

        return () => {
            isMounted.current = false;
        };
    }, [initialValue.commentId, initialValue.content, isMounted.current, inputRef.current]);

    const handleOnSubmit = useCallback(() => {
        if (!inputRef.current) return;

        if (!value) {
            inputRef.current.focus();
            return;
        }

        if (!onSubmit) return;
        onSubmit({ ...initialValue, content: value }, () => setValue(""));
    }, [inputRef.current, initialValue, value]);

    return (
        <div className={cn("flex items-center gap-2 w-full", className)}>
            <img
                src="/avatar.webp"
                className="w-8 h-8 block shadow-[0_0_10px] shadow-red-600 rounded-full object-cover border-2 border-red-300"
                alt="Avatar"
            />

            <div className="flex-grow relative w-full">
                <Input
                    disabled={isPending}
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Nhập bình luận"
                    className={cn("pr-10", {
                        "pr-14": Boolean(initialValue.commentId),
                    })}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleOnSubmit();
                        }
                    }}
                />

                <div>
                    {initialValue.commentId && (
                        <TooltipBase title={"Huỷ bình luận"}>
                            <button
                                disabled={isPending}
                                onClick={() => {
                                    setValue("");
                                    onCancel?.();
                                }}
                                className="absolute right-8 top-1/2 -translate-y-1/2"
                            >
                                <IoIosCloseCircleOutline className="text-red-500" />
                            </button>
                        </TooltipBase>
                    )}

                    <TooltipBase title={"Gửi bình luận"}>
                        <button
                            disabled={isPending}
                            onClick={handleOnSubmit}
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                        >
                            {isPending ? <Spinner className={"w-5 h-5"} /> : <IoSend />}
                        </button>
                    </TooltipBase>
                </div>
            </div>
        </div>
    );
};

FormComment.displayName = "FormComment";

export default memo(FormComment);
