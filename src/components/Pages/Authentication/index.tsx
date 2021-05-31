import React from 'react';
import { useAuth } from '../../../contexts/auth';
import Login from './LogIn';
import LogOut from './LogOut';

const Authentication: React.FC = () => {
    
    const { signed } = useAuth();


    return (
        <div>
            {signed ? <LogOut /> : <Login />}
        </div>
    );
};

export default Authentication;