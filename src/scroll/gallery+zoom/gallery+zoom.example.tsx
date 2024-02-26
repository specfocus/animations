"use client";
import styled from "@emotion/styled";
import {FC, PropsWithChildren} from "react";
import Picture1 from "/medias/zoom-parallax-1.jpg";
import Picture2 from "/medias/zoom-parallax-2.jpg";
import Picture3 from "/medias/zoom-parallax-3.jpg";
import Picture4 from "/medias/zoom-parallax-4.jpg";
import Picture5 from "/medias/zoom-parallax-5.jpg";
import Picture6 from "/medias/zoom-parallax-6.jpg";
import Picture7 from "/medias/zoom-parallax-7.jpg";
import useLenisEffect from "../../use-lenis-effect";
import GalleryZoom from "./gallery+zoom";

const images = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7];

const Main = styled.main<SmoothParallaxProps>`
    background-color: ${({backgroundColor}) => backgroundColor};
    padding-top: 500px;
    padding-bottom: 2400px;
`;

interface SmoothParallaxProps {
    backgroundColor?: string;
}

const SmoothParallax: FC<PropsWithChildren<SmoothParallaxProps>> = ({backgroundColor}) => {

    useLenisEffect();

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