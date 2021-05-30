import React from 'react';
import { useAuth } from '../../../contexts/auth';

const Login: React.FC = () => {
    const { Login } = useAuth();

    async function handleLogin() {
        await Login({
            email: 'frias.caio@yahoo.com.br',
            password: '123456',
        });
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;