import "@emotion/react";
import styled from "@emotion/styled";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

// Assuming IntroImage is styled similarly to BackgroundImage
export const IntroImageStyled: any = styled(motion.div)`
  filter: brightness(70%);
  width: 350px; // or adapt to your design
  height: 475px; // or adapt to your design
  position: absolute;
  img {
    object-fit: cover;
    object-position: top;
  }
`;

const IntroImage: React.FC<{src: string;}> = ({src}) => {
    const controls = useAnimation();
    const {ref, inView} = useInView({
        threshold: 0.5, // Customize the threshold as needed
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: {duration: 1, ease: "easeOut"},
            });
        } else {
            controls.start({x: '-100vw', opacity: 0});
        }
    }, [controls, inView]);

    return (
        <IntroImageStyled
            ref={ref}
            initial={{x: '-100vw', opacity: 0}}
            animate={controls}
            style={{backgroundImage: `url(${src})`}}
        />
    );
};


export default IntroImage;