import styled from "styled-components";

const Left = styled.div`
  width: 640px;
  height: 28px;

  display: flex;
  justify-content: space-between;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    width: 535px;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {}
`;

export default Left;