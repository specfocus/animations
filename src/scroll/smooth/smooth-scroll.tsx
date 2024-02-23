"use client";
import {useEffect} from "react";
import styles from "./page.module.css";
import Intro from "./intro";
import Description from "./description";
import Projects from "./projects";

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
        <main className={styles.main}>
            <Intro />
            <Description />
            <Projects />
        </main>
    );
}
