import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import LoadingButton from "@/components/ui/loading-button";

const DialogConfirm = ({
    open = false,
    onClose = () => {},
    onConfirm = () => {},
    title = "Bạn có chắc chắn muốn xóa không?",
    message = "Cảnh báo bạn đang thực hiện thao tác xóa, sẽ mất dữ liệu!",
    btnTextCancel = "Hủy bỏ",
    btnTextConfirm = "Xác nhận",
    isPending = false,
}) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{message}</DialogDescription>
                </DialogHeader>

                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <LoadingButton
                            autoFocus
                            isLoading={isPending}
                            onClick={onClose}
                            type="button"
                            variant="secondary"
                        >
                            {btnTextCancel}
                        </LoadingButton>
                    </DialogClose>

                    <LoadingButton
                        isLoading={isPending}
                        type="button"
                        onClick={onConfirm}
                        variant="destructive"
                    >
                        {btnTextConfirm}
                    </LoadingButton>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

DialogConfirm.displayName = "DialogConfirm";

export default DialogConfirm;
