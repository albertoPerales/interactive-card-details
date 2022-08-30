import styled from "styled-components";
import desktopImage from "../../img/bg-main-desktop.png";
import { FrontCard, BackCard } from '../../components'

const Wrapper = styled.div`
  width: 40%;
  min-width: 25em;
  height: 100%;
  position: relative;
  font-family: 'Space Grotesk';
  background: red;
  background: url(${desktopImage});
  background-repeat: no-repeat;
  background-size: cover;
`;


export const Background = () => {
  return (
    <Wrapper>
      <FrontCard/>
      <BackCard />
    </Wrapper>
  )
}
