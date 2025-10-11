import {useScroll, useTransform, motion} from "framer-motion";
import {useRef, type FC} from "react";
import Image from "../../next-image";
import {Container, El, ImageContainer, Sticky, Wrapper} from "./styled.module";
// import Image from "next/image";

export interface ZoomGalleryProps {
    images: string[];
}

const ZoomGallery: FC<ZoomGalleryProps> = ({images}) => {
    const container = useRef<HTMLDivElement | null>(null);
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

    const pictures = images.map((src, index) => ({
        src, scale: scales[index]
    }));

    return (
        <Container ref={container}>
            <Sticky>
                {
                    pictures.map(
                        ({src, scale}, index) => {
                            return (
                                <Wrapper key={index} as={motion.div} style={{scale} as any}>
                                    <El>
                                        <ImageContainer>
                                            <Image
                                                src={src}
                                                fill
                                                alt="image"
                                                placeholder='blur'
                                            />
                                        </ImageContainer>
                                    </El>
                                </Wrapper>
                            );
                        })
                }
            </Sticky>
        </Container>
    );
};

export default ZoomGallery;
