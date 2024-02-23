import styled from "@emotion/styled";
import type {Meta, StoryObj} from "@storybook/react";
import Lenis from '@studio-freight/lenis';
import {useEffect} from "react";
import GSAP from "./parallax-scroll-with-gsap";

const Container = styled.div`
    margin-top: 10vh;
    min-height: 100vh;
`;

const Page = () => {
    useEffect( () => {
        const lenis = new Lenis()
        
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return (
        <Container>
            <GSAP />
        </Container>
    )
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'scroll/parallax-with-gsap',
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
    },
};
