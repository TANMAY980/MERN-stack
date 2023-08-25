
import { Send } from '@material-ui/icons';
import React from 'react'
import styled from"styled-components";
const Container=styled.div`
    height:60vh;
    background-color:#fcf4f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;  
`
const Title=styled.h1`
    font-size:70px;
    margin-bottom:20px;
`
const Description=styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
`
const InputContainer=styled.div`
        width:50%;
        height:40px;
        display:flex;
        justify-content:space-between;
        border: 1px solid lightgray;  
        border-radius:20px;
        
`;
const Input=styled.input`
    border:none;
    flex:8;
    padding-left:20px;
    border-radius:20px;
`
const Button=styled.button`
    flex:1;
    border:none;
    background-color:#B00000;
    color:white;
    border-radius:20px;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description> Exclusive offers!
                    The latest fashion news!
                    Inspiration and style tips!
</Description>
        <InputContainer>
            <Input placeholder="your email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
