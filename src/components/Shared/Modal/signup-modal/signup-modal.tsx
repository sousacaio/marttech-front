import React, { FunctionComponent } from 'react';
import { Row } from '../../Grid';
import { ConfirmationButtons, Message, SendButton } from '../confirmation-modal.style';
import {
    Formik,
    Form
} from 'formik';
import * as yup from 'yup';
import { useAuth } from '../../../../contexts/auth';
import { FormGroup, Input, Label } from '../../Forms';
import { SignUpUser } from '../../../../interfaces/Auth/SignupInterface';


interface SignUpModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}
export const SignUpModal: FunctionComponent<SignUpModalProps> = (props) => {
    const { SignUp } = useAuth()
    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Formato de email inválido!')
            .required('O campo email está vazio'),
        password: yup
            .string()
            .min(6, 'A senha precisa de pelo menos 6 caracteres')
            .required('O campo senha está vazio'),
        name: yup
            .string()
            .min(2, 'O nome precisa ter pelo menos duas letras!')
            .required('O campo nome está vazio'),
    });

    async function handleSignUp(values: SignUpUser) {
        await SignUp(values)
    }

    return (
        <React.Fragment>
            <Message>{props.message}</Message>
            <Row width={10} height={10}>
                <div>
                    <Formik
                        initialValues={{ email: '', password: '', name: '' } as SignUpUser}
                        onSubmit={async (values) => {
                            await handleSignUp(values)
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
                                    type="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? (
                                    <Message>{errors.password}</Message>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Nome </Label>
                                <Input name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? (
                                    <Message>{errors.name}</Message>
                                ) : null}
                            </FormGroup>
                            <ConfirmationButtons>
                                <SendButton type="submit" >Cadastrar!</SendButton>
                            </ConfirmationButtons>
                        </Form>
                    )}
                    </Formik>
                </div>
            </Row>
        </React.Fragment>
    );
};