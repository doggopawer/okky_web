import styled from "styled-components";

const Whole = styled.div`
  width: 1200px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  // 1280px 이하
  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export default Whole;