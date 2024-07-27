import ActionComponent from "@/components/shared/ActionComponent";
import Head from "@/components/shared/Head";
import TableComponent from "@/components/shared/TableComponent";
import TooltipBase from "@/components/shared/TooltipBase";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { useGetScore } from "@/hooks/score/score.query.hook";
import { useGetScoreDetails } from "@/hooks/scoreDetails/scoreDetails.query.hook";
import useQueryString from "@/hooks/useQueryString";
import DialogReviewScore from "@/pages/admin/ScorePage/components/DialogReviewScore";
import { parserSearch } from "@/utils";
import { fDate } from "@/utils/fDate";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const ScorePage = () => {
    const query = useQueryString();
    const page = Number(query?.page) || 1;
    const search = query?.q || "";
    const [selected, setSelected] = useState(null);

    const { data, isLoading } = useGetScore({
        ...parserSearch({ isQueryLike: true, value: search, key: "score_name" }),
        page,
    });
    const scoreDetails = useGetScoreDetails({
        params: { ...parserSearch({ key: "score_id", value: selected?.score_id }), all: true },
        enabled: !!selected,
        select: (data) => data?.metadata,
    });

    const handleSeeScoreDetails = (row) => {
        setSelected(row);
    };

    const columns = [
        {
            key: "score_id",
            title: "ID",
            classNameColumn: "w-[100px]",
        },
        {
            key: "score_name",
            title: "Tên bảng điểm",
        },
        {
            key: "score_status",
            title: "Trạng thái",
        },
        {
            key: "created_at",
            title: "Ngày tạo",
            render: (row) => fDate(row?.created_at),
        },
        {
            key: "action",
            title: "Hành động",
            render: (row) => {
                return (
                    <>
                        <TooltipBase title={"Sửa thông tin"}>
                            <Button variant="outline" className="text-blue-500" asChild>
                                <Link to={`/admin/scores/edit/${row?.score_id}`}>
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
                                onClick={() => handleSeeScoreDetails(row)}
                                variant="outline"
                                className="text-green-500 ml-2"
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
            <DialogReviewScore
                scoreId={selected?.score_id}
                isShowActions={true}
                data={scoreDetails.data}
                open={!!selected}
                onClose={() => setSelected(null)}
                isLoading={scoreDetails.isLoading}
                description={selected?.score_name}
            />

            <Head isAdmin title={"Quản lý bảng điểm"} />

            <TypographyH2 text="Danh sách bảng điểm" className="mb-5" />

            <ActionComponent>
                <Button asChild>
                    <Link to={"/admin/scores/add"}>
                        <GrScorecard className="mr-1" />
                        <span>Thêm bảng điểm</span>
                    </Link>
                </Button>
            </ActionComponent>

            <TableComponent
                className={"mt-5"}
                isFetching={isLoading}
                columns={columns}
                rows={data?.metadata}
                pagination={data?.options}
            />
        </div>
    );
};

export default ScorePage;
