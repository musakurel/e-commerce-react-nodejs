
import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import {mobile} from "../components/Responsive"

const Container=styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
${mobile({height:"60vh"})}
`

const Wrapper=styled.div`
padding:20px;
width:40%;
${mobile({width:"90%"})}
`
const Title=styled.h1`
text-transform: uppercase;
	background: linear-gradient(to right, #30CFD0 0%, #330867 50%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size:60px;
`
const Form=styled.form`
display:flex;
flex-wrap:wrap;

`
const Input=styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px; 
padding:8px;

`
const Agreement=styled.span`
font-size:12px;
margin:20px 10px;

`


const Button=styled.button`
width: 35%;
border: none;
padding:8px;
background-color:black;
color:white;
border-radius:5px;
cursor:pointer;
transition:0.3s ease;
&:hover{
    opacity:0.9;
    transform:scale(1.05);
    }

`


const Register = () => {
    return (
        <div>
        <Announce/>
        <Navbar/>
        <Container>
<Wrapper>
<Title>CREATE ACCOUNT</Title>
<Form>
<Input  placeholder="Name"/>
<Input  placeholder="Last Name"/>
<Input  placeholder="Email"/>
<Input  placeholder="Username"/>
<Input  placeholder=" Password"/>
<Input  placeholder="Confirm Password"/>
<Agreement> Commodi voluptas, amet modi cum aliquid omnis. <b>PRIVACY POLICY</b> </Agreement>
<Button>REGISTER</Button>
</Form>

</Wrapper>

        </Container>
        <Footer/>
        </div>
    )
}

export default Register
