import PartButton from "@/components/shared/PartButton";
import QuestionQuantity from "@/components/shared/PartTest/QuestionQuantity";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { test1, test2, test3, test4, test5, test6, test71, test72, test73 } from "@/mock/test.mock";
import PartFive from "@/pages/PracticeLRPage/components/PartFive";
import PartFour from "@/pages/PracticeLRPage/components/PartFour";
import PartOne from "@/pages/PracticeLRPage/components/PartOne";
import PartSeven1 from "@/pages/PracticeLRPage/components/PartSeven1";
import PartSeven2 from "@/pages/PracticeLRPage/components/PartSeven2";
import PartSeven3 from "@/pages/PracticeLRPage/components/PartSeven3";
import PartSix from "@/pages/PracticeLRPage/components/PartSix";
import PartThree from "@/pages/PracticeLRPage/components/PartThree";
import PartTwo from "@/pages/PracticeLRPage/components/PartTwo";

const DialogSeeQuestion = ({ data = [], onClose = () => {}, open = false }) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="w-full h-full max-w-8xl">
                <DialogHeader>
                    <DialogTitle>{`Danh sách câu hỏi`}</DialogTitle>
                    <DialogDescription>{`Tổng số câu hỏi ${data.length}`}</DialogDescription>
                </DialogHeader>

                <div className="overflow-y-scroll h-full" data-aos="zoom-in">
                    <div className="text-center">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <PartButton key={index} text={`Part ${index + 1}`} />
                        ))}
                    </div>

                    <div className="flex justify-between mt-10">
                        <div className="flex justify-between flex-col w-[80%] mr-2">
                            <PartOne data={test1} />

                            <PartTwo data={test2} />

                            <PartThree data={test3} />

                            <PartFour data={test4} />

                            <PartFive data={test5} />

                            <PartSix data={test6} />

                            <PartSeven1 data={test71} />

                            <PartSeven2 data={test72} />

                            <PartSeven3 data={test73} />

                            {/*

                            <div>
                               
                            </div>

                            <div>
                                <PartSeven2 />
                            </div>

                            <div>
                                <PartSeven3 />
                            </div> */}
                        </div>

                        <div className="w-[20%] static top-0 right-0">
                            <QuestionQuantity partId={200} id={""} />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogSeeQuestion;
