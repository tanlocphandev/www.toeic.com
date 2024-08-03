import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toastConfigSuccess } from "@/configs/toast.config";
import { USER_ROLE_LABELS, USER_ROLES } from "@/constants";
import { useRouter } from "@/hooks/useRouter";
import { authActions, useAuthSlice } from "@/redux/slices/auth.slice";
import { customizationActions } from "@/redux/slices/customization.slice";
import AuthService from "@/services/auth.service";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiPower } from "react-icons/ci";
import { GrScorecard } from "react-icons/gr";
import { MdAdminPanelSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const MenuHeader = () => {
    const { user } = useAuthSlice();
    const { replace } = useRouter();
    const dispatch = useDispatch();
    const [calendarOpen, setCalendarOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await AuthService.logout(user.user_id);
            dispatch(authActions.removeAuth());
            dispatch(customizationActions.setOpenNote(false));
            toast.success("Đăng xuất thành công", toastConfigSuccess);
            replace("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const handleClose = () => {
        setCalendarOpen(false);
    };

    return (
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
                <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                >
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="w-8 h-8 rounded-full"
                        src={user?.user_avatar?.url || "/avatar.webp"}
                        alt="user photo"
                        loading="lazy"
                    />
                </button>
            </PopoverTrigger>

            <PopoverContent
                hideWhenDetached={true}
                align="end"
                side="bottom"
                className="text-base list-none w-46 bg-white divide-y divide-gray-100 rounded-lg shadow p-1"
            >
                <div className="p-4">
                    <p className="text-sm text-gray-900 dark:text-white">{user?.user_fullName}</p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                        {user?.user_email}
                    </p>
                    {user?.user_role !== USER_ROLES.USER ? (
                        <p className="text-sm font-medium text-red-500 truncate dark:text-gray-300">
                            Chức vụ: {USER_ROLE_LABELS[user?.user_role]}
                        </p>
                    ) : null}
                </div>

                <ul className="pt-2">
                    {user?.user_role === USER_ROLES.ADMIN ||
                    user?.user_role === USER_ROLES.TEACHER ? (
                        <li>
                            <Link
                                to={`/admin`}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={handleClose}
                            >
                                <MdAdminPanelSettings className="mr-2" />
                                <span>Quản trị</span>
                            </Link>
                        </li>
                    ) : null}

                    <li>
                        <Link
                            to={`/profile`}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleClose}
                        >
                            <CgProfile className="mr-2" />
                            <span>Thông tin cá nhân</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to={`/statistical`}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleClose}
                        >
                            <GrScorecard className="mr-2" />
                            <span>Kết quả luyện thi</span>
                        </Link>
                    </li>

                    <li>
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <CiPower className="mr-2" />
                            <span>Đăng xuất</span>
                        </button>
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    );
};

export default MenuHeader;
