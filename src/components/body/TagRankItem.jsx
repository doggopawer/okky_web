import styled from "styled-components";

const TagRankItem = styled.div`
  width: 100%;
  height: 16px;
  margin-bottom: 32px;
  

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default TagRankItem;