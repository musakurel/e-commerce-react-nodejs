import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import {mobile} from "../components/Responsive"


const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.p`
  margin: 20px;
`;

const FilterText = styled.span`
font-size:20px;
font:weight:600px;
margin-right:20px
`;

const Select = styled.select`
margin:10px;
padding:10px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location= useLocation()
  const cat= location.pathname.split("/")[2]
  console.log(cat)
  const [sort, setSort]=useState("newest")
  const handleSort = (e) => { 
    setSort(e.target.value)
  }
  console.log(sort)
  const [filters, setFilters]=useState({})
/*   const handleFilters=(e)=>{
const value=e.target.value
setFilters({
  ...filters,
  [e.target.name]:value,
})
} */

const handleFilters = (e) => { 
const value=e.target.value

setFilters({
  ...filters,
  [e.target.name]:value})
  console.log(filters)
}

  return (
    <Container>
      <Announce />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
        <Select name="color" onChange={handleFilters}>
          <Option disabled >
            {" "}
            Color
          </Option>
          <Option> white </Option>
          <Option> blue </Option>
          <Option> black </Option>
          <Option> gray </Option>
          <Option> purple </Option>
          <Option> green</Option>
        </Select>
        <Select name="size" onChange={handleFilters}>
          <Option disabled >
            {" "}
            Size
          </Option>
          <Option> S </Option>
          <Option> M </Option>
          <Option> L </Option>
          <Option> XL </Option>
          <Option> XXL </Option>
        </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={handleSort}>
          
          <Option value="newest" > Newest </Option>
          <Option value="asc"> Price(asc) </Option>
          <Option value="desc"> Price(desc) </Option>
          
        </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
