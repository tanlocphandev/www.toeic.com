import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { toastConfigSuccess } from "@/configs/toast.config";
import { USER_ROLES } from "@/constants";
import { cn } from "@/lib/utils";
import { authActions, useAuthSlice } from "@/redux/slices/auth.slice";
import AuthService from "@/services/auth.service";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { practices } from "@/mock/practice.mock";

const components = [
    {
        title: "Phần 1: Mô tả tranh",
        slug: "detail-test-p1",
    },
    {
        title: "Phần 2: Hỏi - Đáp",
        slug: "detail-test-p2",
    },
    {
        title: "Phần 3: Đoạn hội thoại",
        slug: "detail-test-p3",
    },
    {
        title: "Phần 4: Bài nói ngắn",
        slug: "detail-test-p4",
    },
    {
        title: "Phần 5: Hoàn thành câu",
        slug: "detail-test-p5",
    },
    {
        title: "Phần 6: Hoàn thành đoạn văn",
        slug: "detail-test-p6",
    },
    {
        title: "Phần 7: Đọc hiểu - Đoạn đơn",
        slug: "detail-test-p71",
    },
    {
        title: "Phần 7: Đọc hiểu - Đoạn kép",
        slug: "detail-test-p72",
    },
    {
        title: "Phần 7: Đọc hiểu - Đoạn ba",
        slug: "detail-test-p73",
    },
];

/**
 * Renders the header component with navigation menu and list items.
 *
 * @return {JSX.Element} The JSX element representing the header component.
 */
const Header = () => {
    const { user } = useAuthSlice();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await AuthService.logout(user.user_id);
            dispatch(authActions.removeAuth());
            toast.success("Đăng xuất thành công", toastConfigSuccess);
            navigate("/login", { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header className="flex items-center justify-between h-[100px] w-full mx-auto bg-[#13283b]">
            <Container>
                <NavigationMenu>
                    <div className="w-[160px] h-[100px]" data-aos="zoom-in">
                        <Link to={"/"} className="">
                            <img
                                src="/logo.svg"
                                loading="lazy"
                                alt="Logo"
                                className="object-cover w-[160px] h-[100px] filter invert ml-[-40px]"
                            />
                        </Link>
                    </div>

                    <NavigationMenuList className="w-[500px] h-[100px] flex items-center justify-start space-x-5">
                        <NavigationMenuItem asChild className="relative">
                            <Link
                                to={"/"}
                                className={
                                    (navigationMenuTriggerStyle(),
                                    `font-normal bg-transparent text-white after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-0 after:bg-white after:transition-all after:duration-400 after:ease hover:after:w-full hover:after:left-0`)
                                }
                            >
                                Trang chủ
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="p-0 text-[16px] font-normal relative menu-trigger bg-transparent text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus:outline-none data-[active]:bg-transparent data-[state=open]:bg-transparent after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-4 after:bg-white after:transition-all after:duration-400 after:ease hover:after:left-4">
                                Luyện L & R
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {practices.map((component) => (
                                        <ListItem asChild key={component.title} className="border">
                                            <Link to={`/practice-lc-rc/${component.slug}`}>
                                                {component.title}
                                            </Link>
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem asChild className="relative">
                            <Link
                                to={"/exams"}
                                className={
                                    (navigationMenuTriggerStyle(),
                                    `font-normal bg-transparent text-white after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-0 after:bg-white after:transition-all after:duration-400 after:ease hover:after:w-full hover:after:left-0`)
                                }
                            >
                                Thi thử
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem asChild className="relative ">
                            <Link
                                to={"/documents"}
                                className={
                                    (navigationMenuTriggerStyle(),
                                    `font-normal bg-transparent text-white after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-0 after:bg-white after:transition-all after:duration-400 after:ease hover:after:w-full hover:after:left-0`)
                                }
                            >
                                Tài liệu
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    <NavigationMenuList className="w-[500px] h-[100px] flex items-center justify-end space-x-5">
                        <NavigationMenuItem asChild className="relative">
                            <Link
                                to="/statistical"
                                className={
                                    (navigationMenuTriggerStyle(),
                                    `font-normal bg-transparent text-white after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-0 after:bg-white after:transition-all after:duration-400 after:ease hover:after:w-full hover:after:left-0`)
                                }
                            >
                                Kết quả luyện thi
                            </Link>
                        </NavigationMenuItem>
                        {user ? (
                            <>
                                <NavigationMenuItem asChild className="relative">
                                    <Link
                                        to={"#"}
                                        onClick={handleLogout}
                                        className={
                                            (navigationMenuTriggerStyle(),
                                            `font-normal bg-transparent text-white after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-0 after:bg-white after:transition-all after:duration-400 after:ease hover:after:w-full hover:after:left-0`)
                                        }
                                    >
                                        Đăng xuất
                                    </Link>
                                </NavigationMenuItem>

                                {user.user_role === USER_ROLES.ADMIN ? (
                                    <NavigationMenuItem asChild className="relative">
                                        <Link
                                            to={"/admin"}
                                            className={
                                                (navigationMenuTriggerStyle(),
                                                `font-normal bg-transparent text-white after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-0 after:bg-white after:transition-all after:duration-400 after:ease hover:after:w-full hover:after:left-0`)
                                            }
                                        >
                                            Quản trị
                                        </Link>
                                    </NavigationMenuItem>
                                ) : null}
                            </>
                        ) : (
                            <>
                                <NavigationMenuItem asChild className="relative">
                                    <Link
                                        to="/login"
                                        className={
                                            (navigationMenuTriggerStyle(),
                                            `font-normal bg-transparent text-white after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-0 after:bg-white after:transition-all after:duration-400 after:ease hover:after:w-full hover:after:left-0`)
                                        }
                                    >
                                        Đăng nhập
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem className="relative">
                                    <Link
                                        to="/register"
                                        className={
                                            (navigationMenuTriggerStyle(),
                                            `font-normal bg-transparent text-white after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-0 after:bg-white after:transition-all after:duration-400 after:ease hover:after:w-full hover:after:left-0`)
                                        }
                                    >
                                        Đăng ký
                                    </Link>
                                </NavigationMenuItem>
                            </>
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
            </Container>
        </header>
    );
};

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = "ListItem";

Header.displayName = "Header";

export default Header;
