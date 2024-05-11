import styled from "@emotion/styled";

const HeroBackground = styled.div<{color?: string; height?: string}>`
    background-color: ${props => props.color ?? 'transparent'};
    display: flex;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
`;


export default HeroBackground;