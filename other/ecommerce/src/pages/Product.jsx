import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import{Remove,Add} from "@material-ui/icons";

const Container=styled.div`
`;
const Wrapper=styled.div`
    padding:50px;
    display:flex;
`;
const ImgContainer=styled.div`
    flex:1;
`;
const Image=styled.img`
    width:50%;
    height:70vh;
    object-fit:cover;

`;
const InfoContainer=styled.div`
    flex:1;
    padding:0px 50px;

`;
const Title=styled.h1`
font-weight:200;

`;
const Desc=styled.p`
    margin:20px opx;
`;
const Price=styled.span`
    font-weight:100;
    font-size:40px;
`;
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
    width:50%;
    margin:30px 0px;

`;
const Filter=styled.div`
    display:flex;
    align-items:center;
`;
const FilterTitle=styled.span`
    font-size:20px;
    font-size:200;
`;
const FilterColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0px 5px;
    cursor:pointer;

`;
const FilterSize=styled.select`
    margin-left:10px;
    padding:5px;
    cursor:pointer;
    border:2px solid #C00000;
    border-radius:10px;
`;
const FilterSizeOption=styled.option`
`;
const AddContainer=styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;

`;
const AmountContainer=styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;
const Amount=styled.span`
    width:30px;
    height:30px;
    margin:0px 5px;
    border-radius:10px;
    border:1px solid #C00000;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Button=styled.button`
    padding:15px;
    border:2px solid #C00000;
    cursor:pointer;
    background-color:white;
    font-weight:500;
    border-radius:20px;

    &:hover{
        background-color: #D00000;
    }
`;

const Fit=styled.h1`
margin:10px 5px;
font-weight:100;
font-size:25px;
`;
const About=styled.h1`
margin:10px 5px;
font-weight:100;
font-size:25px;
`;
const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Image src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd6%2Fc8%2Fd6c8b0585417cba188879f0bbb0323c3e0d12757.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"/>
            <Image src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa1%2Ff5%2Fa1f527904836a5d0f5e8d79ccd3c3cc12bc6c029.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"/>
            <Image src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa6%2F32%2Fa6324d7252375d40d41e678311193140f316d438.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"/>
            <Image src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F99%2Fcd%2F99cde9b6f21d48eb28d36dd036406c0fb474ca1d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"/>
        </ImgContainer>
        <InfoContainer>
            <Title>Relaxed Fit Twill shirt</Title>
            <Desc>Shirt in soft, checked cotton twill with a turn-down collar, classic front and yoke at the back. Long sleeves with buttoned cuffs and a sleeve placket with a link button, open chest pockets and a rounded hem. Relaxed Fit – a straight fit with good room for movement creating a comfortable, relaxed silhouette.</Desc>
            <Fit>Fit-Relaxed fit</Fit>
            <About>Composition-Cotton 100%</About>
            <Price> price-Rs.1,499</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    
                    <FilterColor color ="Lightgray"/>
                    <FilterColor color ="Black"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
