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

const ConfirmNavigation = ({ blocker, message = "Bạn có chắc chắn muốn thoát không?" }) => {
    if (!blocker || blocker?.state !== "blocked") return null;

    return (
        <Dialog open={true}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{"Cảnh báo bạn đang thực hiện thao tác"}</DialogTitle>
                    <DialogDescription>{message}</DialogDescription>
                </DialogHeader>

                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button
                            onClick={() => blocker.proceed?.()}
                            type="button"
                            variant="secondary"
                        >
                            Thoát khỏi trang này
                        </Button>
                    </DialogClose>

                    <Button
                        autoFocus
                        type="button"
                        onClick={() => blocker.reset?.()}
                        variant="destructive"
                    >
                        Ở lại trang này
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmNavigation;
