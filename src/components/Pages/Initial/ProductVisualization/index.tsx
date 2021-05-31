import React from 'react';


interface ProductsVisualizationProps {
    name: string,
    price: number,
}

const ProductsVisualization: React.FC<ProductsVisualizationProps> = (props): JSX.Element => {

    return (

        <div style={{ flex: 1, width: '50%', height: '50%', background: 'red' }}>
            <div>div 1</div>
            <div>div 2</div>
            <div>div 3</div>
        </div>
    );
};

export default ProductsVisualization;