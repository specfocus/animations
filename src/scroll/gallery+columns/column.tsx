import styled from "@emotion/styled";
import {motion} from "framer-motion";
import {type FC} from "react";
import Image from "../../next-image";
import {ImageContainer} from "./styled.module";

const MotionColumn = styled(motion.div)`
    position: relative;
    height: 100%;
    width: 25%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 2vw;

    &:nth-of-type(1) {
        top: -45%;
    }
    &:nth-of-type(2) {
        top: -95%;
    }
    &:nth-of-type(3) {
        top: -45%;
    }
    &:nth-of-type(4) {
        top: -75%;
    }
`;

export interface ColumnProps {
    images: string[];
    y: any;
}

const Column: FC<ColumnProps> = ({images, y}) => {
    return (
        <MotionColumn style={{y}}>
            {
                images.map((src, i) => {
                    return (
                        <ImageContainer key={i}>
                            <Image
                                src={src}
                                alt="image"
                                fill
                            />
                        </ImageContainer>
                    );
                })
            }
        </MotionColumn>
    );
};


export default Column;