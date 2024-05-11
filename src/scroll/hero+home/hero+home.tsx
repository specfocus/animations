import styled from "@emotion/styled";
import {motion} from "framer-motion";
import BackgroundImage from "./background-image";
import IntroImage from "./intro-image";

interface HomeHeroProps {
    backgroundImage: string;
    foregroundImage: string;
    foregroundSpeed: number;
    headingText: string;
    headingSpeed: number;
    height: string;
}

// Assuming HomeHeader, Intro, and IntroHeading are styled as previously defined or similar
const HomeHeader = styled(motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Intro = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 35vh;
`;

const IntroHeading = styled(motion.h1)`
  color: white;
  font-size: 7vw;
  z-index: 3;
  text-align: center;
  white-space: nowrap;
`;

interface HomeHeroProps {
  backgroundImage: string;
  foregroundImage: string;
  headingText: string;
}

const HomeHero: React.FC<HomeHeroProps> = ({ backgroundImage, foregroundImage, headingText }) => {
  return (
    <HomeHeader>
      <BackgroundImage src={backgroundImage} height="100vh" />
      <Intro>
        <IntroImage src={foregroundImage} />
        <IntroHeading>{headingText}</IntroHeading>
      </Intro>
    </HomeHeader>
  );
};

HomeHero.displayName = "HomeHero";

export default HomeHero;
