import styled from "styled-components";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { mobile } from "./Responsive";

const Container= styled.div`
display:flex;
${mobile({flexDirection:"column", justifyContent: "center"})}
`
const Left= styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
${mobile({justifyContent: "center", alignItems: "center"})}
`
const Logo=styled.h1`

`
const Description=styled.p`
margin:20px 0px;
`
const SocialContainer=styled.div`
display:flex;

`
const SocialIcon=styled.div`
width:40px;
margin:5px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
justify-content:center;
align-items:center;
`
const Center= styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`
const Title=styled.h3`
margin-bottom:30px;
`

const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem=styled.li`
width:50%;
margin-bottom:10px;
`
const Right= styled.div`
flex:1;
padding:20px;
${mobile({justifyContent: "center", alignItems: "center"})}

`

const ContactItem=styled.div`
display:flex;
align-items:center;

`

const Payment=styled.img`
height:40px;
`
const Footer = () => {
    return (
        <Container>

<Left>
<Logo>NEWSTORE </Logo>
<Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quisquam debitis porro dicta deserunt tempora fuga sed assumenda id quos?</Description>
<SocialContainer>
    <SocialIcon color="3B5999">
<FacebookRoundedIcon/>
    </SocialIcon>
    <SocialIcon color="E4405F">
<InstagramIcon/>
    </SocialIcon>
    <SocialIcon color="55ACEE">
<TwitterIcon/>
    </SocialIcon>
</SocialContainer>

</Left>
<Center>
<Title>Useful Links</Title>
<List>

    <ListItem>Home</ListItem>
    <ListItem>Cart</ListItem>
    <ListItem>Man Fashion</ListItem>
    <ListItem>Women Fashion</ListItem>
    <ListItem>Accessories</ListItem>
    <ListItem>My Account</ListItem>
    <ListItem>Order Tracking</ListItem>
    <ListItem>Wishlist</ListItem>
</List>

</Center>

<Right>

<Title>Contact</Title>
<ContactItem><HomeIcon style={{padding:"0px 10px"}} />
623 Street. Anafartalar Cad. Istanbul/TURKEY

</ContactItem>
<ContactItem><LocalPhoneIcon style={{padding:"0px 10px"}} />
+90 1234 5678
</ContactItem>
<ContactItem><EmailIcon style={{padding:"0px 10px"}} />
musakurel@gmail.com
</ContactItem>
<Payment src="https://www.rhodesgraduation.com/wp-content/uploads/cards.png" />
</Right>
        </Container>
    )
}

export default Footer
