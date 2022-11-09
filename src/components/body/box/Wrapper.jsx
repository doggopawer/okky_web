import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 1800px;
  border-bottom: 1px solid lightgray;
  
  /* 가운데 정렬  */
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    height: auto;
  }
  
  
`;

export default Wrapper;