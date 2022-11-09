import styled from "styled-components";

const SimpleList = styled.div`
  width: 47%;
  height: 452px;
  

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export default SimpleList;