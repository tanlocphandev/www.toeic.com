import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { DialogClose } from "@radix-ui/react-dialog";
import { memo, useState } from "react";
import { toast } from "sonner";

const DialogAddPart = ({
    open = false,
    onClose = () => {},
    isPending = false,
    onSubmit = (values) => {},
}) => {
    const [file, setFile] = useState(undefined);

    const handleOnSubmit = () => {
        if (!onSubmit) return;

        if (!file) {
            toast.warning(`Vui lòng chọn file!`);
            return;
        }

        onSubmit(file);
    };

    const handleChangeFile = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        setFile(file);
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Thêm part từ file</DialogTitle>
                    <DialogDescription>
                        Cho phép các định dạng file .xlsx, .txt, .csv
                    </DialogDescription>
                </DialogHeader>

                <Input type="file" onChange={handleChangeFile} />

                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Đóng
                        </Button>
                    </DialogClose>

                    <LoadingButton
                        isLoading={isPending}
                        type="button"
                        onClick={handleOnSubmit}
                        variant="destructive"
                    >
                        Upload
                    </LoadingButton>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

DialogAddPart.displayName = "DialogAddPart";

export default memo(DialogAddPart);
