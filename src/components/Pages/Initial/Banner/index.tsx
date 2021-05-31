import React from 'react';
import { useAuth } from '../../../../contexts/auth';
import { Row } from '../../../Shared/Grid';
import { LoginModal } from '../../../Shared/Modal/login-modal';
import { Modal } from '../../../Shared/Modal/Modal';
import { useModal } from '../../../Shared/Modal/useModal';
import { Text } from '../../../Shared/Text';

const Banner: React.FC = () => {
    const { isShown, toggle } = useModal();
    const { signed, Logout } = useAuth()
    const onConfirm = () => toggle();
    const onCancel = () => toggle();

    return <Row height={10} >
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
                    {signed ?
                        <>
                            <Text color="white" onClick={Logout} size={20}>Logout</Text>
                        </>
                        :
                        <>
                            <Text color="white" onClick={toggle} size={20}>Login</Text>

                            <Modal
                                isShown={isShown}
                                hide={toggle}
                                headerText="Login"
                                modalContent={
                                    <LoginModal
                                        onConfirm={onConfirm}
                                        onCancel={onCancel}
                                        message=""
                                    />
                                }
                            />
                        </>
                    }
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