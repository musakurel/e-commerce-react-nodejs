import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import {mobile} from "../components/Responsive"

const Container=styled.div`
width:100vw;
height:80vh;
display:flex;
justify-content:center;
align-items:center;
${mobile({height:"50vh"})}



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
justify-content:center;
flex-direction:column;
`
const Input=styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px; 
padding:8px;
 
`



const Button=styled.button`
width: 35%;
border: none;
padding:8px;
background-color:black;
color:white;
border-radius:5px;
cursor:pointer;
margin:20px 0px;
transition:0.3s ease;
&:hover{
    opacity:0.9;
    transform:scale(1.05);
    }

`
const Link=styled.a`
margin:5px 0px;
text-decoration:underline;
font-size:14px;
`


const Login = () => {
  return (
      <div>
        <Announce/>
        <Navbar/>

      <Container>

      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder=" Password" />
          
          <Button>LOGIN</Button>  
          <Link>Forgot Password</Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
    <Footer/>
      </div>
  );
};

export default Login;
