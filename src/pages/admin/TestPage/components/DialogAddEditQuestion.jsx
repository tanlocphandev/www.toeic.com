import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { memo } from "react";

const DialogAddEditQuestion = ({ open, onClose, isEditMode = false, selectedQuestion = null }) => {
    console.log("====================================");
    console.log(`selectedQuestion`, selectedQuestion);
    console.log("====================================");

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-h-[90vh] max-w-3xl">
                <DialogHeader>
                    <div>
                        <DialogTitle>
                            {isEditMode ? `Chỉnh sửa câu hỏi` : `Thêm mới câu hỏi`}
                        </DialogTitle>
                        <DialogDescription>{`Điền đầy đủ thông tin trước khi thêm`}</DialogDescription>
                    </div>
                </DialogHeader>

                <ScrollArea className="h-full">Nội dung</ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

DialogAddEditQuestion.displayName = "DialogAddEditQuestion";

export default memo(DialogAddEditQuestion);
