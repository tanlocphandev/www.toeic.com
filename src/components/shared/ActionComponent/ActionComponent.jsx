import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebouce";
import { memo, useEffect, useState } from "react";
import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

const ActionComponent = ({
    isHiddenInput = false,
    onClickBtnAdd,
    btnTextAdd = "Thêm",
    onClickBtnUpload,
    onClickBtnExport,
    children = null,
}) => {
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

    if (!children && isHiddenInput && !onClickBtnAdd && !onClickBtnUpload && !onClickBtnExport)
        return null;

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
                {onClickBtnAdd ? (
                    <Button variant="outline" onClick={onClickBtnAdd}>
                        <IoMdAdd className="text-lg mr-1" />
                        <span>{btnTextAdd}</span>
                    </Button>
                ) : null}

                {onClickBtnUpload ? (
                    <Button variant="outline" onClick={onClickBtnUpload}>
                        <FaFileImport className="text-lg mr-1" />
                        <span>Upload</span>
                    </Button>
                ) : null}

                {onClickBtnExport ? (
                    <Button variant="outline">
                        <FaFileExport className="text-lg mr-1" />
                        <span>Xuất file</span>
                    </Button>
                ) : null}

                {children}
            </div>
        </div>
    );
};

ActionComponent.displayName = "ActionComponent";

export default memo(ActionComponent);
