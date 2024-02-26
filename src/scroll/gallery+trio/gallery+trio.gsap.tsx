"use client";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef, type FC, type MutableRefObject} from "react";
import Image from "../../next-image";
import {ImageContainer, Images} from "./styled.module";
// import Image from "next/image";

export interface TrioGalleryProps {
    backgroundColor?: string;
    container: MutableRefObject<HTMLDivElement | null>;
    images: readonly [string, string, string];
    paddingTop?: string;
    minHeight?: string;
}

gsap.registerPlugin(ScrollTrigger);

const TrioGallery: FC<TrioGalleryProps> = (props) => {
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

    return (
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
    );
};

TrioGallery.defaultProps = {
    backgroundColor: '#3f3f3f',
    paddingTop: '900px',
    minHeight: '2400px'
};

export default TrioGallery;
