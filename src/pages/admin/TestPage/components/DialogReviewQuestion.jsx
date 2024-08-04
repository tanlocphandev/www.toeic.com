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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import DialogAddEditQuestion from "@/pages/admin/TestPage/components/DialogAddEditQuestion";
import { mapperAnswerToText } from "@/utils";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

const DialogReviewQuestion = ({
    test = null,
    open = false,
    description = "",
    data = [],
    isLoading = false,

    onClose = () => {},
}) => {
    const [selectedEdit, setSelectedEdit] = useState(null);

    const handleSelectedEdit = (row) => {
        console.log("====================================");
        console.log(`row:::`, row);
        console.log("====================================");

        setSelectedEdit(row);
    };

    const handleCloseDialogEdit = () => {
        setSelectedEdit(null);
    };

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
                            <Button
                                onClick={() => handleSelectedEdit(row)}
                                variant="outline"
                                className="text-blue-500"
                            >
                                <MdEdit />
                            </Button>
                        </TooltipBase>
                    </>
                );
            },
        },
    ];

    if (!open) return null;

    return (
        <>
            <DialogAddEditQuestion
                open={selectedEdit}
                selectedQuestion={selectedEdit}
                onClose={handleCloseDialogEdit}
            />

            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="w-full h-full max-w-8xl">
                    <DialogHeader>
                        <div>
                            <DialogTitle>{`Chi tiết câu hỏi`}</DialogTitle>
                            {description ? (
                                <DialogDescription>{description}</DialogDescription>
                            ) : null}
                        </div>

                        {/* {data.length !== 101 ? (
                        <div>
                            <Button>Thêm điểm</Button>
                        </div>
                    ) : null} */}
                    </DialogHeader>

                    <ScrollArea className="h-full">
                        {isLoading ? (
                            Array.from({ length: 40 }).map((_, index) => (
                                <Skeleton className={"w-full h-8 mb-4"} key={index} />
                            ))
                        ) : (
                            <TableComponent isStickyHeader rows={data} columns={columns} />
                        )}
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DialogReviewQuestion;
