import MenuHeader from "@/components/shared/admin/Header/MenuHeader";
import Container from "@/components/shared/Container";
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
import useDataQuestionType from "@/hooks/questionType/useDataQuestionType";
import { cn } from "@/lib/utils";
import { authActions, useAuthSlice } from "@/redux/slices/auth.slice";
import { customizationActions } from "@/redux/slices/customization.slice";
import AuthService from "@/services/auth.service";
import { mapValueQuestionType } from "@/utils";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

/**
 * Renders the header component with navigation menu and list items.
 *
 * @return {JSX.Element} The JSX element representing the header component.
 */
const Header = () => {
    const { user } = useAuthSlice();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data } = useDataQuestionType({
        page: 1,
        select: (data) => {
            const newData = data.metadata?.map((item) => ({
                title: mapValueQuestionType(item),
                slug: item?.type_slug,
            }));

            return newData;
        },
    });

    const handleLogout = async () => {
        try {
            await AuthService.logout(user.user_id);
            dispatch(authActions.removeAuth());
            dispatch(customizationActions.setOpenNote(false));
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
                                {data?.length ? (
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {data?.map((component) => (
                                            <ListItem
                                                asChild
                                                key={component.title}
                                                className="border"
                                            >
                                                <Link to={`/practice-lc-rc/${component.slug}`}>
                                                    {component.title}
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </ul>
                                ) : (
                                    <ul className="w-[400px] p-4 md:w-[500px] lg:w-[600px] ">
                                        <p className="text-center text-red-500 font-medium">
                                            Hiện tại chưa có luyện tập
                                        </p>
                                    </ul>
                                )}
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
                        {user ? (
                            <MenuHeader />
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

                                <NavigationMenuItem asChild className="relative">
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
