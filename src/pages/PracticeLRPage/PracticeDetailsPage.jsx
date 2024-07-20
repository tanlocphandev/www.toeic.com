import ButtonYear from "@/components/shared/ButtonYear";
import Head from "@/components/shared/Head";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/ui/spinner";
import useDataQuestionType, {
    useGetQuestionTypeBySlug,
} from "@/hooks/questionType/useDataQuestionType";
import { useGetTestPartByPartId } from "@/hooks/testPart/testPart.query.hook";
import useBackground from "@/hooks/useBackground";
import { mapValueQuestionType } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const PracticeDetailsPage = () => {
    const { slug } = useParams();
    const [yearActive, setYearActive] = useState("");

    const { data, isLoading } = useGetQuestionTypeBySlug(slug);
    const { data: questionTypes } = useDataQuestionType({
        page: 1,
        select: (data) => {
            const newData = data.metadata?.map((item) => ({
                title: mapValueQuestionType(item),
                slug: item?.type_slug,
            }));

            return newData;
        },
    });
    const { data: dataTest, isLoading: isLoadingTest } = useGetTestPartByPartId(
        data?.metadata?.part_id,
        (data) => {
            return data?.metadata;
        }
    );

    useEffect(() => {
        if (!dataTest) {
            return;
        }

        if (dataTest?.results && dataTest?.years) {
            const { results, years } = dataTest;
            setYearActive(years[0]);
        }
    }, [dataTest]);

    useBackground({
        selector: "#practice",
    });

    const testParts = useMemo(() => {
        if (!dataTest?.results || !yearActive) {
            return [];
        }

        return dataTest.results.filter((t) => t?.test?.test_of_year === yearActive);
    }, [yearActive, dataTest?.results]);

    return (
        <div id="practice">
            <Head
                title={
                    isLoading
                        ? "Loading..."
                        : `#${yearActive} ${mapValueQuestionType(data?.metadata)}`
                }
            />

            <div className="max-w-6xl mx-auto p-2 pb-16">
                <h1 className="text-2xl font-medium text-center my-4 uppercase text-[#34447c]">
                    Luyện thi TOEIC online có đáp án
                </h1>

                {isLoading ? (
                    <div className="flex justify-center h-[176px]">
                        <Spinner />
                    </div>
                ) : (
                    <>
                        <h3 className="text-xl text-center">
                            {mapValueQuestionType(data?.metadata)}
                        </h3>

                        <div className="mt-10">
                            <div className="flex justify-center mb-5 gap-2">
                                {isLoadingTest
                                    ? Array.from({ length: 5 }).map((_, index) => (
                                          <Skeleton className="h-8 w-[80px]" />
                                      ))
                                    : dataTest?.years?.map((year) => (
                                          <ButtonYear
                                              year={year}
                                              isActive={year === yearActive}
                                              onClick={() => setYearActive(year)}
                                          />
                                      ))}
                            </div>
                        </div>

                        <div className="flex justify-between mt-5">
                            <div className="grid grid-cols-5 gap-5 w-[70%] h-[176px] mt-9 m-auto">
                                {isLoadingTest
                                    ? Array.from({ length: 10 }).map((_, index) => (
                                          <div
                                              key={index}
                                              className="bg-white border rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                                          >
                                              <Skeleton className="h-4 w-full" />
                                              <Skeleton className="h-2 mt-5 mb-2 w-full" />
                                              <Skeleton className="h-4 w-full" />
                                              <Skeleton className="h-4 my-2 w-full" />
                                              <Skeleton className="h-8 mt-4 w-full" />
                                          </div>
                                      ))
                                    : testParts?.map((row, index) => (
                                          <div
                                              key={index}
                                              className="bg-white border rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                                          >
                                              <h2 className="text-xl font-semibold mb-2">
                                                  {row?.test?.test_name}
                                              </h2>

                                              <p className="flex items-center text-xs">
                                                  <Progress
                                                      value={0}
                                                      className="bg-orange-200 mr-1"
                                                  />
                                                  {0}%
                                              </p>

                                              <p>Tham gia: {row?.test?.test_user_count}</p>

                                              <p className="text-sm font-medium">
                                                  {row?.test?.test_tag}
                                              </p>

                                              <Link
                                                  to={`/practice-lc-rc/${slug}/${row?.part_id}/${row?.test_id}`}
                                              >
                                                  <button className="bg-[#34447c] text-white py-1 rounded-lg w-full mt-3">
                                                      Study
                                                  </button>
                                              </Link>
                                          </div>
                                      ))}
                            </div>

                            <div className="w-[20%]">
                                <div className="flex items-center">
                                    <AiFillThunderbolt className="text-yellow-400 mr-1 text-2xl" />
                                    <h3 className="text-[#13283b] font-bold text-xl">
                                        OTHER PRACTICES:{" "}
                                    </h3>
                                </div>

                                {questionTypes?.map((item, index) => (
                                    <div key={index} className="my-2">
                                        <Link to={`/practice-lc-rc/${item.slug}`}>
                                            <button className="bg-white text-black rounded-lg border hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 w-full py-2 ">
                                                {item.title}
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PracticeDetailsPage;
