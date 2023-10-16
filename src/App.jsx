import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Button from "./ui/Button";
import Input from "./ui/Input";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in</Heading>
        <Heading as="h3">Check out</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        <Input type="text" placeholder="Number of guests" />
        <Input type="text" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
