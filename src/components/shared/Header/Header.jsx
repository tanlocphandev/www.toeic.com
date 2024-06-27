import * as React from "react";
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
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

/**
 * Renders the header component with navigation menu and list items.
 *
 * @return {JSX.Element} The JSX element representing the header component.
 */
const Header = () => {
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

          <NavigationMenuList className="w-[500px] h-[100px] flex items-center justify-start">
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="relative font-normal text-[16px] menu-trigger bg-transparent text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus:outline-none data-[active]:menu-trigger data-[active]:left-4 data-[active]:bg-transparent data-[state=open]:bg-transparent after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-4 after:bg-white after:transition-all after:duration-400 after:ease hover:after:left-4">
                Trang chủ
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Logo />
                        <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[16px] font-normal relative menu-trigger bg-transparent text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus:outline-none data-[active]:bg-transparent data-[state=open]:bg-transparent after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-4 after:bg-white after:transition-all after:duration-400 after:ease hover:after:left-4">
                Luyện L & R
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[16px] font-normal relative menu-trigger bg-transparent text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus:outline-none data-[active]:bg-transparent data-[state=open]:bg-transparent after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-4 after:bg-white after:transition-all after:duration-400 after:ease hover:after:left-4">
                Thi Thử
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList className="w-[500px] h-[100px] flex items-center justify-end ">
            <NavigationMenuItem className="mr-5 relative">
              <Link
                to="#"
                className={
                  (navigationMenuTriggerStyle(),
                  `font-normal bg-transparent text-white after:content-empty after:top-[100%] after:absolute after:w-0 after:h-0.5 after:left-0 after:bg-white after:transition-all after:duration-400 after:ease hover:after:w-full hover:after:left-0`)
                }
              >
                Kết quả luyện thi
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="mr-5 relative">
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

Header.displayName = "Header";

export default Header;
