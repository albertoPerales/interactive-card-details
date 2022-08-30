import styled from "styled-components";
import { colors } from "../../helpers/Vars.styled";

export const Button = styled.button`
  width: 100%;
  margin: auto;
  background: ${colors.veryDarkViolet};
  color: ${colors.white};
  border-radius: 10px;
  border: none;
  font-size: 1.2em;
  margin-top: 2em;
  padding: 1em;

  &:hover {
    cursor: pointer; 
  }
`;
