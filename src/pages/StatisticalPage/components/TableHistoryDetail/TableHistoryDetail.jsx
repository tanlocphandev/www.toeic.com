import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EXAM_TYPES } from "@/constants";
import { numberToTime } from "@/utils";
import { fDate } from "@/utils/fDate";
import { FaBookReader, FaClock } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const TableHistoryDetail = ({ data }) => {
    return (
        <ScrollArea className="max-h-[70vh]">
            <table className="w-full text-left border-collapse relative">
                <thead className="sticky top-0">
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2 w-50">Ngày nộp</th>
                        <th className="border border-gray-300 text-[#34447c] p-2 w-20">
                            <FaHeadphones className="w-full m-auto" />
                        </th>
                        <th className="border border-gray-300 text-[#34447c] p-2 w-20">
                            <FaBookReader className="w-full m-auto" />
                        </th>

                        <th className="border border-gray-300 text-yellow-600 p-2 w-40">
                            <GoGoal className="w-full m-auto" />
                        </th>
                        <th className="border border-gray-300 p-2 text-center w-20">
                            <FaClock className="w-full m-auto" />
                        </th>
                        <th className="border border-gray-300 p-2">Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                        >
                            <td className="border border-gray-300 p-2 w-[200px] text-sm">
                                {fDate(item.created_at, "DD/MM/YYYY hh:mm:ss")}

                                {item?.exam_type === EXAM_TYPES.ONE_TEST ? (
                                    <>
                                        <Badge className={"bg-yellow-500 mr-1"}>Luyện tập</Badge>
                                        <Badge className={"bg-yellow-500 mb-1"}>
                                            {item?.questionType?.type_name}
                                        </Badge>
                                        <Badge className={"bg-yellow-500"}>
                                            {item?.questionType?.part?.part_name}
                                        </Badge>
                                    </>
                                ) : (
                                    <Badge className={"bg-green-600"}>Full test</Badge>
                                )}
                            </td>
                            <td className="border border-gray-300 p-2 text-center w-20 text-sm">
                                {item?.exam_type === EXAM_TYPES.ONE_TEST
                                    ? 0
                                    : item?.exam_count_listening_correct}
                            </td>
                            <td className="border border-gray-300 p-2 text-center w-20 text-sm">
                                {item?.exam_type === EXAM_TYPES.ONE_TEST
                                    ? 0
                                    : item?.exam_count_reading_correct}
                            </td>
                            <td className="border border-gray-300 p-2 text-center w-40 text-sm">
                                {`${item?.exam_count_question_correct} / ${
                                    item?.exam_total_question
                                } ${
                                    item?.exam_type === EXAM_TYPES.FULL_TEST
                                        ? `(Điểm: ${
                                              item?.score?.listening?.listening_score +
                                              item?.score?.reading?.reading_score
                                          })`
                                        : ""
                                }`}
                            </td>
                            <td className="border border-gray-300 p-2 text-center text-sm">
                                {numberToTime(item.exam_used_timer)}
                            </td>
                            <td className="border border-gray-300 p-2 text-center">
                                <Link to={`/exams/exam-result/${item.exam_id}`}>
                                    <RiErrorWarningFill className="w-full m-auto" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ScrollArea>
    );
};

export default TableHistoryDetail;
