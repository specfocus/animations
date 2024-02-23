import React, {useEffect, useRef, useState} from "react";

interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    layout?: 'fill' | 'responsive' | 'fixed';
}

const Image: React.FC<ImageProps> = ({src, alt, width, height, layout = 'responsive'}) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoaded(true);
        }
    }, []);

    const handleLoad = () => {
        setLoaded(true);
    };

    let style = {};
    if (layout === 'fill') {
        style = {width: '100%', height: '100%', objectFit: 'cover'};
    } else if (layout === 'fixed') {
        style = {width: width, height: height};
    }

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            onLoad={handleLoad}
            style={{
                ...style,
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
            }}
        />
    );
};

export default Image;
