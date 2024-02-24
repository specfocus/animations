"use client";
import {FC, useEffect, useRef, useState} from "react";
import {Gallery, Spacer, ImageContainer} from "./styled.module";
import Image from "../../next-image";
import Lenis from "@studio-freight/lenis";
import {useTransform, useScroll, motion} from "framer-motion";
import MotionColumn from "./motion-column";

const images = [
    'smooth-parallax-1.jpg',
    'smooth-parallax-2.jpg',
    'smooth-parallax-3.jpg',
    'smooth-parallax-4.jpg',
    'smooth-parallax-5.jpg',
    'smooth-parallax-6.jpg',
    'smooth-parallax-7.jpg',
    'smooth-parallax-8.jpg',
    'smooth-parallax-9.jpg',
    'smooth-parallax-10.jpg',
    'smooth-parallax-11.jpg',
    'smooth-parallax-12.jpg',
];

export default function Home() {

    const gallery = useRef(null);
    const [dimension, setDimension] = useState({width: 0, height: 0});

    const {scrollYProgress} = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    });
    const {height} = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: any) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        const resize = () => {
            setDimension({width: window.innerWidth, height: window.innerHeight});
        };

        window.addEventListener('resize', resize);
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <>
            <Spacer />
            <Gallery ref={gallery}>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
            </Gallery>
            <Spacer />
        </>
    );
}

interface ColumnProps {
    images: string[];
    y: any;
}

const Column: FC<ColumnProps> = ({images, y}) => {
    return (
        <MotionColumn style={{y}}>
            {
                images.map((src, i) => {
                    return (
                        <ImageContainer key={i}>
                            <Image
                                src={`/medias/${src}`}
                                alt="image"
                                fill
                            />
                        </ImageContainer>
                    );
                })
            }
        </MotionColumn>
    );
};
