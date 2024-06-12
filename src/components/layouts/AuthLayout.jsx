import Container from "@/components/shared/Container";
import LogoText from "@/components/shared/LogoText";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Flex from "@/components/ui/flex";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import Autoplay from "embla-carousel-autoplay";
import { useLayoutEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

const bannerOptions = [
    { img: "/banner/banner-1.jpg", text: "Học Toeic để nâng cao cơ hội việc làm" },
    { img: "/banner/banner-2.jpg", text: "Học Toeic để phát triển bản thân nhiều hơn" },
];

/**
 * Renders the authentication layout component.
 *
 * @return {JSX.Element} The rendered authentication layout component.
 */
const AuthLayout = () => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    const cardClassName =
        "w-full h-full space-y-1.5 p-6 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat";

    useLayoutEffect(() => {
        document.body.classList = "bg-gray-100";

        return () => {
            document.body.classList = "";
        };
    }, []);

    return (
        <Container className={"min-h-[100vh] flex-center"} data-aos="fade-up-right">
            <Card className={cardClassName}>
                <CardContent className="pt-6">
                    <Flex className={"justify-between py-2 items-center"}>
                        <div className="w-1/2">
                            <LogoText className="text-center" />

                            <Outlet />
                        </div>

                        <div className="w-1/2 px-20">
                            <Carousel
                                plugins={[plugin.current]}
                                className="w-full max-w-xs"
                                onMouseEnter={plugin.current.stop}
                                onMouseLeave={plugin.current.reset}
                            >
                                <CarouselContent>
                                    {bannerOptions.map((banner, index) => (
                                        <CarouselItem key={index}>
                                            <div className="py-7 px-4">
                                                <Card>
                                                    <CardContent>
                                                        <div className="flex justify-center items-center my-8 w-full">
                                                            <img
                                                                src={banner.img}
                                                                alt="Banner"
                                                                className="h-20 w-24 object-cover block"
                                                            />
                                                        </div>

                                                        <TypographyH1
                                                            text={"Toeic"}
                                                            className="text-center mb-8"
                                                        />

                                                        <TypographyP
                                                            className="mt-4 mb-7 text-center text-gray-500"
                                                            text={banner.text}
                                                        />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </Flex>
                </CardContent>
            </Card>
        </Container>
    );
};

export default AuthLayout;
