import "@emotion/react";
import styled from "@emotion/styled";
import {motion} from "framer-motion";
import React, {type PropsWithChildren} from "react";

export interface TextProps {
    color: string;
}

// Using motion.div to make the component animatable with Framer Motion
export const StyledTextBlock: React.FC<PropsWithChildren<TextProps>> = styled(motion.div)<PropsWithChildren<TextProps>>`
  position: relative;
  color: ${props => props.color};
  font-size: 3vw;
  text-transform: uppercase;
  margin-top: 10vw;
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
`;

// Similarly, making StyledTextBlockLine a motion component
export const StyledTextBlockLine: any = styled(motion.p)<PropsWithChildren>`
  margin: 0px;
  text-align: right;
  position: relative;
`;