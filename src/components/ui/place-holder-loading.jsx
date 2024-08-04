import Spinner from "@/components/ui/spinner";
import React from "react";

const PlaceHolderLoading = ({ isLoading, textLoading = "Đang tải..." }) => {
    if (!isLoading) return null;

    return (
        <div className="w-full h-full flex items-center justify-center bg-gray-600/80 fixed top-0 left-0 z-[100]">
            <div className="flex flex-col items-center">
                <Spinner className={"w-10 h-10"} />
                <p className="text-white text-lg">{textLoading}</p>
            </div>
        </div>
    );
};

export default PlaceHolderLoading;
