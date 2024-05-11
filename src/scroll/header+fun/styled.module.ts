import "@emotion/react";
import styled from "@emotion/styled";

export const Body = styled.div`
    margin-left: 10vw;

    h1 {
        margin: 0px;
        margin-top: 10px;
        font-size: 5vw;
        line-height: 5vw;
        text-transform: uppercase;
    }
`;

export const Images = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    margin-top: 5vh;
`;

export const ImageContainer = styled.div`
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

export const Word = styled.p`
    color: white;
    margin: 0px;
    margin-top: 10px;
    font-size: 3vw;
    text-transform: uppercase;

    span {
        position: relative;
    }
`;