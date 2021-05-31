import React from 'react';
import { useAuth } from '../../../../contexts/auth';

const LogOut: React.FC = () => {

    const { Logout } = useAuth();

    return (

        <button onClick={Logout}>
            Sair
        </button>

    );
};

export default LogOut;