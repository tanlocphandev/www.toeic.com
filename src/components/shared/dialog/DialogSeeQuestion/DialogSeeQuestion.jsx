import React from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DialogSeeQuestion = ({ data = [], onClose = () => {}, open = false }) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="w-full">
                <DialogHeader>
                    <DialogTitle>{`Danh sách câu hỏi`}</DialogTitle>
                    <DialogDescription>{`Tổng số câu hỏi ${data.length}`}</DialogDescription>
                </DialogHeader>

                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="destructive">
                            Đóng
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogSeeQuestion;
