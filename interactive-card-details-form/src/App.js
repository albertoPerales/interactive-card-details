import { GlobalStyles } from "./helpers/Global.styled";
import { Container, Background, RightSide } from "./components";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <Container>
        <GlobalStyles></GlobalStyles>
        <Background />
        <RightSide />
      </Container>
    </FormProvider>
  );
}

export default App;
