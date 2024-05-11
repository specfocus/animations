import type {Meta, StoryObj} from "@storybook/react";
import {useEffect, type FC} from "react";
import TextBlock, {TextBlockProps} from "./text-block+rush";

import HeroBackground from "../../static/hero-background";

const Main: FC<TextBlockProps> = ({color, lines}) => {
    useEffect(
        () => {
            (
                async () => {
                    const LocomotiveScroll = (await import('locomotive-scroll')).default;
                    const locomotiveScroll = new LocomotiveScroll();
                }
            )();
        },
        []
    );

    return (
        <>
            <HeroBackground color={color} />
            <HeroBackground color="black">
                <TextBlock color={color} lines={lines} />
            </HeroBackground>
            <HeroBackground color={color} />
        </>
    );
};
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'scroll/text-block+rush',
    component: Main,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        color: {control: 'color'},
        lines: {control: 'array'}
        // backgroundColor: {control: 'color'},
    },
} satisfies Meta<typeof TextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        color: "white",
        lines: [
            'Los Flamencos National Reserve',
            'is a nature reserve located',
            'in the commune of San Pedro de Atacama',
            'The reserve covers a total area',
            'of 740 square kilometres (290 sq mi)'
        ]
    },
};


