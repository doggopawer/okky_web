import styled from "styled-components";

const Center = styled.div`
  width: 896px;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  background: tomato;
  

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default Center;