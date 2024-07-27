import ActionComponent from "@/components/shared/ActionComponent";
import DialogSeeQuestion from "@/components/shared/dialog/DialogSeeQuestion";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import TooltipBase from "@/components/shared/TooltipBase";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { useGetQuestionByTest, useGetQuestions } from "@/hooks/question/question.query.hook";
import { useGetTest } from "@/hooks/test/test.query.hook";
import useQueryString from "@/hooks/useQueryString";
import DialogReviewQuestion from "@/pages/admin/TestPage/components/DialogReviewQuestion";
import { mapValueToReview, parserSearch } from "@/utils";
import { useMemo, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaClipboardQuestion } from "react-icons/fa6";
import { GrScorecard } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const TestPage = () => {
    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";
    const [selectedRow, setSelectedRow] = useState({ open: false, data: null });
    const [selectedTest, setSelectedTest] = useState(null);

    const questions = useGetQuestions({
        params: {
            ...parserSearch({ value: selectedTest?.test_id, key: "test_id" }),
            include: true,
            all: true,
        },
        enabled: Boolean(selectedTest?.test_id),
        select: (data) => {
            return data?.metadata;
        },
    });

    const { data, isFetching } = useGetTest({
        ...parserSearch({ value: search, isQueryLike: true, key: "test_name" }),
        page,
    });
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

    const handleSelectedTest = (row) => (e) => {
        setSelectedTest(row);
    };

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
            classNameColumn: "text-center",
            classNameRow: "text-center",
        },
        {
            key: "test_duration",
            title: "Thời gian thi",
            classNameColumn: "text-center",
            classNameRow: "text-center",
        },
        {
            key: "test_no_of_year",
            title: "Đề thi thứ mấy trong năm",
            classNameColumn: "text-center",
            classNameRow: "text-center",
        },
        {
            key: "action",
            title: "Hành động",
            classNameColumn: "text-center",
            classNameRow: "text-center",
            render: (row) => {
                return (
                    <>
                        <TooltipBase title={"Sửa thông tin"}>
                            <Button variant="outline" className="text-blue-500" asChild>
                                <Link to={`/admin/tests/edit/${row?.test_id}`}>
                                    <MdEdit />
                                </Link>
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

                        <TooltipBase title={"Quản lý câu hỏi"}>
                            <Button
                                onClick={handleSelectedTest(row)}
                                variant="outline"
                                className="text-blue-500 ml-2"
                            >
                                <FaClipboardQuestion />
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

            <DialogReviewQuestion
                open={!!selectedTest}
                onClose={() => setSelectedTest(null)}
                data={questions.data}
                isLoading={questions.isLoading}
                test={selectedTest}
                description={`Danh sách câu hỏi đề thi ${selectedTest?.test_name}`}
            />

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
                    <Link to={"/admin/scores"}>
                        <GrScorecard className="mr-1" />
                        <span>Bảng điểm</span>
                    </Link>
                </Button>

                <Button asChild variant="outline">
                    <Link to={"/admin/tests/add"}>
                        <IoIosAdd className="mr-1" />
                        <span>Thêm đề thi</span>
                    </Link>
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
