import styled from "styled-components";

const Whole = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: darkgreen;
  
  // 1280px 이하
  @media only screen and (max-width: 1280px) {
    width: 100%;
  }


  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  
  
`;

export default Whole;