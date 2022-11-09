import styled from "styled-components";
import ProfileImg from "../../resources/profile_img.webp"

const WritingInfoRight = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  
  background-image: url(${ProfileImg});
  background-size: cover;

  display: flex;
  justify-content: space-between;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default WritingInfoRight;