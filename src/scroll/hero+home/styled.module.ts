import styled from "@emotion/styled";
import {motion} from "framer-motion";

export const HomeHeader: React.FC = styled(motion.div)`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const BackgroundImageStyled: React.FC<{ height: string }> = styled(motion.div)<{ height: string }>`
    width: 100%;
    height: ${props => props.height};
    position: absolute;
    filter: brightness(60%);
    img {
        object-fit: cover;
    }
`;

export const BackgroundImage: React.FC<{height: string}> = styled(motion.div)<{height: string}>`
    width: 100%;
    height: ${props => props.height};
    position: absolute;
    filter: brightness(60%);

    img {
        object-fit: cover;
    }
`;

export const Intro: React.FC = styled(motion.div)`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 35vh;
`;

export const IntroHeading: React.FC = styled(motion.h1)`
    color: white;
    font-size: 7vw;
    z-index: 3;
    text-align: center;
    white-space: nowrap;
`;

export const IntroImage: React.FC = styled(motion.div)`
    filter: brightness(70%);
    width: 350px;
    height: 475px;
    position: absolute;

    img {
        object-fit: cover;
        object-position: top;
    }
`;