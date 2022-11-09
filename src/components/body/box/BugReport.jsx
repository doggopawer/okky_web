import styled from "styled-components";

const BugReport = styled.div`
  width: 100%;
  height: 64px;
  background: darkcyan;
  margin-bottom: 32px;
  

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    width: 90vw;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default BugReport;