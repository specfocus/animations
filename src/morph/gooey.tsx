"use client";
import styled from "@emotion/styled";
import {animate} from "framer-motion";
import {useEffect, useRef, type FC} from "react";

const GooeyCanvas = styled.svg`
    width: 500px;
    filter: url('#filter');

    path{
        display: none;
    }

    circle{
        fill: black;
    }
`;

interface GooeyProps {
    index: number;
    setIndex: (index: number) => void;
    paths: string[];
}

const Gooey: FC<GooeyProps> = ({paths: numbers, index}) => {

    const circles = useRef<(SVGCircleElement | null)[]>([]);
    const paths = useRef<(SVGPathElement | null)[]>([]);
    const nbOfCircles = 30;
    const radius = 20;

    useEffect(
        () => {
            const length = paths.current[index]?.getTotalLength()!;
            const step = length / nbOfCircles;

            circles.current.forEach((circle, i) => {
                const {x, y} = paths.current[index]?.getPointAtLength(i * step)!;
                animate(
                    circle!,
                    {cx: x, cy: y},
                    {delay: i * 0.025, ease: "easeOut"}
                );
            });
        }, [index]
    );

    return (

        <GooeyCanvas viewBox="0 0 256 256">
            <defs>
                <filter id="filter">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15" result="filter" />
                </filter>
            </defs>
            <g>
                {
                    numbers.map((path, i) => {
                        return <path key={`p_${i}`} ref={ref => paths.current[i] = ref} d={path} />;
                    })
                }
            </g>

            <g>
                {
                    [...Array(nbOfCircles)].map((_, i) => {
                        return <circle key={`c_${i}`} ref={ref => circles.current[i] = ref} cx="128" cy="128" r={radius} />;
                    })
                }
            </g>
        </GooeyCanvas>
    );
};

export default Gooey;
