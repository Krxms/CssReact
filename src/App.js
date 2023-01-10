import './App.css';
import styled from 'styled-components';
import logo from './assets/logo.png'


const Image = styled.img`
width: 35vh;
border: solid;
background-color: white;
border-radius: 10px;
`;

const Container = styled.div`
display: flex;
justify-content: center;
`;

const Card = styled.div`
background-color: lightblue;
display: flex;
flex-direction: column;
justify-content: space-around;
box-shadow: 2px 2px 2px;
border-radius: 15px;
height: 50vh;
width: 100vh;
`;

const Text = styled.div`
display: flex;
`;

const Title = styled.div`
display: flex;
flex-direction: column;
background-color: white;
padding-left: 25%;
border: solid;
border-radius: 10px;
width: 80%;
`;

const H1 = styled.h1`
font-family: "Helvetica";
font-size: 60px;
`;

const H2 = styled.h2`
font-family: "Arial";
font-style: italic;
`;

const H3 = styled.h3`
font-family: "Arial";
color: black;
text-align: center;
font-size: 25px;
`;

const RateDiv = styled.div`
display: flex;
justify-content: center;
`;

const Rate = styled.div`
background-color: white;
border: solid;
border-radius: 80px;
width: 60%;
`;




function App() {
  return (
    <Container>
      <Card>
        <Text>
      <Image src={logo} alt='Logo of the album'></Image>
      <Title>
      <H1>Rozes</H1>
      <H2>Under the grave</H2>
      </Title>
      </Text>
      <RateDiv>
      <Rate>
        <H3>Rate this album ⭐ ⭐ ⭐ ⭐ ⭐</H3>
      </Rate>
      </RateDiv>
      </Card>
    </Container>
  );
}


export default App;
