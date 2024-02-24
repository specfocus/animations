"use client";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import {useEffect, useRef, type FC} from "react";
import {Main, MainImage, Slider, SliderContainer} from "./styled.module";
// import Image from "next/image";

const Marquee: FC = () => {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
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
                src="/medias/background.jpg"
                fill={true}
                alt="background"
            />
            <SliderContainer>
                <Slider ref={slider}>
                    <p ref={firstText}>Freelance Developer -</p>
                    <p ref={secondText}>Freelance Developer -</p>
                </Slider>
            </SliderContainer>
        </Main>
    );
};

export default Marquee;
