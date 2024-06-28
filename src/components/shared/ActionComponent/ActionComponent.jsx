import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebouce";
import { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ActionComponent = ({ isHiddenInput = false, children = null }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParamsValue = searchParams.get("q");

    const [search, setSearch] = useState(() => {
        return searchParamsValue || "";
    });

    const debounceValue = useDebounce(search, 500);

    useEffect(() => {
        if (!debounceValue) {
            searchParams.delete("q");
            setSearchParams(searchParams);
            return;
        }

        setSearchParams({ q: debounceValue });
    }, [debounceValue]);

    if (!children && isHiddenInput) return null;

    return (
        <div className="flex justify-between items-center">
            {!isHiddenInput ? (
                <div className="w-1/3">
                    <Input
                        placeholder="Tìm kiếm"
                        className="w-full"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            ) : null}

            <div className="flex space-x-2">{children}</div>
        </div>
    );
};

ActionComponent.displayName = "ActionComponent";

export default memo(ActionComponent);
