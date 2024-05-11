import {RefObject, useEffect} from "react";

interface UseGsapScrollOptions {
    animate: () => void;
    trigger: string;
    start: string;
    end: string;
    onUpdate: (e: any) => void;
    ref: RefObject<HTMLElement>;
}

const useGsapScroll = ({animate, ref}: UseGsapScrollOptions) => {
    let direction = -1;

    useEffect(
        () => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(ref.current, {
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
        },
        []
    );

    return direction;
};

export default useGsapScroll;