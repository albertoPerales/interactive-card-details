import styled from "styled-components";
import frontCardImage from "../../img/bg-card-front.png";
import { colors } from "../../helpers/Vars.styled";

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 25%;
  right: -20%;
  border-radius: 10px;
  color: ${colors.white};
  z-index: 2;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  position: absolute;
  z-index: 3;
  left: 8%;
  bottom: 5%;
  letter-spacing: 2px;
  width: 85%;
`;

const CardLogoStyles = styled.svg`
  position: absolute;
  z-index: 3;
  left: 8%;
  top: 10%
`;

const CardImage = styled.img`
  filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.3));
`;

const IbanNumber = styled.h2`
  position: absolute;
  z-index: 3;
  left: 8%;
  bottom: 23%;
  letter-spacing: 10px;
  font-weight: 500;
  font-size: 1.7em;
`;

export const FrontCard = (props) => {
  return (
    <Wrapper>
      <CardLogoStyles>
        <svg
          width="84"
          height="47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
          <path
            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
            stroke="#fff"
          />
        </svg>
      </CardLogoStyles>
      <IbanNumber>9591 6489 1011</IbanNumber>
      <Flex>
        <p>FELICIA LEIRE</p>
        <p>09/26</p>
      </Flex>
      <CardImage src={frontCardImage} />
    </Wrapper>
  );
};
