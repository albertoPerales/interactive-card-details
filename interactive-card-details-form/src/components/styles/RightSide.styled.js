import styled from "styled-components";
import { colors } from "../../helpers/Vars.styled";
import { Form } from "./Form.styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightSide = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};
