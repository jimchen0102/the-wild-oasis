import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Title>The Wild Oasis</Title>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        <Input type="text" placeholder="Number of guests" />
        <Input type="text" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
