import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React, { memo } from "react";

const SkeletonLoadingDoc = ({ column = 1, rows = 5 }) => {
    return (
        <div className="w-full bg-no-repeat bg-cover bg-bottom p-4 rounded-lg border border-[#34447c] flex space-y-4 flex-col">
            <Skeleton className="w-40 h-8" />

            <div
                className={cn("flex flex-wrap", {
                    "space-y-4": column === 1,
                    "gap-4": column === 2,
                })}
            >
                {Array.from({ length: rows }).map((_, index) => (
                    <div
                        key={index}
                        className={cn("bg-gray-50 p-4 rounded-lg flex space-x-4", {
                            "w-full": column === 1,
                            "w-[49%]": column === 2,
                        })}
                    >
                        <Skeleton
                            className={cn({
                                "w-[150px] h-[150px]": column === 2,
                                "w-[300px] h-[145px]": column === 1,
                            })}
                        />

                        <div className="flex-1 flex flex-col space-y-2">
                            <Skeleton className="w-60 h-8" />
                            <Skeleton className="w-full h-3" />
                            <Skeleton className="w-full h-3" />
                            <Skeleton className="w-full h-3" />
                            <Skeleton className="w-32 h-10" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

SkeletonLoadingDoc.displayName = "SkeletonLoadingDoc";

export default memo(SkeletonLoadingDoc);
