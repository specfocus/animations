import styled from "@emotion/styled";
import {motion, useAnimation} from "framer-motion";
import React, {type FC} from "react";
import {useInView} from "react-intersection-observer";

export interface BackgroundImageProps {
    height: string;
    src: string;
}

const BackgroundImageStyled = styled(motion.div) <{height: string;}>`
  width: 100%;
  height: ${props => props.height};
  position: absolute;
  filter: brightness(60%);
  img {
    object-fit: cover;
  }
`;

const BackgroundImage: FC<BackgroundImageProps> = ({height, src}) => {
    const controls = useAnimation();
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                transition: {duration: 1},
            });
        } else {
            controls.start({opacity: 0});
        }
    }, [controls, inView]);

    return (
        <BackgroundImageStyled
            height={height}
            ref={ref}
            initial={{opacity: 0}}
            animate={controls}
            style={{backgroundImage: `url(${src})`}}
        />
    );
};

export default BackgroundImage;