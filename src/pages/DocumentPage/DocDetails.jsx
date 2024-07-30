import Container from "@/components/ui/container";
import { documentTypes } from "@/constants/document.constant";
import { useGetDocById } from "@/hooks/document/document.query.hook";
import SkeletonLoadingDoc from "@/pages/DocumentPage/components/SkeletonLoadingDoc";
import { useParams } from "react-router-dom";

const DocDetails = () => {
    const { docId } = useParams();
    const { data, isLoading } = useGetDocById({
        id: docId,
        select: (data) => data?.metadata,
    });

    console.log(`data:::`, data);

    return (
        <Container title={"Chi tiết tài liệu"}>
            {isLoading ? (
                <SkeletonLoadingDoc />
            ) : (
                <div>
                    <h1 className="text-3xl font-medium text-center uppercase text-[#34447c]">
                        {data?.doc_title}
                    </h1>

                    <div className="mt-4">
                        <p>{data?.doc_desc}</p>
                    </div>

                    {/* Video */}

                    {/* Audio */}

                    {/* PDF */}

                    {/* Post */}
                    {data?.doc_type === documentTypes.text && (
                        <div>
                            <div
                                className="ql-editor"
                                dangerouslySetInnerHTML={{ __html: data?.doc_text }}
                            />
                        </div>
                    )}
                </div>
            )}
        </Container>
    );
};

export default DocDetails;
