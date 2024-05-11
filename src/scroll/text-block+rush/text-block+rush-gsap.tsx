import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef, type FC, type PropsWithChildren} from "react";
import {StyledTextBlock, StyledTextBlockLine, TextProps} from "./styled.module";

export interface TextBlockProps extends TextProps {
    lines: string[];
}

export const TextBlockRushLine: FC<PropsWithChildren> = ({children}) => {
    const text = useRef(null);

    useLayoutEffect(
        () => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.from(text.current, {
                scrollTrigger: {
                    trigger: text.current,
                    scrub: true,
                    start: "0px bottom",
                    end: "bottom+=400px bottom",
                },
                opacity: 0,
                left: "-200px",
                ease: "power3.Out"
            })
        },
        []
    );

    return (
        <StyledTextBlockLine ref={text}>{children}</StyledTextBlockLine>
    );
};

const TextBlockRush: FC<TextBlockProps> = ({color, lines}) => {

    return (
        <StyledTextBlock color={color}>
            {
                lines.map((line, index) => {
                    return <TextBlockRushLine key={index}>{line}</TextBlockRushLine>
                })
            }
        </StyledTextBlock>
    );
};

TextBlockRush.defaultProps = {
    color: "white"
};

TextBlockRush.displayName = "TextBlockRush";

export default TextBlockRush;