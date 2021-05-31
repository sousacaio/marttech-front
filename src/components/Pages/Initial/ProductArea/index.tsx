import React, { useEffect, useState } from 'react';
import { IProduct } from '../../../../interfaces/Products/Product';
import productService from '../../../../services/productService';
import { Row } from '../../../Shared/Grid';
import ProductCard from './ProductCard';

const ProductArea: React.FC = (props): JSX.Element => {

    const [products, setProducts] = useState<IProduct[] | []>([])

    async function fetchProducts() {
        let response = await productService.findAll()
        setProducts(response)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return <Row height={10} style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        background: '#FFFFFF',
        overflow: 'auto',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }}>
        {products.map(({ name, price }: IProduct) => {
            return <ProductCard name={name} price={price} />
        })}
    </Row>
};

export default ProductArea;
