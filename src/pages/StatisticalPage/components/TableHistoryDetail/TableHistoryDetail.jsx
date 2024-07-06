import { FaBookReader } from "react-icons/fa";
import { FaHeadphones, FaPenToSquare } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { RiErrorWarningFill } from "react-icons/ri";

const history = [
    {
        date: "2022/01/01 11:17:24",
        listen: 120,
        read: 234,
        sum: 354,
        goal: 630,
        time: "02:00:00",
    },
    {
        date: "2022/01/02 11:17:24",
        listen: 120,
        read: 234,
        sum: 354,
        goal: 630,
        time: "02:00:00",
    },
    {
        date: "2022/01/03 11:17:24",
        listen: 120,
        read: 234,
        sum: 354,
        goal: 630,
        time: "02:00:00",
    },
];

const TableHistoryDetail = () => {
    return (
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2 w-[200px]">Ngày nộp</th>
                    <th className="border border-gray-300 text-[#34447c] p-2 w-20">
                        <FaHeadphones className="w-full m-auto" />
                    </th>
                    <th className="border border-gray-300 text-[#34447c] p-2 w-20">
                        <FaBookReader className="w-full m-auto" />
                    </th>
                    <th className="border border-gray-300 text-green-500 p-2 w-20">
                        <FaPenToSquare className="w-full m-auto" />
                    </th>
                    <th className="border border-gray-300 text-yellow-500 p-2 w-20">
                        <GoGoal className="w-full m-auto" />
                    </th>
                    <th className="border border-gray-300 p-2">Thời gian làm</th>
                    <th className="border border-gray-300 p-2">Chi tiết</th>
                </tr>
            </thead>
            <tbody>
                {history.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                        <td className="border border-gray-300 p-2 w-[200px]">{item.date}</td>
                        <td className="border border-gray-300 p-2 text-center w-20">
                            {item.listen}
                        </td>
                        <td className="border border-gray-300 p-2 text-center w-20">{item.read}</td>
                        <td className="border border-gray-300 p-2 text-center w-20">{item.sum}</td>
                        <td className="border border-gray-300 p-2 text-center w-20">{item.goal}</td>
                        <td className="border border-gray-300 p-2 text-center">{item.time}</td>
                        <td className="border border-gray-300 p-2 text-center">
                            <button>
                                <RiErrorWarningFill className="w-full m-auto" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableHistoryDetail;
