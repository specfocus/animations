import gsap from "gsap";
import React, {useEffect, useRef, type FC} from "react";

const EmptyRect = {height: 0, width: 0, left: 0, top: 0};

interface MagnetProps {
    children: React.ReactElement;
}

const Magnet: FC<MagnetProps> = ({children}) => {
    const magnetic = useRef<HTMLElement>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, 'x', {duration: 1, ease: 'elastic.out(1, 0.3)'});
        const yTo = gsap.quickTo(magnetic.current, 'y', {duration: 1, ease: 'elastic.out(1, 0.3)'});

        magnetic.current?.addEventListener('mousemove', (e) => {
            const {clientX, clientY} = e;
            const {height, width, left, top} = magnetic.current?.getBoundingClientRect() ?? EmptyRect;
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        });
        magnetic.current?.addEventListener('mouseleave', (e) => {
            xTo(0);
            yTo(0);
        });
    }, []);

    return (
        React.cloneElement(children, {ref: magnetic})
    );
};

export default Magnet;