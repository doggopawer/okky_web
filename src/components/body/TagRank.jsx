import styled from "styled-components";

const TagRank = styled.div`
  width: 100%;
  height: 230px;
  margin-bottom: 32px;
  

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default TagRank;