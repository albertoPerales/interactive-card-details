import { GlobalStyles } from "./helpers/Global.styled";
import { Container, Background, RightSide } from './components';

function App() {
  return (
    <Container>
      <GlobalStyles></GlobalStyles>
      <Background />
      <RightSide />
    </Container>
  );
}

export default App;
