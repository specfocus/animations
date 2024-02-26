import type {Meta, StoryObj} from "@storybook/react";
import {useRef, type FC} from "react";
import useLenisEffect from "../../use-lenis-effect";
import {Container} from "../page.module";
import TrioGallery, {type TrioGalleryProps} from "./gallery+trio.gsap";
import Picture4 from "/medias/parallax-scroll-4.jpg";
import Picture5 from "/medias/parallax-scroll-5.jpg";
import Picture6 from "/medias/parallax-scroll-6.jpg";

const Page: FC<Omit<TrioGalleryProps, 'container'>> = props => {
    useLenisEffect();

    const container = useRef<HTMLDivElement | null>(null);

    return (
        <Container ref={container}>
            <TrioGallery {...props} container={container} />
        </Container>
    )
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'scroll/gallery+trio (with gsap)',
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
        images: [Picture4, Picture5, Picture6]
    },
};
