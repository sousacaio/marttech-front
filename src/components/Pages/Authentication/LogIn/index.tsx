import React from 'react';
import { useFormik, FormikProps } from 'formik';
import * as yup from 'yup';
import { LoginCredentials } from '../../../../interfaces/Auth/LoginCredentials';
import { useAuth } from '../../../../contexts/auth';


const Login: React.FC = () => {

    const { Login } = useAuth();

    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik: FormikProps<LoginCredentials> = useFormik<LoginCredentials>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await handleLogin(values)
        },
    });

    async function handleLogin(values: LoginCredentials) {
        await Login(values);
    }

    return (

        <form  onSubmit={formik.handleSubmit}>
            <label         
                id="email"
                onChange={formik.handleChange}
            />
            <br />
            <input              
                id="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                autoComplete="current-password"
            />
            <br />
            <button type="submit">                Entrar                    </button>
        </form>
    );
};

export default Login;


