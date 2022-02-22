import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import {mobile} from "../components/Responsive"
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  font-weight: 600;
  padding: 10px;
  border: ${(props) => props.type === "field" && "none"};
  background-color: ${(props) =>
    props.type === "field" ? "black" : "transparent"};
  color: ${(props) => props.type === "field" && "white"};
`;
const TopTexts = styled.div`

${mobile({display:"none"})}

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;

  justify-content: space-between;
  ${mobile({display: 'flex', flexDirection: "column", justifyContent: "center"})}

`;
const Info = styled.div`
  flex: 3;
`;


const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 200px;
  ${mobile({width:"50%"})}

`;
const Details = styled.span`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({flex:"2"})}

`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPrice = styled.span`
  font-size: 28px;
  font-weight: 200;
`;
const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;

  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:70vh;
`;
const SummaryTitle = styled.h1`
font-weight:200;

`
const SummaryItem = styled.div`
display:flex;
margin: 20px 0px;
justify-content:space-between;
font-weight: ${props=>props.type==="total" && "600" };
text-transform:${props=>props.type==="total" && "uppercase" };
font-size:${props=>props.type==="total" && "22px" };
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.div``
const SummaryButton  = styled.button`
margin-left:40px;

width:80%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
border:none;
transition: 0.3s ease;
&:hover{transform:scale(1.1); opacity:0.9;}
`

const Cart = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Announce />
        <Wrapper>
          <Title>YOUR CART</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping List</TopText>
              <TopText>Your Wishlist</TopText>
            </TopTexts>
            <TopButton type="field">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png" />
                  <Details>
                    <ProductName>
                      <b>Product: </b> PRADA SHIRT
                    </ProductName>
                    <ProductId>
                      <b>ID: </b> 23552342342
                    </ProductId>
                    <ProductColor color="#fa8102" />
                    <ProductSize>
                      <b>Size: </b> S
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount> 2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 45</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png " />
                  <Details>
                    <ProductName>
                      <b>Product: </b> DEAN SHIRT
                    </ProductName>
                    <ProductId>
                      <b>ID: </b> 44552342342
                    </ProductId>
                    <ProductColor color="#fff5ee" />
                    <ProductSize>
                      <b>Size: </b> M
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount> 2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 45</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 10</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Discount</SummaryItemText>
                <SummaryItemPrice>$ -5</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText >Total</SummaryItemText>
                <SummaryItemPrice>$ 85</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
        
        <Footer />
      </Container>
    </div>
  );
};

export default Cart;
