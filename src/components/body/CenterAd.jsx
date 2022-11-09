import styled from "styled-components";
import CenterAdDesktopImg from "../../resources/center_ad_desktop.png"
import CenterAdReactiveImg from "../../resources/cetner_ad_reactive.png";

const CenterAd = styled.div`
  width: 90%;
  height: 140px;
  background-image: url(${CenterAdDesktopImg});
  margin-bottom: 32px;

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    width: 640px;
    height: 200px;
    background-image: url(${CenterAdReactiveImg});
    background-size: cover;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 23vw;
  }
`;

export default CenterAd;