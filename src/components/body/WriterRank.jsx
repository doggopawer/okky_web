import styled from "styled-components";

const WriterRank = styled.div`
  width: 100%;
  height: 237px;
  margin-bottom: 32px;
  

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default WriterRank;