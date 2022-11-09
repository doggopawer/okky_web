import styled from "styled-components";

const Left = styled.div`
  flex-basis: 180px;
  flex-shrink: 0;
  height: 100%;
  background: blueviolet;
  

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    display:flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default Left;