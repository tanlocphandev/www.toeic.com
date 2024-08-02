import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiFillEdit } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const CardOptionComment = ({ onEdit = () => {}, onDelete = () => {} }) => {
    const className =
        "w-[33px] h-[33px] flex items-center justify-center rounded-full hover:bg-gray-200";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={className}>
                <BsThreeDotsVertical />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40">
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={onEdit} className="cursor-pointer text-blue-500">
                        <AiFillEdit />
                        <span className="ml-2 capitalize">Chỉnh sửa</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={onDelete} className="cursor-pointer text-red-500">
                        <MdDelete />
                        <span className="ml-2 capitalize">Xóa bình luận</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CardOptionComment;
