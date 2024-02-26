import type {Meta, StoryObj} from "@storybook/react";
import {type FC, useRef} from "react";
import {Container, type ContainerProps} from "../page.module";
import useLenisEffect from "../use-lenis-effect";
import ZoomGallery, {type ZoomGalleryProps} from "./gallery+zoom";
import Picture1 from "/medias/zoom-parallax-1.jpg";
import Picture2 from "/medias/zoom-parallax-2.jpg";
import Picture3 from "/medias/zoom-parallax-3.jpg";
import Picture4 from "/medias/zoom-parallax-4.jpg";
import Picture5 from "/medias/zoom-parallax-5.jpg";
import Picture6 from "/medias/zoom-parallax-6.jpg";
import Picture7 from "/medias/zoom-parallax-7.jpg";

const Page: FC<Omit<ZoomGalleryProps, 'container'> & ContainerProps> = ({backgroundColor, ...props}) => {
    useLenisEffect();

    const container = useRef<HTMLDivElement | null>(null);

    return (
        <Container ref={container} backgroundColor={backgroundColor}>
            <ZoomGallery {...props} container={container} />
        </Container>
    );
};

Page.defaultProps = {
    backgroundColor: '#3f3f3f',
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'scroll/gallery+zoom',
    component: Page,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        backgroundColor: '#3f3f3f',
        images: [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7]
    }
};
