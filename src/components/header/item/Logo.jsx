import styled from "styled-components";
import logoImg from "../../../resources/okky-munchkin-logo.svg";

const Logo = styled.div`
  width: 115px;
  height: 28px;
  border: none;
  background-image: url(${logoImg});
  z-index:999;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    margin-left: 15px;
  }
`;

export default Logo;