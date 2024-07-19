import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TooltipBase = ({ children, title }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>{title}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default TooltipBase;
