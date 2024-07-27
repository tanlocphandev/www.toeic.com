import TableComponent from "@/components/shared/TableComponent";
import TooltipBase from "@/components/shared/TooltipBase";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import { useMutationEditScoreDetails } from "@/hooks/scoreDetails/scoreDetails.mutation.hook";
import DialogAddEditScoreDetails from "@/pages/admin/ScorePage/components/DialogAddEditScoreDetails";
import { errorMessage, getQueryKeys, mapperAnswerToText, parserSearch } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { toast } from "sonner";

const DialogReviewQuestion = ({
    test = null,
    open = false,
    description = "",
    data = [],
    isLoading = false,

    onClose = () => {},
}) => {
    const columns = [
        {
            key: "question_order",
            title: "Số thứ tự",
            classNameColumn: "w-[100px] text-center",
            classNameRow: "font-medium text-red-500 text-center",
        },
        {
            key: "part",
            title: "Part",
            render: (row) => row?.part?.part_name,
        },
        {
            key: "questionType",
            title: "Phân loại",
            render: (row) => {
                return row?.questionType?.type_name;
            },
        },
        {
            key: "question_image",
            title: "Ảnh",
            render: (row) => {
                if (!row?.question_image?.url) return null;

                return (
                    <img
                        src={row?.question_image?.url}
                        alt="image"
                        className="w-[100px] h-[100px] rounded-lg"
                    />
                );
            },
        },
        {
            key: "answers",
            title: "Đáp án",
            render: (row) => {
                return row?.answers
                    ?.map((item) => mapperAnswerToText(item?.answer_order))
                    .join(", ");
            },
        },
        {
            key: "answers",
            title: "Đáp án đúng",
            classNameColumn: "text-center",
            classNameRow: "text-green-500 font-bold text-center",
            render: (row) => {
                return mapperAnswerToText(
                    row?.answers?.find((item) => item.answer_isCorrect === 1)?.answer_order
                );
            },
        },
        {
            key: "actions",
            title: "Thao tác",
            classNameColumn: "text-center ",
            classNameRow: "text-center",
            render: (row) => {
                return (
                    <>
                        <TooltipBase title={"Sửa thông tin"}>
                            <Button variant="outline" className="text-blue-500">
                                <MdEdit />
                            </Button>
                        </TooltipBase>

                        {/* <TooltipBase title={"Xóa đề thi"}>
                            <Button variant="outline" className="text-red-500 ml-2">
                                <MdDelete />
                            </Button>
                        </TooltipBase> */}
                    </>
                );
            },
        },
    ];

    if (!open) return null;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="w-full h-full max-w-8xl">
                <DialogHeader>
                    <div>
                        <DialogTitle>{`Chi tiết câu hỏi`}</DialogTitle>
                        {description ? <DialogDescription>{description}</DialogDescription> : null}
                    </div>

                    {/* {data.length !== 101 ? (
                        <div>
                            <Button>Thêm điểm</Button>
                        </div>
                    ) : null} */}
                </DialogHeader>

                <div className="h-full overflow-y-auto">
                    {isLoading ? (
                        Array.from({ length: 40 }).map((_, index) => (
                            <Skeleton className={"w-full h-8 mb-4"} key={index} />
                        ))
                    ) : (
                        <TableComponent rows={data} columns={columns} />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogReviewQuestion;
