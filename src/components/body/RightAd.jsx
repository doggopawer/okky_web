import styled from "styled-components";
import RightAdDesktopImg from "../../resources/right_ad_desktop.jpeg";
import RightAdReactiveImg from "../../resources/right_ad_reactive.jpeg";


const RightAd = styled.div`
  width: 100%;
  height: 380px;
  margin-bottom: 15px;
  background-image: url(${RightAdDesktopImg});

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    width: 640px;
    height: 200px;
    background-image: url(${RightAdReactiveImg});
    background-size: cover;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 23vw;
  }
`;

export default RightAd;