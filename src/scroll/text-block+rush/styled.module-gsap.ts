import styled from "@emotion/styled";

export interface TextProps {
    color: string;
}

export const StyledTextBlock = styled.div<TextProps>`
  position: relative;
  color: ${props => props.color};
  font-size: 3vw;
  text-transform: uppercase;
  margin-top: 10vw;
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
`;

export const StyledTextBlockLine = styled.p`
  margin: 0px;
  text-align: right;
  position: relative;
`;