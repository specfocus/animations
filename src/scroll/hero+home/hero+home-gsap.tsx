"use client";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef, type FC} from "react";
import Image from "../../next-image";
import {BackgroundImage, HomeHeader, Intro, IntroHeading, IntroImage} from "./styled.module-gsap";
// import Image from "next/image";

interface HomeHeroProps {
    backgroundImage: string;
    foregroundImage: string;
    foregroundSpeed: number;
    headingText: string;
    headingSpeed: number;
    height: string;
}

const HomeHero: FC<HomeHeroProps> = ({ backgroundImage, foregroundImage, foregroundSpeed, headingSpeed, headingText, height}) => {

    const background = useRef<any>(null);
    const foreground = useRef<any>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        });

        timeline
            .from(background.current, {clipPath: `inset(15%)`})
            .to(foreground.current, {height: "200px"}, 0);
    }, []);

    return (
        <HomeHeader>
            <BackgroundImage height={height} ref={background}>
                <Image
                    src={backgroundImage}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </BackgroundImage>
            <Intro>
                <IntroImage ref={foreground} data-scroll data-scroll-speed={foregroundSpeed}>
                    <Image
                        src={foregroundImage}
                        alt="intro image"
                        fill={true}
                        priority={true}
                    />
                </IntroImage>
                <IntroHeading data-scroll data-scroll-speed={headingSpeed}>{headingText}</IntroHeading>
            </Intro>
        </HomeHeader>
    );
};

HomeHero.displayName = "HomeHero";

HomeHero.defaultProps = {
    foregroundSpeed: 0.3,
    height: "140vh",
    headingSpeed: 0.7
};

export default HomeHero;