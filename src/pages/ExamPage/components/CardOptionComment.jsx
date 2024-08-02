import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { AiFillEdit } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdOutlineChangeCircle } from "react-icons/md";

const CardOptionComment = ({
    onEdit = () => {},
    onDelete = () => {},
    onChangeStatus = () => {},
    isHiddenDelete = false,
    isHiddenEdit = false,
    isHiddenChangeStatus = false,
    isAdmin = false,
}) => {
    const className =
        "w-[33px] h-[33px] flex items-center justify-center rounded-full hover:bg-gray-200";

    // console.log("====================================");
    // console.log({ isAdmin, isHiddenDelete, isHiddenEdit, isHiddenChangeStatus });
    // console.log("====================================");

    if (isHiddenDelete && isHiddenEdit && !isAdmin) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={className}>
                <BsThreeDotsVertical />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40">
                <DropdownMenuGroup>
                    {isHiddenDelete ? null : (
                        <DropdownMenuItem onClick={onEdit} className="cursor-pointer text-blue-500">
                            <AiFillEdit />
                            <span className="ml-2 capitalize">Chỉnh sửa</span>
                        </DropdownMenuItem>
                    )}

                    {isHiddenEdit ? null : (
                        <DropdownMenuItem
                            onClick={onDelete}
                            className="cursor-pointer text-red-500"
                        >
                            <MdDelete />
                            <span className="ml-2 capitalize">Xóa bình luận</span>
                        </DropdownMenuItem>
                    )}

                    {isAdmin ? (
                        <DropdownMenuItem
                            onClick={onChangeStatus}
                            className={cn("cursor-pointer", {
                                "text-black": !isHiddenChangeStatus,
                                "text-green-500": isHiddenChangeStatus,
                            })}
                        >
                            <MdOutlineChangeCircle />
                            <span className="ml-2 capitalize">
                                {isHiddenChangeStatus ? "Hiện bình luận" : "Ẩn bình luận"}
                            </span>
                        </DropdownMenuItem>
                    ) : null}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CardOptionComment;
