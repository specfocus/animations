import React, {useEffect, useRef, useState} from 'react';

export interface NextImageProps {
    src: string;
    placeholder?: string; // URL for the blurred placeholder image
    alt: string;
    fill?: boolean; // Whether the image should use 'fill' layout
    priority?: boolean;
}

const NextImage: React.FC<NextImageProps> = ({src, placeholder, alt, fill}) => {
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
    if (fill) {
        style = {width: '100%', height: '100%', objectFit: 'cover'};
    }

    return (
        <>
            {placeholder && !loaded && (
                <img
                    src={placeholder}
                    alt={alt}
                    style={{...style, filter: 'blur(10px)', position: 'absolute'}}
                />
            )}
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                onLoad={handleLoad}
                style={{
                    ...style,
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    position: fill ? 'absolute' : 'static'
                }}
            />
        </>
    );
};

export default NextImage;