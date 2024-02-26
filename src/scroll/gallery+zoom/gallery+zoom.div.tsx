import {type FC, useRef} from "react";
import ZoomGallery, {type ZoomGalleryProps} from "./gallery+zoom";
import {Container} from "./styled.module";

const Contained: FC<Omit<ZoomGalleryProps, 'container'>> = props => {
    const container = useRef<HTMLDivElement | null>(null);
    return (
        <Container ref={container}>
            <ZoomGallery {...props} container={container} />
        </Container>
    );
};

export default Contained;