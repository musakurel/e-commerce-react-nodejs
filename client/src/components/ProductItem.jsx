import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 3px;
  flex: 1;
  min-width: 280px;
  height: 350;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  a {
    text-decoration: none;
  }
`;

const Circle = styled.div`
width:200px; 
height:200px:
border-radius:50;
background-color: #ffffff;
position:absolute;

`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width:100%;
  height: 75%;
  object-fit: cover;
  z-index: 2;
`;

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/product/${item._id}`}>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            <SearchRoundedIcon />
          </Icon>

          <Icon>
            <p>${item.price} </p>
          </Icon>
        </Info>
      </Link>
    </Container>
  );
};

export default ProductItem;
