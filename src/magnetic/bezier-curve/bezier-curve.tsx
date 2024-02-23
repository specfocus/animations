"use client";
import {useRef, useEffect} from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    height: 1px;
    margin-bottom: 20px;
    width: 100%;
    position: relative;
`;

const Line = styled.svg`
    width: 100%;
    height: 500px;
    position: absolute;
    top: -250px;

    path {
      fill: none;
    }
`;

const Magnet = styled.div`
    height: 40px;
    width: 100%;
    position: relative;
    top: -20px;
    z-index: 1;

    &:hover {
      height: 500px;
      top: -250px;
    }
`;

interface BezierCurveProps {
    color?: string;
    width?: number;
}

export default function BezierCurve({ color, width }: BezierCurveProps) {
    const path = useRef<SVGPathElement>(null);
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId: any = null;

    useEffect(() => {
        setPath(progress);
    }, []);

    const setPath = (progress: any) => {
        const width = window.innerWidth * 0.7;
        path.current?.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`);
    };

    const lerp = (x: any, y: any, a: any) => x * (1 - a) + y * a;

    const manageMouseEnter = () => {
        if (reqId) {
            cancelAnimationFrame(reqId);
            resetAnimation();
        }
    };

    const manageMouseMove = (e: any) => {
        const {movementY, clientX} = e;
        const pathBound = path.current?.getBoundingClientRect();
        x = (clientX - (pathBound?.left ?? 0)) / (pathBound?.width ?? 1);
        progress += movementY;
        setPath(progress);
    };

    const manageMouseLeave = () => {
        animateOut();
    };

    const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        progress = lerp(progress, 0, 0.025);
        time += 0.2;
        setPath(newProgress);
        if (Math.abs(progress) > 0.75) {
            reqId = requestAnimationFrame(animateOut);
        }
        else {
            resetAnimation();
        }
    };

    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    };

    console.log("color", color);
    console.log("width", width);

    return (
        <Container>
            <Magnet onMouseEnter={() => {manageMouseEnter();}} onMouseMove={(e) => {manageMouseMove(e);}} onMouseLeave={() => {manageMouseLeave();}}></Magnet>
            <Line>
                <path stroke={color} strokeWidth={width} ref={path} />
            </Line>
        </Container>
    );
}

BezierCurve.defaultProps = {
    color: "black",
    width: 1
};
