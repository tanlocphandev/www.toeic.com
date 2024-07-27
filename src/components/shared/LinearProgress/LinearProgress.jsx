import { memo } from "react";

const LinearProgress = ({ color = "pink", isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className={`h-1.5 w-full bg-${color}-100 overflow-hidden rounded-full`}>
            <div
                className={`animate-progress w-full h-full bg-${color}-500 origin-left-right rounded-full`}
            />
        </div>
    );
};

LinearProgress.displayName = "LinearProgress";

export default memo(LinearProgress);
