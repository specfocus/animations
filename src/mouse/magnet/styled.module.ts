import styled from "@emotion/styled";

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: #0f0f0f;
`;

export const Section = styled.div`
    display: flex;
    svg {
        height: 50px;
        padding: 50px;
        fill: #c8bdb0;
        transition: fill 0.2s;
        cursor: pointer;
        &:hover{
            fill: #ec4e39;
        }
    }
`;