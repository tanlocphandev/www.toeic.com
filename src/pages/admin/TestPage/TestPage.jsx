import ActionComponent from "@/components/shared/ActionComponent";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import TooltipBase from "@/components/shared/TooltipBase";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { useGetTest } from "@/hooks/test/test.query.hook";
import useQueryString from "@/hooks/useQueryString";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useMemo, useState } from "react";
import { useGetQuestionByTest } from "@/hooks/question/question.query.hook";
import { mapValueToReview } from "@/utils";
import DialogSeeQuestion from "@/components/shared/dialog/DialogSeeQuestion";

const TestPage = () => {
    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";
    const [selectedRow, setSelectedRow] = useState({ open: false, data: null });

    const { data, isFetching } = useGetTest({ search, page });
    const { data: dataQuestions, isLoading } = useGetQuestionByTest(
        selectedRow?.data?.test_id,
        (data) => {
            if (data.metadata) {
                return mapValueToReview(data.metadata);
            }

            return null;
        }
    );

    const handleSeeTest = (row) => {
        setSelectedRow({ open: true, data: row });
    };

    const handleClose = () => {
        setSelectedRow({ open: false, data: null });
    };

    const questionOrders = useMemo(() => {
        let _questionOrders = [];

        if (!dataQuestions?.length) return _questionOrders;
        const prevData = [...dataQuestions];

        const dataQuestionLength = prevData.length;

        for (let i = 0; i < dataQuestionLength; i++) {
            const question = prevData[i];

            const index = _questionOrders.findIndex((q) => q.part_number === question.part);

            const isGroupQuestion = Boolean(question?.group_questions);

            const orders = !isGroupQuestion
                ? [question.order]
                : question.group_questions.map((q) => q.order);

            if (index === -1) {
                _questionOrders.push({
                    part_number: question.part,
                    orders: [...orders],
                });
            } else {
                _questionOrders[index] = {
                    ..._questionOrders[index],
                    orders: [..._questionOrders[index].orders, ...orders],
                };
            }
        }

        return _questionOrders;
    }, [dataQuestions]);

    const columns = [
        {
            key: "test_id",
            title: "Id",
            classNameColumn: "w-[100px]",
        },
        {
            key: "test_name",
            title: "Tên đề thi",
        },
        {
            key: "test_of_year",
            title: "Năm ra đề",
        },
        {
            key: "test_duration",
            title: "Thời gian thi",
        },
        {
            key: "test_no_of_year",
            title: "Đề thi thứ mấy trong năm",
        },
        {
            key: "action",
            title: "Hành động",
            render: (row) => {
                return (
                    <>
                        <TooltipBase title={"Sửa thông tin"}>
                            <Button variant="outline" className="text-blue-500">
                                <MdEdit />
                            </Button>
                        </TooltipBase>

                        <TooltipBase title={"Xóa đề thi"}>
                            <Button variant="outline" className="text-red-500 ml-2">
                                <MdDelete />
                            </Button>
                        </TooltipBase>

                        <TooltipBase title={"Xem câu hỏi"}>
                            <Button
                                variant="outline"
                                className="text-green-500 ml-2"
                                onClick={() => handleSeeTest(row)}
                            >
                                <FaEye />
                            </Button>
                        </TooltipBase>
                    </>
                );
            },
        },
    ];

    return (
        <div>
            <Head isAdmin title={"Danh sách đề thi"} />

            <DialogSeeQuestion
                isLoading={isLoading}
                open={selectedRow.open}
                onClose={handleClose}
                data={dataQuestions}
                questionOrders={questionOrders}
                totalAnswer={selectedRow.data?.test_question_count}
            />

            <TypographyH2 text="Danh sách đề thi" className="mb-5" />

            <ActionComponent btnTextAdd="Thêm tag">
                <Button asChild>
                    <Link to={"/admin/tests/add"}>Thêm đề thi</Link>
                </Button>
            </ActionComponent>

            <TableComponent
                className={"mt-5"}
                isFetching={isFetching}
                columns={columns}
                rows={data?.metadata}
                pagination={data?.options}
            />
        </div>
    );
};

export default TestPage;
