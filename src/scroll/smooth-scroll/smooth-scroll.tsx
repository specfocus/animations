"use client";
import HeroBackground from "../../static/hero-background";
import IndexGallery, {Section} from "../gallery+index/gallery+index";
import HomeHero from "../hero+home/hero+home-gsap";
import TextBlockRush from "../text-block+rush/text-block+rush-gsap";
import useLocomotiveScroll from "../use-locomotive-scroll";

const lines: string[] = [
    'Los Flamencos National Reserve',
    'is a nature reserve located',
    'in the commune of San Pedro de Atacama',
    'The reserve covers a total area',
    'of 740 square kilometres (290 sq mi)'
];

const sections: Section[] = [
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
];

export default function SmoothScrool() {
    useLocomotiveScroll();

    return (
        <>
            <HeroBackground color="black">
                <HomeHero
                    backgroundImage={'/medias/background.jpeg'}
                    foregroundImage={'/medias/intro.png'}
                    foregroundSpeed={.3}
                    headingSpeed={.7}
                    headingText="Home Hero" height="140vh"
                />
            </HeroBackground>
            <HeroBackground color="black">
                <TextBlockRush color="white" lines={lines} />
            </HeroBackground>
            <HeroBackground color="#555555">
                <IndexGallery sections={sections} />
            </HeroBackground>
        </>
    );
}
