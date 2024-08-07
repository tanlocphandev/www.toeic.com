import ButtonYear from "@/components/shared/ButtonYear";
import Head from "@/components/shared/Head";
import TooltipBase from "@/components/shared/TooltipBase";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetTestWithYears } from "@/hooks/test/test.query.hook";
import useBackground from "@/hooks/useBackground";
import DialogListComment from "@/pages/ExamPage/components/DialogListComment";
import { useEffect, useMemo, useState } from "react";
import { FaComment, FaRegClock, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ExamPage = () => {
    useBackground({ selector: "#exam" });
    const [yearActive, setYearActive] = useState("");
    const { data, isLoading } = useGetTestWithYears((data) => data?.metadata);
    const [selectedTest, setSelectedTest] = useState(null);

    useEffect(() => {
        if (!data) {
            return;
        }

        if (data?.tests && data?.years) {
            const { years } = data;
            setYearActive(years[0]);
        }
    }, [data]);

    const handleSelectTest = (test) => {
        setSelectedTest(test);
    };

    const handleCloseDialogComment = () => {
        setSelectedTest(null);
    };

    const testParts = useMemo(() => {
        if (!data?.tests || !yearActive) {
            return [];
        }

        return data.tests
            .filter((t) => t?.test_of_year === yearActive)
            .sort((a, b) => a.test_no_of_year - b.test_no_of_year);
    }, [yearActive, data?.tests]);

    return (
        <>
            <DialogListComment
                open={!!selectedTest}
                onClose={handleCloseDialogComment}
                selectedTest={selectedTest}
            />

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
                                      <Skeleton key={index} className="h-8 w-[80px]" />
                                  ))
                                : data?.years?.map((year) => (
                                      <ButtonYear
                                          key={year}
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

                                              <p className="text-sm font-medium">
                                                  {test?.test_tag}
                                              </p>

                                              <p className="flex items-center text-xs">
                                                  <Progress
                                                      value={test?.percentCorrect || 0}
                                                      className="bg-orange-200 mr-1"
                                                  />
                                                  {test?.percentCorrect || 0}%
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

                                              <div className="flex flex-row justify-between gap-3">
                                                  <div className="w-1/2">
                                                      <Link to={`/exams/${test.test_id}`}>
                                                          <button className="bg-[#34447c] text-white py-2 w-full  text-[14px] rounded-lg mt-3">
                                                              Thi ngay
                                                          </button>
                                                      </Link>
                                                  </div>

                                                  <div className="w-1/2">
                                                      <TooltipBase title={"Bình luận"}>
                                                          <button
                                                              onClick={() => handleSelectTest(test)}
                                                              className="bg-[#34447c] text-white py-2 w-full rounded-lg mt-3 text-[14px] flex flex-row items-center justify-center"
                                                          >
                                                              <FaComment className="mr-1 text-sm" />{" "}
                                                              <span className="text-sm">
                                                                  {test.test_comment_count}
                                                              </span>
                                                          </button>
                                                      </TooltipBase>
                                                  </div>
                                              </div>
                                          </div>
                                      ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExamPage;
