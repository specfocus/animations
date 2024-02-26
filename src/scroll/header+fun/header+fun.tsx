"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import {type FC, type MutableRefObject} from "react";
import {Body, Word} from "./styled.module";
// import Image from "next/image";

export interface FunHeaderProps {
    backgroundColor?: string;
    container: MutableRefObject<HTMLDivElement | null>;
    header: readonly [string, string, string];
    paddingTop?: string;
    minHeight?: string;
}

const FunHeader: FC<FunHeaderProps> = (props) => {
    const {scrollYProgress} = useScroll({
        target: props.container,
        offset: ['start end', 'end start']
    });

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const [primary, secondary, tertiary] = props.header;

    return (
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
    );
};

FunHeader.defaultProps = {
    backgroundColor: '#3f3f3f',
    paddingTop: '900px',
    minHeight: '2400px'
};

export default FunHeader;