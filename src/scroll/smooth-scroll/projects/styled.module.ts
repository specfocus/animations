import styled from "@emotion/styled";

export const Projects = styled.div`
    position: relative;
    color: white;
    margin-top: 25vh;
    padding: 10%;
`;

export const ProjectDescription = styled.div`
    display: flex;
    height: 700px;
    justify-content: space-between;
    gap: 5%;
`;

export const ImageContainer = styled.div`
    position: relative;
    height: 100%;
    width: 40%;

    img {
        object-fit: cover;
    }
`;

export const Column = styled.div`
    display: flex;
    height: 100%;
    width: 20%;
    font-size: 1.6vw;

    &:last-of-type {
        align-items: flex-end;
        font-size: 1vw;
    }
`;

export const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 200px;
`;

export const ProjectEl = styled.div`
    width: 100%;
    color: white;
    text-transform: uppercase;
    font-size: 3vw;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: flex-end;

    h2 {
        margin: 0px;
        margin-top: 40px;
        margin-bottom: 20px;
        cursor: default;
    }
`;