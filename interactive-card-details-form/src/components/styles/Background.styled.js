import styled from "styled-components";
import desktopImage from "../../img/bg-main-desktop.png";
import { FrontCard } from "./FrontCard.styled";


const Wrapper = styled.div`
  width: 30%;
  min-width: 25em;
  height: 100%;
  position: relative;
  font-family: 'Space Grotesk';
  background: red;
  background: url(${desktopImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

// const BackgroundStyles = styled.img`
//     height: 100%;
// `

export const Background = () => {
  return (
    <Wrapper>
      <FrontCard/>
    </Wrapper>
  )
}
