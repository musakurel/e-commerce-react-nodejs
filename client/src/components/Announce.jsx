import styled from "styled-components";


const Container = styled.div`
  height: 30px;
  background-color: teal;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;

`;

const Announce = () => {
  return (
      <Container>
        Free ship over 150 orders!
      </Container>
  )
};

export default Announce;
