import styled from "styled-components";

const RightAd = styled.div`
  width: 100%;
  height: 380px;
  margin-bottom: 15px;
  background: chartreuse;

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    width: 640px;
    height: 200px;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 23vw;
  }
`;

export default RightAd;