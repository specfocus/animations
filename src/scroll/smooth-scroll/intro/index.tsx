"use client";
import React, { useLayoutEffect, useRef } from "react"
import {Intro, BackgroundImage, HomeHeader, IntroHeading, IntroImage} from "./styled.module";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "../../../next-image";
// import Image from "next/image";

export default function Index() {

    const background = useRef<any>(null);
    const introImage = useRef<any>(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])

    return (
        <HomeHeader>
            <BackgroundImage ref={background}>
                <Image 
                    src={'/medias/background.jpeg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </BackgroundImage>
            <Intro>
                    <IntroImage ref={introImage} data-scroll data-scroll-speed="0.3">
                        <Image
                            src={'/medias/intro.png'}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                        />
                    </IntroImage>
                    <IntroHeading data-scroll data-scroll-speed="0.7">SMOOTH SCROLL</IntroHeading>
             </Intro>
        </HomeHeader>
    );
};
