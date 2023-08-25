import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
const Container=styled.div`
    display:flex;

`;
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;  
`;
const Logo=styled.h1`
    

`;
const Desc=styled.p`
    margin:20px 0px;    
`;
const SocialContainer=styled.div`
    display:flex;
`;
const SocialIcon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;

const Center=styled.div`
    flex:1;    
`;
const Title=styled.h3`
    margin-bottom:30px;

`;
const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;


`;
const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;

`;
const Right=styled.div`
    flex:1;
    padding:20px;

`;
const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;

`;
const Payment=styled.img`
    width:50%;


`;


const Footer = () => {
  return (
    <Container>
        <Left>
        <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Shop</ListItem>
                <ListItem>Men</ListItem>
                <ListItem>Ladies</ListItem>
                <ListItem>Kids</ListItem>
                <ListItem>Sport</ListItem>
                <ListItem>Customer Service</ListItem>
                <ListItem>Contact</ListItem>
                <ListItem>Legal & privacy</ListItem>
                <ListItem>About Fashion-Pro</ListItem>
            </List>
        </Left>
        <Center>
        <Logo>Fashion-Pro</Logo>
            <Desc>The content of this site is copyright-protected and is the property of Fashion-Pro. Fashion-pro's business concept is to offer fashion and quality at the best price</Desc>
        <SocialContainer>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
        </SocialContainer>  
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>Sector-V,Kolkata,India</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 7001909836</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>karmakartanmay980@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png "/>
        </Right>
      
    </Container>
  )
}

export default Footer
