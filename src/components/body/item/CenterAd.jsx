import styled from "styled-components";

const CenterAd = styled.div`
  width: 90%;
  height: 140px;
  margin-bottom: 32px;
  background: olive;

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

export default CenterAd;