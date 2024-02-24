"use client";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {FC, useLayoutEffect, useRef} from "react";
import Image from "../../next-image";
import Picture1 from "../../../public/medias/parallax-scroll-1.jpg";
import Picture2 from "../../../public/medias/parallax-scroll-2.jpg";
import Picture3 from "../../../public/medias/parallax-scroll-3.jpg";
import {Body, Container, ImageContainer, Images, Word} from "./styled.module";
// import Image from "next/image";

interface DocumentProps {
    backgroundColor?: string;
    paddingTop?: string;
    minHeight?: string;
}

gsap.registerPlugin(ScrollTrigger);
const word = "with gsap";

const Document: FC<DocumentProps> = (props) => {
    const container = useRef<any>(null);
    const images = [Picture1, Picture2, Picture3];
    const lettersRef = useRef<any[]>([]);
    const imagesRef = useRef<any[]>([]);
    const title1 = useRef<any>(null);
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
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
        <Container {...props} ref={container}>
            <Body>
                <h1 ref={title1}>Parallax</h1>
                <h1 >Scroll</h1>
                <Word>
                    {
                        word.split('').map((letter, i) => {
                            return <span key={`l_${i}`} ref={el => lettersRef.current[i] = el}>{letter}</span>;
                        })
                    }
                </Word>
            </Body>
            <Images>
                {
                    images.map((image, i) => {
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
        </Container>
    );
};

Document.defaultProps = {
    backgroundColor: '#3f3f3f',
    paddingTop: '900px',
    minHeight: '2400px'
};

export default Document;
