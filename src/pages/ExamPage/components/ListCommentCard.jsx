import CommentCard from "@/pages/ExamPage/components/CommentCard";
import { Fragment } from "react";

const ListCommentCard = ({ data = [] }) => {
    return (
        <div className="flex flex-col space-y-3">
            {data.length ? (
                data.map((item, index) => (
                    <Fragment key={index}>
                        <CommentCard key={index} dataChildren={true} comment={item} version={0} />
                    </Fragment>
                ))
            ) : (
                <div>
                    <span className="text-sm font-medium">Không có bình luận</span>
                </div>
            )}
        </div>
    );
};

export default ListCommentCard;
