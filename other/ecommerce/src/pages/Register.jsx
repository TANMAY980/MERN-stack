import styled from "styled-components";

const Container=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Wrapper=styled.div`
    padding:20px;
    width:40%;
    background-color:#F8F8F8;
    border-radius:20px;

`;
const Form=styled.form`
display:flex;
flex-wrap:wrap;

`;
const Title=styled.h1`
font-size:24px;
font-weight:500;
align-items:center;
justify-content:center;
display:flex;
`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
border-radius:15px;
border:none;

`;
const Agreement=styled.span`
    font-size:12px;
    margin:20px 0px;

`;
const Button=styled.button`
    width:100%;
    font-weight:400;
    border:none;
    border-radius:15px;
    padding:15px 20px;
    background-color:#B8B8B8;
    cursor:pointer;
    &:hover{
        background-color: #D00000;
    }

`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>By creating an account,I consent to the processing of my personal data in accordance with the<b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
