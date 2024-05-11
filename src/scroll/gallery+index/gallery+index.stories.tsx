import type {Meta, StoryObj} from "@storybook/react";
import {useEffect, type FC} from "react";
import IndexGallery, {type IndexGalleryProps} from "./gallery+index";
import HeroBackground from "../../static/hero-background";

const Main: FC<IndexGalleryProps> = ({sections}) => {
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
            <HeroBackground color="black" height="140vh">
                <IndexGallery sections={sections} />
            </HeroBackground>
            <HeroBackground color="white" height="140vh" />
        </>
    );
};
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'scroll/gallery+index',
    component: Main,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        sections: {control: 'array'}
        // backgroundColor: {control: 'color'},
    },
} satisfies Meta<typeof IndexGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
    args: {
        sections: [
            {
                title: "Salar de Atacama",
                src: "salar_de_atacama.jpg"
            },
            {
                title: "Valle de la luna",
                src: "valle_de_la_muerte.jpeg"
            },
            {
                title: "Miscanti Lake",
                src: "miscani_lake.jpeg"
            },
            {
                title: "Miniques Lagoons",
                src: "miniques_lagoon.jpg"
            },
        ]
    },
};


