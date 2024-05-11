"use client";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {FC, MutableRefObject, useLayoutEffect, useRef} from "react";
import Image from "../../next-image";
import {Body, ImageContainer, Images, Word} from "./styled.module";
// import Image from "next/image";

export interface HeaderAndGalleryProps {
    container: MutableRefObject<HTMLDivElement | null>;
    header: readonly [string, string, string];
    images: string[];
    paddingTop?: string;
    minHeight?: string;
}

gsap.registerPlugin(ScrollTrigger);

const HeaderAndGallery: FC<HeaderAndGalleryProps> = (props) => {
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
        <>
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
            <Images>
                {
                    props.images.map((image, i) => {
                        return (
                            <ImageContainer key={`i_${i}`} ref={el => imagesRef.current[i] = el}>
                                <Image
                                    src={image}
                                    placeholder="blur"
                                    alt="image"
                                    fill
                                />
                            </ImageContainer>
                        );
                    })
                }
            </Images>
        </>
    );
};

HeaderAndGallery.defaultProps = {
    paddingTop: '900px',
    minHeight: '2400px'
};

export default HeaderAndGallery;
