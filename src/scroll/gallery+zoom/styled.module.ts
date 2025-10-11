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

export const El = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    will-change: transform;
    
    > div > div {
        position: relative;
        width: 25vw;
        height: 25vh;
        img{
            object-fit: cover;
        }
    }
    &:nth-of-type(2){
        > div > div {
            top: -30vh;
            left: 5vw;
            width: 35vw;
            height: 30vh;
        }
    }
    &:nth-of-type(3){
        > div > div {
            top: -10vh;
            left: -25vw;
            width: 20vw;
            height: 45vh;
        }
    }
    &:nth-of-type(4){
        > div > div {
            left: 27.5vw;
            width: 25vw;
            height: 25vh;
        }
    }
    &:nth-of-type(5){
        > div > div {
            top: 27.5vh;
            left: 5vw;
            width: 20vw;
            height: 25vh;
        }
    }
    &:nth-of-type(6){
        > div > div {
            top: 27.5vh;
            left: -22.5vw;
            width: 30vw;
            height: 25vh;
        }
    }
    &:nth-of-type(7){
        > div > div {
            top: 22.5vh;
            left: 25vw;
            width: 15vw;
            height: 15vh;
        }
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 25vw;
    height: 25vh;
`;
