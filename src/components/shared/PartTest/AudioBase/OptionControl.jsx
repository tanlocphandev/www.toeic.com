import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { IoMdSpeedometer } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";

const speeds = [
    { label: "0.25", value: 0.25 },
    { label: "0.5", value: 0.5 },
    { label: "0.75", value: 0.75 },
    { label: "Normal", value: 1 },
    { label: "1.25", value: 1.25 },
    { label: "1.5", value: 1.5 },
    { label: "1.75", value: 1.75 },
    { label: "2", value: 2 },
];

const OptionControl = ({ activeSpeed = 1, onChangeSpeed = (speed) => {}, onReload = () => {} }) => {
    const className =
        "w-[33px] h-[33px] flex items-center justify-center rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={className}>
                <BsThreeDotsVertical />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-44">
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="cursor-pointer">
                            <IoMdSpeedometer />

                            <span className="ml-1">Speed</span>

                            <DropdownMenuShortcut>
                                {speeds.find((s) => s.value === activeSpeed)?.label}
                            </DropdownMenuShortcut>
                        </DropdownMenuSubTrigger>

                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                {speeds.map((speed) => (
                                    <DropdownMenuItem
                                        active
                                        key={speed.value}
                                        className={cn("cursor-pointer justify-between", {
                                            "font-medium": activeSpeed === speed.value,
                                            "bg-gray-100": activeSpeed === speed.value,
                                        })}
                                        onClick={() => onChangeSpeed?.(speed.value)}
                                    >
                                        <span>{speed.label}</span>

                                        {activeSpeed === speed.value && <FaCheck />}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuItem className="cursor-pointer" onClick={onReload}>
                        <IoReloadOutline />
                        <span className="ml-1 capitalize">reload file</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default OptionControl;
