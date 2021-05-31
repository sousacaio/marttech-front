import styled from 'styled-components';

interface TextProps {
    color?: string;
    size?: number
}

export const Text = styled.p<TextProps>`
    font-family: 'Roboto';
    font-size:${({ size }) => size}px;
    color: ${({ color }) => color};
`;