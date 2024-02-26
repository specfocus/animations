import type {Meta, StoryObj} from "@storybook/react";
import {useRef, type FC} from "react";
import useLenisEffect from "../../use-lenis-effect";
import {Container} from "../page.module";
import FunHeader, {type FunHeaderProps} from "./header+fun";

const Page: FC<Omit<FunHeaderProps, 'container'>> = props => {
    useLenisEffect();

    const container = useRef<HTMLDivElement | null>(null);

    return (
        <Container ref={container}>
            <FunHeader {...props} container={container} />
        </Container>
    );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'scroll/header+fun',
    component: Page,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // backgroundColor: {control: 'color'},
    },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        header: ['Parallax', 'Scroll', 'with framer-motion']
    },
};
