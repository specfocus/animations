"use client";
import styled from "@emotion/styled";
import {motion, useScroll, useTransform} from "framer-motion";
import {FC, useRef} from "react";
import Picture1 from "../../public/medias/parallax-scroll-4.jpg";
import Picture2 from "../../public/medias/parallax-scroll-5.jpg";
import Picture3 from "../../public/medias/parallax-scroll-6.jpg";
import Image from "../../next-image";
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

export const ImageContainer = styled(motion.div)`
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

const word = "with framer-motion";

const Document: FC<DocumentProps> = (props) => {
    const container = useRef<any>(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        {
            src: Picture1,
            y: 0
        },
        {
            src: Picture2,
            y: lg
        },
        {
            src: Picture3,
            y: md
        }
    ];

    return (
        <Container {...props} ref={container}>
            <Body>
                <motion.h1 style={{y: sm}}>Parallax</motion.h1>
                <h1>Scroll</h1>
                <Word>
                    {
                        word.split('').map((letter, i) => {
                            const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25]);
                            return <motion.span style={{top: y}} key={`l_${i}`} >{letter}</motion.span>;
                        })
                    }
                </Word>
            </Body>
            <Images>
                {
                    images.map(({src, y}, i) => {
                        return (
                            <ImageContainer style={{y}} key={`i_${i}`}>
                                <Image
                                    src={src}
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