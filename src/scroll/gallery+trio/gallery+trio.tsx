"use client";
import styled from "@emotion/styled";
import {motion, useScroll, useTransform} from "framer-motion";
import React, {type PropsWithChildren, type FC, type MutableRefObject} from "react";
import Image from "../../next-image";
import {Images} from "./styled.module";
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

export interface TrioGalleryProps {
    backgroundColor?: string;
    container: MutableRefObject<HTMLDivElement | null>;
    images: readonly [string, string, string];
    paddingTop?: string;
    minHeight?: string;
}

const TrioGallery: FC<TrioGalleryProps> = (props) => {
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

    return (
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
    );
};

TrioGallery.defaultProps = {
    backgroundColor: '#3f3f3f',
    paddingTop: '900px',
    minHeight: '2400px'
};

export default TrioGallery;