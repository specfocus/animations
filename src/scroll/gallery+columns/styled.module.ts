import styled from "@emotion/styled";

export const Gallery = styled.div`
    height: 175vh;
    background: rgb(45, 45, 45);
    position: relative;
    display: flex;
    gap: 2vw;
    padding: 2vw;
    box-sizing: border-box;
    overflow: hidden;
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    border-radius: 1vw;
    overflow: hidden;

    img {
        object-fit: cover;
    }
`;

export const Spacer = styled.div`
    height: 100vh;
`;
