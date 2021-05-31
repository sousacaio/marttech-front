
import styled from 'styled-components';

export const Container = styled.div`
    width:90%;
    height:90%;
    paddin-right:15px;
    padding-left:15px;
    margin-right: auto;
    margin-left: auto; 
`;

function getWidthGrid(value: number) {
    if (!value) return;
    let width = value / 12 * 100;
    return `width: ${width}%`;
}

interface ColumnProps {
    mobile?: number;
    desktop?: number;
    tablet?: number;
}

export const Column = styled.div<ColumnProps>`   
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 100%

    @media only screen and (min-width: 768px){
      ${({ mobile }) => mobile && getWidthGrid(mobile)}
    }
    @media only screen and (min-width: 768px){
      ${({ tablet }) => tablet && getWidthGrid(tablet)}
    }
    @media only screen and (min-width: 1000){
      ${({ desktop }) => desktop && getWidthGrid(desktop)}
    }
`;

interface WidthHeight {
    width?: number;
    height?: number
}
export const Row = styled.div<WidthHeight>`
    width:  ${({ width }) => width && width / 10 * 100}%;
    height:  ${({ height }) => height && height / 10 * 100}%;   
  
`;