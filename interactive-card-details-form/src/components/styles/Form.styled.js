import { useContext, useState } from "react";
import styled from "styled-components";

import FormContext from "../../context/FormContext";
import { colors } from "../../helpers/Vars.styled";
import { Button } from "./Button.styled";
import { Submit } from "./Submit.styled";

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
  width: 100%;
  height: fit-content;
`;
const Center = styled.div`
  width: 35%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Form = () => {
  const {
    setCardName,
    setCardNumber,
    setCvc,
    setMM,
    setYY,
    isSubmitted,
    setIsSubmitted,
  } = useContext(FormContext);

  /*Handlers*/
  const handleCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleCardNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardCVC = (e) => {
    setCvc(e.target.value);
  };

  const handleCardMM = (e) => {
    setMM(e.target.value);
  };

  const handleCardYY = (e) => {
    setYY(e.target.value);
  };

  /*Validate form*/
  const validateForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }
  
  return (
    <Center>
      {isSubmitted ? (
        <Submit />
      ) : (
        <FormStyle onSubmit={validateForm}>
          <Field>
            <LabelStyle htmlFor="cardName">CARD NAME</LabelStyle>
            <InputStyle
              name="cardName"
              type="text"
              maxlength="10"
              placeholder="e.g Jane Appleseed"
            ></InputStyle>
            
          </Field>

          <Field>
            <LabelStyle htmlFor="cardNumber">CARD NUMBER</LabelStyle>
            <InputStyle
              name="cardNumber"
              type="text"
              maxlength="16"
              placeholder="e.g 1234 5678 9123 0000"
              onChange={handleCardNumber}
              // required
            ></InputStyle>
          </Field>

          <Flex>
            <Field>
              <LabelStyle htmlFor="expDateMM">EXP. DATE(MM/YY)</LabelStyle>
              <Flex>
                <InputStyle
                  type="text"
                  maxlength="2"
                  name="expDateMM"
                  placeholder="MM"
                  onChange={handleCardMM}
                  // required
                ></InputStyle>
                <InputStyle
                  type="text"
                  maxlength="2"
                  name="expDateYY"
                  placeholder="YY"
                  onChange={handleCardYY}
                  // required
                ></InputStyle>
              </Flex>
            </Field>
            <Field>
              <LabelStyle htmlFor="cvc">CVC</LabelStyle>
              <InputStyle
                maxlength="4"
                name="cvc"
                placeholder="e.g. 123"
                onChange={handleCardCVC}
                // required
              ></InputStyle>
            </Field>
          </Flex>

          <Button>Confirm</Button>
        </FormStyle>
      )}
    </Center>
  );
};
