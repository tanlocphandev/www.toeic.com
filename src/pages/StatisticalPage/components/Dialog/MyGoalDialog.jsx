import LoadingButton from "@/components/ui/loading-button";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import { useMutationUpdateProfile } from "@/hooks/user/user.mutation.hook";
import { useAuthSlice } from "@/redux/slices/auth.slice";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuGoal } from "react-icons/lu";
import { toast } from "sonner";

const MyGoalDialog = ({ closeDialog }) => {
    const { user, accessToken, userId, refreshToken } = useAuthSlice();
    const [goalScore, setGoalScore] = useState(user?.user_exam_target || 0);
    const mutationEditProfile = useMutationUpdateProfile();
    const queryClient = useQueryClient();

    const handleSliderChange = (event) => {
        setGoalScore(event.target.value);
    };

    const revalidate = () => {
        queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.AUTH.GET_ME, accessToken, userId, refreshToken],
            exact: true,
        });
    };

    const handleSave = () => {
        const payload = {
            target: +goalScore,
        };

        // Handle save action here
        mutationEditProfile.mutate(payload, {
            onSuccess: () => {
                toast.success("Cập nhật điểm mục tiêu thành công.", toastConfigSuccess);
                revalidate();
                closeDialog();
            },
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white p-6 rounded-lg w-[500px]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-[#34447c] flex items-center">
                        <LuGoal className="mr-2 text-green-500" />
                        Điểm mục tiêu
                    </h2>

                    <IoIosCloseCircleOutline
                        onClick={closeDialog}
                        className="text-3xl text-red-500 cursor-pointer"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">
                        Đặt điểm mục tiêu <span className="text-red-500">*</span>
                    </label>

                    <div className="flex items-center">
                        <input
                            type="range"
                            min="0"
                            max="990"
                            value={goalScore}
                            onChange={handleSliderChange}
                            className="flex-grow mr-4"
                        />
                        <span className="text-lg font-medium">{goalScore}</span>
                    </div>
                </div>

                <div className="flex justify-end space-x-4">
                    <LoadingButton
                        isLoading={mutationEditProfile.isPending}
                        onClick={closeDialog}
                        variant="secondary"
                    >
                        Đóng
                    </LoadingButton>

                    <LoadingButton
                        isLoading={mutationEditProfile.isPending}
                        onClick={handleSave}
                        variant="destructive"
                    >
                        Lưu
                    </LoadingButton>
                </div>
            </div>
        </div>
    );
};

export default MyGoalDialog;
