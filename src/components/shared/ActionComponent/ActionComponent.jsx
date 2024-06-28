import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebouce";
import { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ActionComponent = ({ buttons = [], isHiddenInput = false }) => {
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

    if (buttons.length === 0 && isHiddenInput) return null;

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

            <div className="flex space-x-2">
                <Button>Add new</Button>
                <Button>Import</Button>
                <Button>Export</Button>
            </div>
        </div>
    );
};

ActionComponent.displayName = "ActionComponent";

export default memo(ActionComponent);
