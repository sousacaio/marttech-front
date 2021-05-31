import { Box, Button } from '@material-ui/core';
import React from 'react';
import { useAuth } from '../../../../contexts/auth';

const LogOut: React.FC = () => {

    const { Logout } = useAuth();

    return (
        <Box textAlign='center'>
            <Button color="primary" variant="contained" fullWidth onClick={Logout}>
                Sair
            </Button>
        </Box>
    );
};

export default LogOut;