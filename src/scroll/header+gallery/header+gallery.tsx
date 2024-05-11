"use client";
import "@emotion/react";
import styled from "@emotion/styled";
import {motion, useScroll, useTransform} from "framer-motion";
import {FC, MutableRefObject, PropsWithChildren} from "react";
import Image from "../../next-image";
import {Body, Images, Word} from "./styled.module";
// import Image from "next/image";

export const ImageContainer: any = styled(motion.div)<PropsWithChildren>`
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

export interface HeaderAndGalleryProps {
    container: MutableRefObject<HTMLDivElement | null>;
    backgroundColor?: string;
    header: readonly [string, string, string];
    images: readonly [string, string, string];
    paddingTop?: string;
    minHeight?: string;
}

const HeadersAndGallery: FC<HeaderAndGalleryProps> = (props) => {
    const {scrollYProgress} = useScroll({
        target: props.container,
        offset: ['start end', 'end start']
    });

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const y = [
        0,
        lg,
        md,
        sm
    ];

    const [primary, secondary, tertiary] = props.header;

    return (
        <>
            <Body>
                <motion.h1 style={{y: sm}}>{primary}</motion.h1>
                <h1>{secondary}</h1>
                <Word>
                    {
                        tertiary.split('').map((letter, i) => {
                            const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25]);
                            return <motion.span style={{top: y}} key={`l_${i}`} >{letter}</motion.span>;
                        })
                    }
                </Word>
            </Body>
            <Images>
                {
                    props.images.map((src, i) => {
                        return (
                            <ImageContainer style={{y: y[i]}} key={`i_${i}`}>
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
        </>
    );
};

HeadersAndGallery.defaultProps = {
    backgroundColor: '#3f3f3f',
    paddingTop: '900px',
    minHeight: '2400px'
};

export default HeadersAndGallery;