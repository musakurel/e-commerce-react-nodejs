import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../components/Responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requesMethods";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}

`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "50vh", margin: "0px" })}
`;
const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ margin: "0px 50px" })}
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 20px;
  display: flex;
  justify-content: space-around;
`;
const FilterTitle = styled.h4``;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.option`
  width: 20px;
  height: 23px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 5px;
  margin: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", justifyContent: "center", width: "90%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 15px;
  cursor: pointer;
  ${mobile({ width: "70%", marginTop: "10px" })}

  transition:0.3s ease;
  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor]= useState("")
  const [size, setSize] = useState("");
  const [quantity, setQuantity]= useState(1)

 const handleQuantity=(type)=>{
if(type==="dec"){
    quantity>1 && setQuantity(quantity-1)
}else{
    setQuantity(quantity+1)

}
 }
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  console.log(product);
  return (
    <Container>
      <Announce />
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>

        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((item) =>( 
                <FilterColor color={item} key={item} onClick={()=> setColor(item)} />
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=> handleQuantity("dec")} />
              <Amount>{quantity} </Amount>
              <Add onClick={()=> handleQuantity("inc")}  />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
