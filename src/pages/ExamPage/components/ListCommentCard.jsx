import CommentCard from "@/pages/ExamPage/components/CommentCard";
import { Fragment } from "react";

const fakeData = [
    {
        id: 1,
        content: "abc",
    },
    {
        id: 2,
        content: "abc",
    },
    {
        id: 3,
        content: "abc",
    },
    {
        id: 4,
        content: "abc",
        children: [
            {
                id: 5,
                content:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error possimus praesentium dolorum qui quis in! Optio vel id amet blanditiis temporibus sapiente assumenda delectus harum aliquid accusantium, facilis eligendi?",
            },
            {
                id: 6,
                content: "abc",
            },
            {
                id: 7,
                content: "abc",
            },
            {
                id: 8,
                content: "abc",
                children: [
                    {
                        id: 9,
                        content: "abc",
                    },
                    {
                        id: 10,
                        content: "abc",
                    },
                    {
                        id: 11,
                        content: "abc",
                        children: [
                            {
                                id: 12,
                                content: "abc 12",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 13,
        content: "abc",
    },
    {
        id: 14,
        content: "abc",
    },
    {
        id: 15,
        content: "abc",
    },
    {
        id: 16,
        content: "abc",
    },
];

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
