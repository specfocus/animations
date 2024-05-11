"use client";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef, type FC, type MutableRefObject} from "react";
import {Body, Word} from "./styled.module";

export interface FunHeaderProps {
    backgroundColor?: string;
    container: MutableRefObject<HTMLDivElement | null>;
    header: readonly [string, string, string];
    paddingTop?: string;
    minHeight?: string;
}

gsap.registerPlugin(ScrollTrigger);

const FunHeader: FC<FunHeaderProps> = (props) => {
    const lettersRef = useRef<any[]>([]);
    const imagesRef = useRef<any[]>([]);
    const title1 = useRef<any>(null);
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: props.container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            })
                .to(title1.current, {y: -50}, 0)
                .to(imagesRef.current[1], {y: -150}, 0)
                .to(imagesRef.current[2], {y: -255}, 0);
            lettersRef.current.forEach((letter, i) => {
                tl.to(letter, {
                    top: Math.floor(Math.random() * -75) - 25,
                }, 0);
            });

        });
        return () => context.revert();
    }, []);

    const [primary, secondary, tertiary] = props.header;

    return (
        <Body>
            <h1 ref={title1}>{primary}</h1>
            <h1 >{secondary}</h1>
            <Word>
                {
                    tertiary.split('').map((letter, i) => {
                        return <span key={`l_${i}`} ref={el => lettersRef.current[i] = el}>{letter}</span>;
                    })
                }
            </Word>
        </Body>
    );
};

FunHeader.defaultProps = {
    backgroundColor: '#3f3f3f',
    paddingTop: '900px',
    minHeight: '2400px'
};

export default FunHeader;
