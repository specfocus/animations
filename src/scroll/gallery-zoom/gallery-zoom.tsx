import {useScroll, useTransform} from "framer-motion";
import {type FC, useRef} from "react";
import Image from "../../next-image";
import {Container, El, ImageContainer, Sticky} from "./styled.module";
// import Image from "next/image";

interface ZoomGalleryProps {
    images: string[];
}

const ZoomGallery: FC<ZoomGalleryProps> = ({ images }) => {
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

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];
    

    const pictures = images.map((src, index) => ({ src, scale: scales[index]}));

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
};

export default ZoomGallery;
