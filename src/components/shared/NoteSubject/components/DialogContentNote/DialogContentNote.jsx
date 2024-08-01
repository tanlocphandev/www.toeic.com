import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const DialogContentNote = ({ open, data = null, onClose = () => {} }) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Tiêu đề: {data?.detail_title}</DialogTitle>
                    <DialogDescription>
                        Dưới đây là nội dung chi tiết của ghi chú.
                    </DialogDescription>
                </DialogHeader>

                <span className="text-xs ">{data?.detail_content}</span>
            </DialogContent>
        </Dialog>
    );
};

export default DialogContentNote;
