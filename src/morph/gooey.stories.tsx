import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react";
import styled from "@emotion/styled";
import Gooey from "./gooey";

const Main = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Numbers = styled.div`
    font-size: 36px;
    cursor: pointer;
`;

const numbers = [
    "M87.9,79.2c1.1-0.4,53.7-39.2,54.9-39.1v180.5",
    "M81.7,85.7c-1.4-67,112.3-55.1,90.2,11.6c-12.6,32-70.6,83.7-88.8,113.7h105.8",
    "M74.8,178.5c3,39.4,63.9,46.7,88.6,23.7c34.3-35.1,5.4-75.8-41.7-77c29.9,5.5,68.7-43.1,36.5-73.7 c-23.4-21.5-76.5-11.1-78.6,25",
    "M161.9,220.8 161.9,41 72.6,170.9 208.2,170.9",
    "M183.2,43.7H92.1l-10,88.3c0,0,18.3-21.9,51-21.9s49.4,32.6,49.4,48.2c0,22.2-9.5,57-52.5,57s-51.4-36.7-51.4-36.7"
];

const GooeyExample = () => {
    const [index, setIndex] = useState(0);
    return (
        <Main>
            <Numbers>
                {
                    numbers.map((_, i) => {
                        return <p style={{color: i == index ? "red" : "black"}} onClick={() => {setIndex(i);}}>{i + 1}</p>;
                    })
                }
            </Numbers>
            <Gooey paths={numbers} index={index} setIndex={setIndex} />
        </Main>
    );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'morth/gooey',
    component: GooeyExample,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        color: {control: 'color'},
    },
} satisfies Meta<typeof GooeyExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Magnetic: Story = {
    args: {
        color: '#3f3f3f'
    },
};
