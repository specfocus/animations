"use client";
import styled from "@emotion/styled";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {FC, useLayoutEffect, useRef} from "react";
import Picture1 from "../../public/medias/parallax-scroll-1.jpg";
import Picture2 from "../../public/medias/parallax-scroll-2.jpg";
import Picture3 from "../../public/medias/parallax-scroll-3.jpg";
import Image from "../NextImage";
// import Image from "next/image";

interface DocumentProps {
    backgroundColor?: string;
    paddingTop?: string;
    minHeight?: string;
}

export const Container = styled.div<DocumentProps>`
    background-color: ${props => props.backgroundColor || 'black'};
    padding-top: ${props => props.paddingTop || '0px'};
    min-height: ${props => props.minHeight || '100vh'};
`;

export const Body = styled.div`
    margin-left: 10vw;

    h1 {
        margin: 0px;
        margin-top: 10px;
        font-size: 5vw;
        line-height: 5vw;
        text-transform: uppercase;
    }
`;

const Word = styled.p`
    color: white;
    margin: 0px;
    margin-top: 10px;
    font-size: 3vw;
    text-transform: uppercase;

    span {
        position: relative;
    }
`;

export const Images = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    margin-top: 5vh;
`;

export const ImageContainer = styled.div`
    position: absolute;
    img {
        object-fit: cover;
    }

    &:nth-of-type(1) {
        height: 60vh;
        width: 50vh;
        z-index: 1;
    }

    &:nth-of-type(2) {
        left: 55vw;
        top: 15vh;
        height: 40vh;
        width: 30vh;
        z-index: 2;
    }

    &:nth-of-type(3) {
        left: 27.5vw;
        top: 40vh;
        height: 25vh;
        width: 20vh;
        z-index: 3;
    }
`;

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
    paddingTop: '300px',
    minHeight: '2400px'
};

export default Document;
