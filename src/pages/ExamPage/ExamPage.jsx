import { Progress } from "@/components/ui/progress";
import { FaRegClock, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useBackground from "@/hooks/useBackground";
import { useGetTestWithYears } from "@/hooks/test/test.query.hook";
import { useEffect, useMemo, useState } from "react";
import Head from "@/components/shared/Head";
import { Skeleton } from "@/components/ui/skeleton";
import ButtonYear from "@/components/shared/ButtonYear";

const exams = [
    {
        title: "EST FullTest 1",
        progress: 20,
        participants: 3,
        id: 1,
    },
    {
        title: "EST FullTest 2",
        progress: 40,
        participants: 5,
        id: 2,
    },
    {
        title: "EST FullTest 3",
        progress: 60,
        participants: 7,
        id: 3,
    },
    {
        title: "EST FullTest 4",
        progress: 80,
        participants: 9,
        id: 4,
    },
    {
        title: "EST FullTest 5",
        progress: 100,
        participants: 11,
        id: 5,
    },
    {
        title: "EST FullTest 6",
        progress: 100,
        participants: 11,
        id: 6,
    },
    {
        title: "EST FullTest 7",
        progress: 100,
        participants: 11,
        id: 7,
    },
    {
        title: "EST FullTest 8",
        progress: 100,
        participants: 11,
        id: 8,
    },
    {
        title: "EST FullTest 9",
        progress: 100,
        participants: 11,
        id: 9,
    },
    {
        title: "EST FullTest 10",
        progress: 100,
        participants: 11,
        id: 10,
    },
];

const ExamPage = () => {
    useBackground({ selector: "#exam" });
    const [yearActive, setYearActive] = useState("");
    const { data, isLoading } = useGetTestWithYears((data) => data?.metadata);

    useEffect(() => {
        if (!data) {
            return;
        }

        if (data?.tests && data?.years) {
            const { years } = data;
            setYearActive(years[0]);
        }
    }, [data]);

    const testParts = useMemo(() => {
        if (!data?.tests || !yearActive) {
            return [];
        }

        return data.tests
            .filter((t) => t?.test_of_year === yearActive)
            .sort((a, b) => a.test_no_of_year - b.test_no_of_year);
    }, [yearActive, data?.tests]);

    return (
        <div id="exam">
            <Head title={"Thi thử"} />

            <div className="max-w-6xl mx-auto p-2 pb-16">
                <h1 className="text-2xl font-medium text-center my-4 uppercase text-[#34447c]">
                    Start your toeic online full test now
                </h1>

                <div className="mt-10">
                    <div className="flex justify-center mb-5">
                        {isLoading
                            ? Array.from({ length: 5 }).map((_, index) => (
                                  <Skeleton className="h-8 w-[80px]" />
                              ))
                            : data?.years?.map((year) => (
                                  <ButtonYear
                                      year={year}
                                      isActive={year === yearActive}
                                      onClick={() => setYearActive(year)}
                                  />
                              ))}
                    </div>

                    <div className="flex justify-between">
                        <div className="grid grid-cols-5 gap-5 m-auto">
                            {isLoading
                                ? Array.from({ length: 5 }).map((_, index) => (
                                      <div
                                          key={index}
                                          className="w-52 bg-white border rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                                      >
                                          <Skeleton className="h-20 w-full" />
                                          <Skeleton className="h-4 mt-5 w-full" />
                                          <Skeleton className="h-2 mt-4 mb-2 w-full" />
                                          <Skeleton className="h-4 my-4 w-full" />
                                          <Skeleton className="h-8 mt-5 w-full" />
                                      </div>
                                  ))
                                : testParts.map((test, index) => (
                                      <div
                                          key={index}
                                          className="bg-white border rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                                      >
                                          <img src="/exam.jpg" alt="" />

                                          <h2 className="text-xl font-semibold my-2">
                                              {`EST FullTest ${test.test_no_of_year}`}
                                          </h2>

                                          <p className="text-sm font-medium">{test?.test_tag}</p>

                                          <p className="flex items-center text-xs">
                                              <Progress
                                                  value={100}
                                                  className="bg-orange-200 mr-1"
                                              />
                                              {100}%
                                          </p>

                                          <div className="flex justify-between my-2">
                                              <p className="flex items-center">
                                                  <FaUserEdit className="mr-1" />{" "}
                                                  {test.test_user_count}
                                              </p>

                                              <p className="flex items-center">
                                                  <FaRegClock className="mr-1" />
                                                  {`${test.test_duration} phút`}
                                              </p>
                                          </div>

                                          <Link to={`/exams/${test.test_id}`}>
                                              <button className="bg-[#34447c] text-white py-1 rounded-lg w-full mt-3">
                                                  Thi ngay
                                              </button>
                                          </Link>
                                      </div>
                                  ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamPage;
