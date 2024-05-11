import type {Meta, StoryObj} from "@storybook/react";
import ColumnsGallery, {ColumnsGalleryProps} from "./gallery+columns";
import useLenisEffect from "../use-lenis-effect";
import {type FC, useRef} from "react";
import {Container} from "../page.module";

const Page: FC<Omit<ColumnsGalleryProps, 'container'>> = props => {
    useLenisEffect();

    const container = useRef<HTMLDivElement | null>(null);

    return (
        <Container ref={container}>
            <ColumnsGallery {...props} container={container} />
        </Container>
    );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'scroll/gallery+columns',
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
} satisfies Meta<typeof ColumnsGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        // backgroundColor: '#3f3f3f',
        images: [
            '/medias/smooth-parallax-1.jpg',
            '/medias/smooth-parallax-2.jpg',
            '/medias/smooth-parallax-3.jpg',
            '/medias/smooth-parallax-4.jpg',
            '/medias/smooth-parallax-5.jpg',
            '/medias/smooth-parallax-6.jpg',
            '/medias/smooth-parallax-7.jpg',
            '/medias/smooth-parallax-8.jpg',
            '/medias/smooth-parallax-9.jpg',
            '/medias/smooth-parallax-10.jpg',
            '/medias/smooth-parallax-11.jpg',
            '/medias/smooth-parallax-12.jpg',
        ]
    },
};
