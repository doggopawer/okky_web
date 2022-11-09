import styled from "styled-components";

const BugReportIconBox = styled.div`
  width: 32px;
  height: 32px;
  padding: 6px;
  margin:6px;
  border-radius: 5px;
  box-sizing: border-box;
  background: #a5d1f6;

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default BugReportIconBox;