import TableComponent from "@/components/shared/TableComponent";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { memo } from "react";

const DialogShowErrorExist = ({
    data = [],
    title = "Danh sách đã tồn tại",
    subTitle = "Vui lòng bỏ các từ khóa này trước khi upload",
    open = false,
    onClose = () => {},
}) => {
    const columns = [
        {
            key: "name",
            title: "Từ khóa",
            classNameRow: "text-red-500 font-medium",
        },
    ];

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-xl ">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{`${subTitle}. Có ${data.length} từ khóa đã tồn tại.`}</DialogDescription>
                </DialogHeader>

                <TableComponent
                    className={"max-h-[400px] overflow-y-auto"}
                    columns={columns}
                    rows={data}
                />

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

DialogShowErrorExist.displayName = "DialogShowErrorExist";

export default memo(DialogShowErrorExist);
