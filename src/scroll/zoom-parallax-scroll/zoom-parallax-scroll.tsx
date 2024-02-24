"use client";
import ZoomParallax from "./zoom-parallax";
import {FC, PropsWithChildren, useEffect} from "react";
import Lenis from "@studio-freight/lenis";
import styled from "@emotion/styled";

const Main = styled.main<SmoothParallaxProps>`
    background-color: ${({backgroundColor}) => backgroundColor};
    padding-top: 500px;
    padding-bottom: 2400px;
`;

interface SmoothParallaxProps {
    backgroundColor?: string;
}

const SmoothParallax: FC<PropsWithChildren<SmoothParallaxProps>> = ({ backgroundColor }) => {

    useEffect(
        () => {
            const lenis = new Lenis();

            function raf(time: any) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
        },
        []
    );

    return (
        <Main backgroundColor={backgroundColor}>
            <ZoomParallax />
        </Main>
    );
};

SmoothParallax.defaultProps = {
    backgroundColor: '#3f3f3f',
};

export default SmoothParallax;