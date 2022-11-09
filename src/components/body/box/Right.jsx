import styled from "styled-components";

const Right = styled.div`
  flex-basis: 180px;
  flex-shrink: 0;
  height: 100%;
  
  background: blue;
  

  // 1280px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default Right;