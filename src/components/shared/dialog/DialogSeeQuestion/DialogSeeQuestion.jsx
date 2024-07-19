import PartButton from "@/components/shared/PartButton";
import QuestionQuantity from "@/components/shared/PartTest/QuestionQuantity";
import ReviewPart from "@/components/shared/ReviewPart";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Spinner from "@/components/ui/spinner";

const DialogSeeQuestion = ({
    data = [],
    parts = [],
    totalAnswer = 0,
    onClose = () => {},
    open = false,
    isLoading = false,
}) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="w-full h-full max-w-8xl">
                <DialogHeader>
                    <DialogTitle>{`Danh sách câu hỏi`}</DialogTitle>
                    <DialogDescription>{`Tổng số câu hỏi ${totalAnswer}`}</DialogDescription>
                </DialogHeader>

                <div className="overflow-y-scroll h-full">
                    <div className="text-center">
                        {parts.map((part, index) => (
                            <PartButton key={index} text={`Part ${part}`} />
                        ))}
                    </div>

                    <div className="flex justify-between relative mt-10">
                        <div className="flex justify-between flex-col w-[80%] mr-2">
                            {isLoading ? (
                                <div className="flex justify-center items-center">
                                    <Spinner className={"w-8 h-8"} />
                                </div>
                            ) : (
                                <ReviewPart data={data} />
                            )}
                        </div>

                        <div className="w-[20%] sticky bottom-0 right-0">
                            <QuestionQuantity partId={totalAnswer} id={""} />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogSeeQuestion;
