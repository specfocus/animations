import {useScroll, useTransform} from "framer-motion";
import {MutableRefObject, type FC} from "react";
import Image from "../../next-image";
import {El, ImageContainer, Sticky} from "./styled.module";
// import Image from "next/image";

export interface ZoomGalleryProps {
    container?: MutableRefObject<HTMLDivElement | null>;
    images: string[];
}

const ZoomGallery: FC<ZoomGalleryProps> = ({container, images}) => {
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


    const pictures = images.map((src, index) => ({src, scale: scales[index]}));

    return (
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
    );
};

export default ZoomGallery;
