import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef, useState} from "react";
import {Column, ImageContainer, ProjectDescription, ProjectEl, ProjectList, Projects} from "./styled.module";
import Image from "../../../next-image";
// import Image from "next/image";

const projects = [
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

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        });
    }, []);

    return (
        <Projects ref={container}>
            <ProjectDescription>
                <ImageContainer ref={imageContainer}>
                    <Image
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </ImageContainer>
                <Column>
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </Column>
                <Column>
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </Column>
            </ProjectDescription>

            <ProjectList>
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectEl key={index} onMouseOver={() => {setSelectedProject(index);}}>
                                <h2>{project.title}</h2>
                            </ProjectEl>
                        );
                    })
                }
            </ProjectList>
        </Projects>
    );
}
