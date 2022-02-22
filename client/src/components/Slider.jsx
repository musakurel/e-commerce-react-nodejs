import { useState } from "react";
import { sliderItems } from "../data";
import {mobile} from "./Responsive"
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
  ${mobile({height: "20vh"})}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  ${mobile({height: "20vh"})}
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;

  height: 100vh;
  justify-content: center;
  background-color: ${(props) => props.bg};
  ${mobile({height: "20vh"})}
`;
const ImgContainer = styled.div`
  flex: 1;
 
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  backdrop-filter: blur(2px);
  margin-left: 50px;
  ${mobile({height: "20vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flex:"2" })}
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile({fontSize: "30px"})}
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({margin: "0px 0px", fontSize:"12px"})}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({fontSize: "12px", padding:"5px"})}
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    } else {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
  };

  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowBackIosRounded />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("left")}>
          <ArrowForwardIosRounded />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
