import {type FC, type PropsWithChildren} from "react";
import {useInView} from "react-intersection-observer";
import {StyledTextBlockLine} from "./styled.module";

interface TextBlockRushLineProps {
}

export const TextBlockLine: FC<PropsWithChildren<TextBlockRushLineProps>> = ({children}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <StyledTextBlockLine
            ref={ref}
            initial={{opacity: 0, x: -200}}
            animate={{opacity: inView ? 1 : 0, x: inView ? 0 : -200}}
            transition={{duration: 1, ease: "easeOut"}}
        >
            {children}
        </StyledTextBlockLine>
    );
};

export default TextBlockLine;