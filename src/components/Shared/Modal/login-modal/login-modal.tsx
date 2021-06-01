import React, { FunctionComponent } from 'react';
import { Row } from '../../Grid';
import { ConfirmationButtons, Message, SendButton } from '../confirmation-modal.style';
import {
    Formik,
    Form,
} from 'formik';
import * as yup from 'yup';
import { LoginCredentials } from '../../../../interfaces/Auth/LoginCredentials';
import { useAuth } from '../../../../contexts/auth';
import { FormGroup, Input, Label } from '../../Forms';


interface LoginModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}
export const LoginModal: FunctionComponent<LoginModalProps> = (props) => {
    const { Login } = useAuth()
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

    async function handleLogin(values: LoginCredentials) {
        await Login(values);
    }
    return (
        <React.Fragment>
            <Message>{props.message}</Message>
            <Row width={10} height={10}>
                <div>
                    <Formik
                        initialValues={{ email: '', password: '' } as LoginCredentials}
                        onSubmit={async (values) => {
                            await handleLogin(values)
                        }}
                        validationSchema={validationSchema}
                    >{({ errors,
                        touched,
                        values,
                        handleChange,
                        handleBlur }) => (
                        <Form>
                            <FormGroup>
                                <Label htmlFor="label">Email</Label>
                                <Input id="label" name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (
                                    <Message>{errors.email}</Message>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Senha </Label>
                                <Input name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? (
                                    <Message>{errors.password}</Message>
                                ) : null}
                            </FormGroup>
                            <ConfirmationButtons>
                                <SendButton type="submit" >Logar</SendButton>
                            </ConfirmationButtons>
                        </Form>
                    )}
                    </Formik>
                </div>
            </Row>
        </React.Fragment>
    );
};