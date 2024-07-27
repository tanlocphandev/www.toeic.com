import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TooltipBase = ({ children, title }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent>{title}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default TooltipBase;
