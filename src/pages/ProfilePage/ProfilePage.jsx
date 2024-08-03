import TooltipBase from "@/components/shared/TooltipBase";
import Container from "@/components/ui/container";
import Spinner from "@/components/ui/spinner";
import { toastConfigSuccess } from "@/configs/toast.config";
import { QUERY_KEYS } from "@/constants";
import { useMutationUpdateProfile } from "@/hooks/user/user.mutation.hook";
import DialogAddTeacher from "@/pages/admin/UserPage/components/DialogAddTeacher";
import StatisticalPage from "@/pages/StatisticalPage";
import { useAuthSlice } from "@/redux/slices/auth.slice";
import uploadService from "@/services/upload.service";
import { fDate } from "@/utils/fDate";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoIosReverseCamera } from "react-icons/io";
import { toast } from "sonner";

const ProfilePage = () => {
    const { accessToken, userId, user, refreshToken } = useAuthSlice();
    const [openEdit, setOpenEdit] = useState(false);
    const queryClient = useQueryClient();
    const mutationEditProfile = useMutationUpdateProfile();
    const fileRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const revalidate = () => {
        queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.AUTH.GET_ME, accessToken, userId, refreshToken],
            exact: true,
        });
    };

    const handleClose = () => {
        setOpenEdit(false);
    };

    const handleSubmitChange = (values, { reset, resetField }) => {
        const payload = {
            ...values,
            dob: fDate(values.dob, "YYYY-MM-DD"),
        };

        mutationEditProfile.mutate(payload, {
            onSuccess: () => {
                toast.success("Cập nhật thông tin thành công.", toastConfigSuccess);
                revalidate();
                reset();
                handleClose();
                resetField();
            },
        });
    };

    const handleChangeAvatar = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const payload = {
            file,
            folder: "toeic/user/avatars",
        };

        try {
            setIsLoading(true);
            const response = await uploadService.uploadImage(payload);

            const payloadChangeAvatar = {
                avatar: response.metadata,
            };

            mutationEditProfile.mutate(payloadChangeAvatar, {
                onSuccess: () => {
                    toast.success("Thay đổi ảnh đại diện thành công.", toastConfigSuccess);
                    revalidate();
                },
            });
        } catch (error) {
            console.log(`upload error:::`, error);
            errorMessage(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOpenFile = () => {
        fileRef.current?.click();
    };

    const initialValues = useMemo(() => {
        return {
            fullName: user?.user_fullName || "",
            email: user?.user_email || "",
            gender: user?.user_sex || "",
            dob: user?.user_dob ? new Date(user?.user_dob) : "",
        };
    }, [user]);

    return (
        <Container title={"Thông tin cá nhân"} className={"max-w-4xl"}>
            <DialogAddTeacher
                open={openEdit}
                isEdit
                initialValues={initialValues}
                onSubmit={handleSubmitChange}
                onClose={handleClose}
                isPending={mutationEditProfile.isPending}
            />

            <div>
                <div>
                    <img
                        src="/bg-profile.jpg"
                        loading="lazy"
                        alt="background profile"
                        className="w-full h-52 object-cover block rounded-sm"
                    />
                </div>

                <div className="flex flex-row px-32">
                    <div className="relative">
                        <img
                            src={user?.user_avatar?.url || "/avatar.webp"}
                            loading="lazy"
                            alt="avatar"
                            className="w-40 h-40 rounded-full border-4 shadow-2xl border-white transform -translate-y-1/3"
                        />

                        <TooltipBase title={"Đổi ảnh đại diện"}>
                            <div
                                onClick={handleOpenFile}
                                className="absolute  bottom-12 right-0 transform -translate-y-1/3 flex justify-center items-center w-10 h-10 rounded-full border-2 shadow-2xl border-white bg-gray-800/80 cursor-pointer transition-opacity hover:opacity-75"
                            >
                                {isLoading || mutationEditProfile.isPending ? (
                                    <Spinner className={"w-5 h-5"} />
                                ) : (
                                    <IoIosReverseCamera className="text-2xl text-white" />
                                )}
                            </div>
                        </TooltipBase>

                        <input
                            onChange={handleChangeAvatar}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="upload"
                            ref={fileRef}
                        />
                    </div>

                    <div className="ml-5 mt-3">
                        <div className="text-xl font-bold flex items-center gap-2">
                            <span>{user?.user_fullName}</span>

                            <TooltipBase title={"Chỉnh sửa"}>
                                <button onClick={() => setOpenEdit(true)}>
                                    <AiFillEdit className="transition-colors hover:text-gray-500" />
                                </button>
                            </TooltipBase>
                        </div>
                        <p className="text-sm">{user?.user_email}</p>
                    </div>
                </div>
            </div>

            <div>
                {/* Show results exam */}
                <h1 className="text-xl font-bold font-script text-[#34447c]">Kết quả luyện thi</h1>

                <StatisticalPage isHiddenTitle />
            </div>
        </Container>
    );
};

export default ProfilePage;
