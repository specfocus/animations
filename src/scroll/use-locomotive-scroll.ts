import {useEffect} from "react";

const useLocomotiveScroll = () => {
    useEffect(
        () => {
            (
                async () => {
                    const LocomotiveScroll = (await import('locomotive-scroll')).default;
                    const locomotiveScroll = new LocomotiveScroll();
                }
            )();
        },
        []
    );
};

export default useLocomotiveScroll;