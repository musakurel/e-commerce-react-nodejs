import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { mobile } from "./Responsive";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
  a {
    text-decoration: none;
    color:black;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ width: "60px", marginLeft: "5px" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ margin: "none", width: "60px", marginLeft: "5px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px", margin: "20px " })}

`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "2" })}
`;
const MenuItem = styled.div`
  fonst-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
`;
const Navbar = () => {
const quantity= useSelector(state=>state.cart.quantity)


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Search style={{ color: "gray", fontSize: 16 }} />
            <Input />
          </SearchContainer>
        </Left>
        <Center>
        <Link to="/">
          <Logo>NEWSTORE</Logo>
        </Link>{" "}
        </Center>
        <Right>
          <MenuItem>
            {" "}
            <Link to="/register">REGISTER</Link>{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <Link to="/login">LOGIN</Link>{" "}
          </MenuItem>

          <MenuItem>
          <Link to="/cart">
          
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>{" "}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
