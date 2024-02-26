"use client";
import styled from "@emotion/styled";
import Lenis from "@studio-freight/lenis";
import {FC, PropsWithChildren, useEffect} from "react";
import Picture1 from "../../../public/medias/zoom-parallax-1.jpg";
import Picture2 from "../../../public/medias/zoom-parallax-2.jpg";
import Picture3 from "../../../public/medias/zoom-parallax-3.jpg";
import Picture4 from "../../../public/medias/zoom-parallax-4.jpg";
import Picture5 from "../../../public/medias/zoom-parallax-5.jpg";
import Picture6 from "../../../public/medias/zoom-parallax-6.jpg";
import Picture7 from "../../../public/medias/zoom-parallax-7.jpg";
import GalleryZoom from "./gallery-zoom";

const images = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7];

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
            <GalleryZoom images={images} />
        </Main>
    );
};

SmoothParallax.defaultProps = {
    backgroundColor: '#3f3f3f',
};

export default SmoothParallax;