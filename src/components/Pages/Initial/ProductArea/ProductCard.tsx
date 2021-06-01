import React from 'react';
import { useAuth } from '../../../../contexts/auth/auth';
import { Row } from '../../../Shared/Grid';
import { Text } from '../../../Shared/Text';
import InfoIcon from '@material-ui/icons/Info';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

interface ProductCardProps {
    name: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = (props): JSX.Element => {
    const { signed } = useAuth()
    return (
        <div style={{
            display: 'flex', background: '#FFFFFF', overflow: 'auto',
            width: '30%',
            height:'40vh',
            margin: 10,
        }}>
            <Row width={10}  style={{ background: 'red', borderRadius: 10, }}>
                <div style={{
                    borderRadius: 10,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url("https://cdn.shopify.com/s/files/1/1566/8689/products/Box-Chain-Side-Box.jpg?v=1615471780")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <Row width={10} height={6}>   </Row>
                    <Row width={10} height={2} style={{ display: 'flex', alignContent: 'space-around' }}>
                        <Row width={10} height={10} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Text color="white" size={25}>{props.name}</Text>
                        </Row>
                        <Row width={10} height={10} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Text color="white" size={25}>R${props.price}</Text>
                        </Row>
                    </Row>
                    <Row width={10} height={2} style={{ display: 'flex', alignContent: 'space-around', justifyContent: 'center' }}>
                        <Row width={10} height={10} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Text color="white" size={25}>
                                <InfoIcon fontSize='small' />
                            </Text>
                        </Row>
                        {signed ?
                            <Row width={10} height={10} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Text color="white" size={25}><AddShoppingCartIcon/></Text>
                            </Row> : ''
                        }
                    </Row>
                </div>
            </Row>
        </div >
    );
};

export default ProductCard;