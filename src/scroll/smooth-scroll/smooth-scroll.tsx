"use client";
import {useEffect} from "react";
import Intro from "./intro";
import Description from "./description";
import Projects from "./projects";
import styled from "@emotion/styled";

const Main = styled.main`
    background-color: black;
`;

export default function SmoothScrool() {
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
        <Main>
            <Intro />
            <Description />
            <Projects />
        </Main>
    );
}
