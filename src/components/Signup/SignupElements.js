import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
/* background: linear-gradient(
    108deg,
    rgba(1,147,86,1) 0%,
    rgba(10,201,122,1) 100%
); */

background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);

`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width:339px){
    height: 80%;
}
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width:480px) {
    padding: 20px;
}
`;

export const Form = styled.form`
background: #010101;
max-width : 400px ;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0,0.9);

@media screen and (max-width:400px) {
    padding: 32px 32px;
}

`;

export const FormH1 = styled.h1`
margin-bottom: 24px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;

`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size:14px;
color: #fff;
`;

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;

export const FormButton = styled.button`
background: #01bf71;
padding: 16px 0; 
border:none;
border-radius: 4px;
color:#FFF;
font-size: 20px;
cursor: pointer;
&:hover{    
    background:rgba(253,187,45,1);
}
`;

export const Text = styled.span`
text-align: center;
margin-top:24px;
color: #fff;
font-size: 14px;
`;

export const SigninLink = styled(Link)`
font-size: 24px;
margin-left: 4px;
text-decoration: none;
color: #01bf71;
`;