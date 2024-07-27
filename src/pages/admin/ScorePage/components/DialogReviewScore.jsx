import TableComponent from "@/components/shared/TableComponent";
import TooltipBase from "@/components/shared/TooltipBase";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import { useMutationEditScoreDetails } from "@/hooks/scoreDetails/scoreDetails.mutation.hook";
import DialogAddEditScoreDetails from "@/pages/admin/ScorePage/components/DialogAddEditScoreDetails";
import { errorMessage, getQueryKeys, parserSearch } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { toast } from "sonner";

const DialogReviewScore = ({
    scoreId,
    open = false,
    description = "",
    data = [],
    isLoading = false,
    isShowActions = false,
    onClose = () => {},
}) => {
    const [selected, setSelected] = useState(null);
    const mutationEditScore = useMutationEditScoreDetails();
    const queryClient = useQueryClient();

    const columns = [
        {
            key: "number_correct_answer",
            title: "Số câu đúng",
            classNameColumn: "w-[50px] text-center",
            classNameRow: "text-center font-medium",
        },
        {
            key: "listening_score",
            title: "Thang điểm Listening",
            classNameColumn: "text-center w-[50px]",
            classNameRow: "text-center",
        },
        {
            key: "reading_score",
            title: "Thang điểm Reading",
            classNameColumn: "text-center w-[50px]",
            classNameRow: "text-center",
        },
        ...(isShowActions
            ? [
                  {
                      key: "actions",
                      title: "Thao tác",
                      classNameColumn: "text-center w-[50px]",
                      classNameRow: "text-center",
                      render: (row) => {
                          return (
                              <>
                                  <TooltipBase title={"Sửa thông tin"}>
                                      <Button
                                          onClick={() => setSelected(row)}
                                          variant="outline"
                                          className="text-blue-500"
                                      >
                                          <MdEdit />
                                      </Button>
                                  </TooltipBase>

                                  {/* <TooltipBase title={"Xóa đề thi"}>
                                      <Button variant="outline" className="text-red-500 ml-2">
                                          <MdDelete />
                                      </Button>
                                  </TooltipBase> */}
                              </>
                          );
                      },
                  },
              ]
            : []),
    ];

    const handleSubmit = (values) => {
        if (values.details_id) {
            mutationEditScore.mutate(values, {
                onSuccess: () => {
                    queryClient.invalidateQueries({
                        queryKey: getQueryKeys({
                            key: QUERY_KEYS.SCORE_DETAILS.GET_ALL,
                            ...parserSearch({ key: "score_id", value: scoreId }),
                            all: true,
                        }),
                        exact: true,
                    });
                    toast.success("Cập nhật bảng điểm thành công", toastConfigSuccess);
                    setSelected(null);
                    setSelected(null);
                },
                onError: errorMessage,
            });
        }
    };

    if (!open) return null;

    return (
        <>
            <DialogAddEditScoreDetails
                open={!!selected}
                initialValues={selected}
                onSubmit={handleSubmit}
                onClose={() => setSelected(null)}
                isPending={mutationEditScore.isPending}
            />

            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="w-full h-full max-w-8xl">
                    <DialogHeader>
                        <div>
                            <DialogTitle>{`Chi tiết bảng điểm`}</DialogTitle>
                            {description ? (
                                <DialogDescription>{description}</DialogDescription>
                            ) : null}
                        </div>

                        {data.length !== 101 ? (
                            <div>
                                <Button>Thêm điểm</Button>
                            </div>
                        ) : null}
                    </DialogHeader>

                    <div className="h-full overflow-y-auto">
                        {isLoading ? (
                            Array.from({ length: 40 }).map((_, index) => (
                                <Skeleton className={"w-full h-8 mb-4"} key={index} />
                            ))
                        ) : (
                            <TableComponent isStickyHeader rows={data} columns={columns} />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DialogReviewScore;
