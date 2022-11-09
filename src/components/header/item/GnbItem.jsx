import styled from "styled-components";

const GnbItem = styled.li`
  display: inline-block;
  height: 28px;
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default GnbItem;