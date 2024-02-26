import styled from '@emotion/styled';
import {motion} from 'framer-motion';

export const Container = styled.div`
  height: 300vh;
  position: relative;
`;

export const Sticky = styled.div`
  position: sticky;
  overflow: hidden;
  top: 0;
  height: 100vh;
`;

export const El = styled(motion.div)`
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        position: relative;
        width: 25vw;
        height: 25vh;
        img{
            object-fit: cover;
        }
    }
    &:nth-of-type(2){
        > div {
            top: -30vh;
            left: 5vw;
            width: 35vw;
            height: 30vh;
        }
    }
    &:nth-of-type(3){
        > div {
            top: -10vh;
            left: -25vw;
            width: 20vw;
            height: 45vh;
        }
    }
    &:nth-of-type(4){
        > div {
            left: 27.5vw;
            width: 25vw;
            height: 25vh;
        }
    }
    &:nth-of-type(5){
        > div {
            top: 27.5vh;
            left: 5vw;
            width: 20vw;
            height: 25vh;
        }
    }
    &:nth-of-type(6){
        > div {
            top: 27.5vh;
            left: -22.5vw;
            width: 30vw;
            height: 25vh;
        }
    }
    &:nth-of-type(7){
        > div {
            top: 22.5vh;
            left: 25vw;
            width: 15vw;
            height: 15vh;
    }
`;

export const ImageContainer = styled.div <{nth: number;}>`
    position: relative;
    width: 25vw;
    height: 25vh;

    ${({nth}) => {
        switch (nth) {
            case 2:
                return `
                    .imageContainer {
                        top: -30vh;
                        left: 5vw;
                        width: 35vw;
                        height: 30vh;
                    }`;
            case 3:
                return `
                    .imageContainer {
                        top: -10vh;
                        left: -25vw;
                        width: 20vw;
                        height: 45vh;
                    }`;
            case 4:
                return `
                    .imageContainer{
                        left: 27.5vw;
                        width: 25vw;
                        height: 25vh;
                    }`;
            case 5:
                return `
                    .imageContainer{
                        top: 27.5vh;
                        left: 5vw;
                        width: 20vw;
                        height: 25vh;
                    }`;
            case 6:
                return `
                    .imageContainer{
                        top: 27.5vh;
                        left: -22.5vw;
                        width: 30vw;
                        height: 25vh;
                    }`;
            case 7:
                return `
                    .imageContainer{
                        top: 22.5vh;
                        left: 25vw;
                        width: 15vw;
                        height: 15vh;
                    }`;
        }
    }}
`;
