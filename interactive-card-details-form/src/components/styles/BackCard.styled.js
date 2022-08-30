import styled from "styled-components";
import backCardImage from "../../img/bg-card-back.png";
import { colors } from "../../helpers/Vars.styled";

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 57%;
  right: -40%;
  border-radius: 10px;
  color: ${colors.white};
  z-index: 2;
  transition: transform ease-in-out 0.2s;

  &:hover {
    transform: scale(1.1) rotate(2deg);
  }
`;

const CardImage = styled.img`
  filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.3));
`;

const CarCvv = styled.p`
  position: absolute;
  z-index: 3;
  right: 12%;
  bottom: 40%;
  letter-spacing: 10px;
  font-weight: 500;
`;

export const BackCard = (props) => {
  return (
    <Wrapper>
        <CarCvv>000</CarCvv>
      <CardImage src={backCardImage} alt="Preview of the back card" />
    </Wrapper>
  );
};
