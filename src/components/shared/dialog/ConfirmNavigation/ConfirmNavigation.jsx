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

const ConfirmNavigation = ({
    blocker,
    message = "Bạn có chắc chắn muốn thoát không?",
    title = "Cảnh báo bạn đang thực hiện thao tác",
    btnTextLeave = "Thoát khỏi trang này",
    btnTextKeep = "Ở lại trang này",
}) => {
    if (!blocker || blocker?.state !== "blocked") return null;

    return (
        <Dialog open={true}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{message}</DialogDescription>
                </DialogHeader>

                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button
                            onClick={() => blocker.proceed?.()}
                            type="button"
                            variant="secondary"
                        >
                            {btnTextLeave}
                        </Button>
                    </DialogClose>

                    <Button
                        autoFocus
                        type="button"
                        onClick={() => blocker.reset?.()}
                        variant="destructive"
                    >
                        {btnTextKeep}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmNavigation;
