"use client";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import {useEffect, useRef, type FC} from "react";
import {Main, MainImage, Slider, SliderContainer, SliderParagraph} from "./styled.module";
// import Image from "next/image";

interface MarqueeHeroProps {
    image: string;
    text: string;
}

const MarqueeHero: FC<MarqueeHeroProps> = ({image, text}) => {

    const firstText = useRef<HTMLParagraphElement | null>(null);
    const secondText = useRef<HTMLParagraphElement | null>(null);
    const slider = useRef<HTMLDivElement | null>(null);
    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        });
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent});
        gsap.set(secondText.current, {xPercent: xPercent});
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    };

    return (
        <Main>
            <MainImage
                src={image}
                fill={true}
                alt="background"
            />
            <SliderContainer>
                <Slider ref={slider}>
                    <SliderParagraph ref={firstText}>{text}</SliderParagraph>
                    <SliderParagraph ref={secondText}>{text}</SliderParagraph>
                </Slider>
            </SliderContainer>
        </Main>
    );
};

export default MarqueeHero;
