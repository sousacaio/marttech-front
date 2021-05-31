import React, { useState } from 'react';
import { useAuth } from '../../../../contexts/auth';
import InfoProductModal from '../../../Shared/Modal';
import ProductsVisualization from '../ProductVisualization';
interface ProductItemProps {
    name: string,
    price: number,
}

const ProductItem: React.FC<ProductItemProps> = (props): JSX.Element => {

    const { signed } = useAuth()

    const [open, setOpen] = useState<boolean>(false)

    return <div>
        {props.name}

        {props.price}


        <button onClick={() => setOpen(true)}>

            <InfoProductModal
                open={open}
                setOpen={setOpen}
                children={<ProductsVisualization {...props} />} />
        </button>
        {signed ?
            <button >
                Cart icon
                    </button> : ''}

    </div>
};

export default ProductItem;
