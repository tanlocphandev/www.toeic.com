import { adminRoute } from "@/utils";
import { BiSolidCategory } from "react-icons/bi";
import { FaComment, FaHome, FaUserFriends } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import { TiHome } from "react-icons/ti";

const routes = [
    {
        to: adminRoute("dashboard"),
        icon: (className) => <FaHome size={20} className={className} />,
        name: "Bảng điều khiển",
        children: [],
    },
    {
        to: adminRoute("users"),
        icon: (className) => <FaUserFriends size={20} className={className} />,
        name: "Quản lý người dùng",
        children: [],
    },
    {
        to: undefined,
        icon: (className) => <BiSolidCategory size={20} className={className} />,
        name: "Danh mục",
        children: [
            {
                to: adminRoute("categories/tags"),
                name: "Quản lý Tag",
            },
            {
                to: adminRoute("categories/parts"),
                name: "Quản lý Part",
            },
            {
                to: adminRoute("categories/question-types"),
                name: "Phân loại câu hỏi",
            },
        ],
    },
    {
        to: adminRoute("tests"),
        icon: (className) => <SiTestcafe size={20} className={className} />,
        name: "Quản lý đề thi",
        children: [],
    },
    {
        to: adminRoute("posts"),
        icon: (className) => <MdFeaturedPlayList size={20} className={className} />,
        name: "Quản lý bài đăng",
        children: [],
    },
    {
        to: adminRoute("comments"),
        icon: (className) => <FaComment size={20} className={className} />,
        name: "Quản lý bình luận",
        children: [],
    },
    {
        to: "/",
        icon: (className) => <TiHome size={20} className={className} />,
        name: "Trang chủ client",
        children: [],
    },
];

export default routes;
