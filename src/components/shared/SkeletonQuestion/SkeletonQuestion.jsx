import { Skeleton } from "@/components/ui/skeleton";
import { memo } from "react";

const SkeletonQuestion = ({ length = 6 }) => {
    return Array.from({ length }).map((_, idx) => (
        <div className="w-full rounded-lg border mb-3 p-3" key={idx}>
            <Skeleton className={"mb-4 h-8 w-full"} />
            <Skeleton className={"mb-4 h-20 w-full"} />

            <div className="flex space-x-4">
                <Skeleton className={"mb-4 h-8 w-8 rounded-full"} />
                <Skeleton className={"mb-4 h-8 w-full"} />
            </div>

            {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton className={"ml-12 mb-4 h-4 w-[300px]"} key={index} />
            ))}
        </div>
    ));
};

SkeletonQuestion.displayName = "SkeletonQuestion";

export default memo(SkeletonQuestion);
