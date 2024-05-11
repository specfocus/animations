import type {Meta, StoryObj} from "@storybook/react";
import HeroBackground from "../../static/hero-background";
// import useLocomotiveScroll from "../use-locomotive-scroll";
import HomeHero from "./hero+home-gsap";

function Main() {
    // useLocomotiveScroll();

    return (
        <>
            <HeroBackground color="black" height="140vh">
                <HomeHero
                    backgroundImage={'/medias/background.jpeg'}
                    foregroundImage={'/medias/intro.png'}
                    foregroundSpeed={.3}
                    headingSpeed={.7}
                    headingText="Home Hero" height="140vh"
                />
            </HeroBackground>
            <HeroBackground color="white" height="140vh" />
        </>
    );
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'scroll/hero+home (gsap)',
    component: Main,
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
} satisfies Meta<typeof HomeHero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
    args: {
    },
};
