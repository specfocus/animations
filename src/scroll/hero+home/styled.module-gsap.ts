import styled from "@emotion/styled";

export const HomeHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BackgroundImage = styled.div<{height: string}>`
  width: 100%;
  height: ${props => props.height};
  position: absolute;
  filter: brightness(60%);

  img {
    object-fit: cover;
  }
`;

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 35vh;
`;

export const IntroHeading = styled.h1`
  color: white;
  font-size: 7vw;
  z-index: 3;
  text-align: center;
  white-space: nowrap;
`;

export const IntroImage = styled.div`
  filter: brightness(70%);
  width: 350px;
  height: 475px;
  position: absolute;

  img {
    object-fit: cover;
    object-position: top;
  }
`;