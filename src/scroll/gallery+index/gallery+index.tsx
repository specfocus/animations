"use client";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef, useState, type FC} from "react";
import Image from "../../next-image";
import {Column, ImageContainer, ProjectDescription, StyledIndexGallerySection, StyledIndexGalleryList, StyledIndexGallery} from "./styled.module";
// import Image from "next/image";

export interface Section {
    title: string;
    src: string;
}

export interface IndexGalleryProps {
    sections: Section[];
}

const IndexGallery: FC<IndexGalleryProps> = ({ sections }) => {

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
        <StyledIndexGallery ref={container}>
            <ProjectDescription>
                <ImageContainer ref={imageContainer}>
                    <Image
                        src={`/medias/${sections[selectedProject]?.src}`}
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

            <StyledIndexGalleryList>
                {
                    sections.map((project, index) => {
                        return (
                            <StyledIndexGallerySection key={index} onMouseOver={() => {setSelectedProject(index);}}>
                                <h2>{project.title}</h2>
                            </StyledIndexGallerySection>
                        );
                    })
                }
            </StyledIndexGalleryList>
        </StyledIndexGallery>
    );
}

export default IndexGallery;