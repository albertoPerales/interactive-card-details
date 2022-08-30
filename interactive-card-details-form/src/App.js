import { GlobalStyles } from "./helpers/Global.styled";
import { Container } from "./components";
import { Background } from "./components";

function App() {
  return (
    <Container>
      <GlobalStyles></GlobalStyles>
      <Background />
    </Container>
  );
}

export default App;
