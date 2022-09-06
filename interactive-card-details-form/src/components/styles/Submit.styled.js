import styled from "styled-components";
import { Button } from "./Button.styled";
import { colors } from "../../helpers/Vars.styled";

const SubmitMessage = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubmitTitle = styled.h1`
  letter-spacing: 2px;
  font-weight: 500;
  color: ${colors.veryDarkViolet};
  margin-top: 1.2em;
`;

const SubmitP = styled.p`
  letter-spacing: 2px;
  font-weight: 500;
  color: rgb(153, 151, 154);
  margin: 0;
`;

export const Submit = () => {
  return (
    <SubmitMessage>
      <svg
        width="80"
        height="80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="40" fill="url(#a)" />
        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
        <defs>
          <linearGradient
            id="a"
            x1="-23.014"
            y1="11.507"
            x2="0"
            y2="91.507"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6348FE" />
            <stop offset="1" stop-color="#610595" />
          </linearGradient>
        </defs>
      </svg>
      <SubmitTitle>THANK YOU!</SubmitTitle>
      <SubmitP>We've added your card details</SubmitP>
      <Button>Continue</Button>
    </SubmitMessage>
  );
};
