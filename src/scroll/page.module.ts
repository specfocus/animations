import styled from "@emotion/styled";

export interface ContainerProps {
    backgroundColor?: string;
    paddingTop?: string;
    minHeight?: string;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.backgroundColor || '#3f3f3f'};
    padding-top: ${props => props.paddingTop || '400px'};
    min-height: ${props => props.minHeight || '2400px'};
`;