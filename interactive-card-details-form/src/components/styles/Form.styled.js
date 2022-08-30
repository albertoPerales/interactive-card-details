import styled from "styled-components";
import { colors, fonts } from "../../helpers/Vars.styled";
import { Button } from "./Button.styled";

const LabelStyle = styled.p`
  letter-spacing: 2px;
  font-weight: 500;
  color: ${colors.veryDarkViolet};
  margin: 0;
`;

const Field = styled.div`
  margin-top: 2em;
`;

const InputStyle = styled.input`
margin-top: 1em;
  width: 100%;
  font-size: 1.2em;
  border: 1px solid ${colors.gris};
  padding: 0.7em 1em;
  border-radius: 10px;
  outline: none;
  color: ${colors.veryDarkViolet};

  &:focus {
    border: 1px solid ${colors.borderGradient};
  }
`;

const FormStyle = styled.form`
  width: 40%;
  height: fit-content;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Form = () => {

  






  return (
    <FormStyle>
      <Field>
        <LabelStyle htmlFor="cardName">CARDHOLDER NAME</LabelStyle>
        <InputStyle
          name="cardName"
          placeholder="e.g Jane Appleseed"
        ></InputStyle>
      </Field>

      <Field>
        <LabelStyle htmlFor="cardNumber">CARD NUMBER</LabelStyle>
        <InputStyle
          name="cardNumber"
          placeholder="e.g 1234 5678 9123 0000"
        ></InputStyle>
      </Field>

      <Flex>
        <Field>
          <LabelStyle htmlFor="expDateMM">EXP. DATE(MM/YY)</LabelStyle>
          <Flex>
            <InputStyle name="expDateMM" placeholder="MM"></InputStyle>
            <InputStyle name="expDateYY" placeholder="YY"></InputStyle>
          </Flex>
        </Field>
        <Field>
          <LabelStyle htmlFor="cvc">CVC</LabelStyle>
          <InputStyle name="cvc" placeholder="e.g. 123"></InputStyle>
        </Field>
      </Flex>

        <Button>Confirm</Button>

    </FormStyle>
  );
};
