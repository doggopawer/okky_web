import styled from "styled-components";

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 455px;
  height: 35px;
  
  

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    width: 348px;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export default Right;