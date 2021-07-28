import React from 'react';
import {
    Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton,Text, SigninLink
} from './SignupElements';
import validate from '../validateInfo';
import useForm from '../useForm';
import { ErrorText } from '../Signin/SigninElements';

const SignUp = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
    return (
        <>
         <Container>
             <FormWrap>
                 
                 <FormContent>
                     <Form onSubmit = {handleSubmit} noValidate>
                         <FormH1>Sign up to your account</FormH1>
                         <FormLabel htmlFor='username' >Username</FormLabel>
                         <FormInput type='text' placeholder='Enter your username' name='username' value={values.username} onChange={handleChange}/>
                         <ErrorText>{errors.username && <p>{errors.username}</p>}</ErrorText>
                         <FormLabel htmlFor='for'>Email</FormLabel>
                         <FormInput type='email' placeholder='Enter your Email' name='email' value={values.email} onChange={handleChange} />
                         <ErrorText>{errors.email && <p>{errors.email}</p>}</ErrorText>
                         <FormLabel htmlFor='for'>Password</FormLabel>
                         <FormInput type='password' placeholder='*********' name='password' value={values.password} onChange={handleChange} />
                         <ErrorText>{errors.password && <p>{errors.password}</p>}</ErrorText>
                         <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                         <FormInput type='password' placeholder='*********' name='password2' value={values.password2} onChange={handleChange} />
                         <ErrorText>{errors.password2 && <p>{errors.password2}</p>}</ErrorText>
                         <FormButton type='submit' href='/'> Continue</FormButton>
                         <Text>Already have an account? <SigninLink to='/'>Sign in!</SigninLink> </Text>                         
                     </Form>
                 </FormContent>
             </FormWrap>
             </Container>   
        </>
    )
}

export default SignUp;
