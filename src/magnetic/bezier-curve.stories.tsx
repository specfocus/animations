import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import styled from "@emotion/styled";
import BezierCurve from "./bezier-curve";

const Container = styled.div`
padding-top: 100px;    
height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3f3f3f;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 70vw;
`;

const Description = styled.div`
    display: flex;
    justify-content: flex-end;

    p {
        font-size: 12px;
        margin: 0px;

        &:nth-of-type(1) {
        margin-top: 8px;
        }

        &:nth-of-type(2) {
        font-size: 12px;
        width: 700px;
        margin-left: 30px;
        }
    }
`;

const TagsContainer = styled.div`
    display: flex;
    margin-top: 50px;
`;

const Tags = styled.div`
    display: flex;
    width: 700px;
    margin-left: 30px;
    flex-wrap: wrap;
    gap: 10px;

    p {
        border: 1px solid #3f3f3f;
        border-radius: 20px;
        text-transform: uppercase;
        font-size: 14px;
        padding: 10px 12px;
    }
`;

const BezierCurveExample = () => (
        <Container>
            <Body>
                <BezierCurve />
                <Description>
                    <p>Smart Development</p>
                    <p>Combining unique design and rich technology, we build digital products exactly as they were designed, without shortcuts or simplifications.</p>
                </Description>
                <TagsContainer>
                    <p>Areas</p>
                    <Tags>
                        <p>E-commerce</p>
                        <p>Finance</p>
                        <p>Education</p>
                        <p>Social</p>
                        <p>Entertainment</p>
                        <p>Medicine</p>
                    </Tags>
                </TagsContainer>
            </Body>
        </Container>
    );

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'magnetic/bezier-curve',
    component: BezierCurveExample,
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
} satisfies Meta<typeof BezierCurveExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Magnetic: Story = {
    args: {
        color: '#3f3f3f',
        width: 1,
    },
};
