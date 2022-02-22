import styled from "styled-components";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {mobile} from "./Responsive"
const Container= styled.div`
height:40vh;
background-color:#fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`
const Title=styled.h1`
font-size:70px;
margin-bottom:0px;
${mobile({fontSize:"40px"})}
`
const Description= styled.p`
font-size:24px;
margin-bottom:20px;

`

const InputContainer=styled.div`
width:30%;
height:40px;
background-color:white;
display: flex;
justify-content: space-between;
border:1px solid gray;
${mobile({width:"80%"})}
`
const Input=styled.input`
border:none;
flex:8;
`
const Button=styled.button`
background-color: black;
border:none;
flex:2;
`



const Newsletter = () => {
    return (
        <Container>
<Title>Newsletter</Title>
<Description>Newsletter</Description>
<InputContainer>
<Input placeholder="Your email"/>
<Button><SendRoundedIcon style={{color:"white", padding:"5px"}}/></Button>
</InputContainer>
        </Container>
    )
}

export default Newsletter
