import styled from "styled-components";
import LeftAdDesktopImg from "../../resources/left_ad_desktop.jpeg"
import LeftAdReactiveImg from "../../resources/left_ad_reactive.jpeg"

const LeftAd = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 32px;
  background-image: url(${LeftAdDesktopImg});
  background-size: cover;

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    width: 640px;
    height: 200px;
    background-image: url(${LeftAdReactiveImg});
    background-size: cover;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 23vw;
  }
`;

export default LeftAd;