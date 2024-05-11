import {type FC} from "react";
import {StyledTextBlock, TextProps} from "./styled.module";
import TextBlockLine from "./text-block-line";

export interface TextBlockProps extends TextProps {
    lines: string[];
}

const TextBlockRush: FC<TextBlockProps> = ({color, lines}) => {
    return (
        <StyledTextBlock color={color}>
            {lines.map((line, index) => (
                <TextBlockLine key={index}>{line}</TextBlockLine>
            ))}
        </StyledTextBlock>
    );
};

TextBlockRush.defaultProps = {
    color: "white"
};

TextBlockRush.displayName = "TextBlockRush";

export default TextBlockRush;