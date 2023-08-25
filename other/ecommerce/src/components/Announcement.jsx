import styled from "styled-components";

const Container=styled.div`
    height:30px;
    background-color:#C00000 ;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`
const Announcement = () => {
  return (
    <Container>
      super deal! free Shipping on orders over 1999
    </Container>
  )
}

export default Announcement
