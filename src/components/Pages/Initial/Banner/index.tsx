import React from 'react';
import { useAuth } from '../../../../contexts/auth';
import { Row } from '../../../Shared/Grid';
import { LoginModal } from '../../../Shared/Modal/login-modal/login-modal';
import { useLoginModal } from '../../../Shared/Modal/login-modal/use-login-modal';

import { Modal } from '../../../Shared/Modal/Modal';
import { SignUpModal } from '../../../Shared/Modal/signup-modal/signup-modal';
import { useSignUpModal } from '../../../Shared/Modal/signup-modal/use-login-modal';
import { Text } from '../../../Shared/Text';

const Banner: React.FC = () => {
    const { signed, user, Logout } = useAuth()
    const { isLoginModalShown, toggleLoginModal } = useLoginModal()
    const onConfirmLogin = () => toggleLoginModal();
    const onCancelLogin = () => toggleLoginModal();

    const { isSignUpModalShown, toggleSignUpModal } = useSignUpModal()
    const onConfirmSignUp = () => toggleSignUpModal();
    const onCancelSignUp = () => toggleSignUpModal();

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
                    {signed ?
                        <Text color="white" size={20}>Olá {user?.email}!</Text>
                        : <Text color="white" size={20}>Marttech</Text>}
                    {signed ?
                        <></>
                        : <>
                            <Text color="white" onClick={toggleSignUpModal} size={20}>Cadastre-se!</Text>
                            <Modal
                                isShown={isSignUpModalShown}
                                hide={toggleSignUpModal}
                                headerText="Cadastro"
                                modalContent={
                                    <SignUpModal
                                        onConfirm={onConfirmSignUp}
                                        onCancel={onCancelSignUp}
                                        message=""
                                    />
                                }
                            />
                        </>}
                    {signed ?
                        <Text color="white" onClick={Logout} size={20}>Logout</Text>
                        :
                        <>
                            <Text color="white" onClick={toggleLoginModal} size={20}>Login</Text>

                            <Modal
                                isShown={isLoginModalShown}
                                hide={toggleLoginModal}
                                headerText="Login"
                                modalContent={
                                    <LoginModal
                                        onConfirm={onConfirmLogin}
                                        onCancel={onCancelLogin}
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