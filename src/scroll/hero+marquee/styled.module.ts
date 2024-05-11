import "@emotion/react";
import styled from "@emotion/styled";
import Image from "../../next-image";

export const Main = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    overflow: hidden;
`;

export const MainImage = styled(Image)`
    object-fit: cover;
`;

export const SliderContainer = styled.div`
    position: absolute;
    top: calc(100vh - 350px);
`;

export const Slider = styled.div`
    position: relative;
    white-space: nowrap;
`;

export const SliderParagraph = styled.p`
    position: relative;
    margin: 0px;
    color: white;
    font-size: 230px;
    font-weight: 500;
    padding-right: 50px;

    &:nth-of-type(2) {
        position: absolute;
        left: 100%;
        top: 0;
    }
`;