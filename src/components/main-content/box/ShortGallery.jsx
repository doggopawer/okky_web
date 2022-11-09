import styled from "styled-components";

const SimpleList = styled.div`
  width: 47%;
  height: 452px;
  
  background: aqua;

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default SimpleList;