"use client";
import {useScroll, useTransform} from "framer-motion";
import {FC, MutableRefObject, useRef} from "react";
import useDimention from "../use-dimention";
import Column from "./column";
import {Gallery, Spacer} from "./styled.module";

export interface ColumnsGalleryProps {
    columns?: number;
    container: MutableRefObject<HTMLDivElement | null>;
    images: string[];
}

const ColumnsGallery: FC<ColumnsGalleryProps> = ({images}) => {

    const gallery = useRef(null);

    const {scrollYProgress} = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    });
    const {height} = useDimention();
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

    return (
        <>
            <Spacer />
            <Gallery ref={gallery}>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
            </Gallery>
            <Spacer />
        </>
    );
}




export default ColumnsGallery;