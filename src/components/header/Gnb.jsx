import styled from "styled-components";

const Gnb = styled.ul`
  display: flex;
  justify-content: space-between;
  
  width: 419px;
  height: 28px;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default Gnb;