import {useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Picture1 from "../../../public/medias/zoom-parallax-1.jpg";
import Picture2 from "../../../public/medias/zoom-parallax-2.jpg";
import Picture3 from "../../../public/medias/zoom-parallax-3.jpg";
import Picture4 from "../../../public/medias/zoom-parallax-4.jpg";
import Picture5 from "../../../public/medias/zoom-parallax-5.jpg";
import Picture6 from "../../../public/medias/zoom-parallax-6.jpg";
import Picture7 from "../../../public/medias/zoom-parallax-7.jpg";
import Image from "../../next-image";
import {Container, El, ImageContainer, Sticky} from "./styled.module";
// import Image from "next/image";

export default function Index() {

    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ];

    return (
        <Container ref={container}>
            <Sticky>
                {
                    pictures.map(
                        ({src, scale}, index) => {
                            return (
                                <El key={index} style={{scale}}>
                                    <ImageContainer nth={0}>
                                        <Image
                                            src={src}
                                            fill
                                            alt="image"
                                            placeholder='blur'
                                        />
                                    </ImageContainer>
                                </El>
                            );
                        })
                }
            </Sticky>
        </Container>
    );
}
