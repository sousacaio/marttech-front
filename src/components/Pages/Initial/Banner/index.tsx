import React from 'react';
import { Row } from '../../../Shared/Grid';
import { Text } from '../../../Shared/Text';

const Banner: React.FC = () => {
    return <Row height={5} >
        <div style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            width: '100%',
            height: '100%',
            backgroundImage: `url("https://cdn.shopify.com/s/files/1/1566/8689/products/Box-Chain-Side-Box.jpg?v=1615471780")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Row height={2} >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <Text color="white" size={20}>Marttech</Text>

                    <Text color="white" size={20}>Login</Text>
                </div>
            </Row>
            <Row height={8}  >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text color="white" size={70}>Bem vindo(a)!</Text>
                </div>
            </Row>
        </div>
    </Row>;
};

export default Banner;