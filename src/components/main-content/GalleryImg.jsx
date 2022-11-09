import styled from "styled-components";
import QuestionsImg from "../../resources/questions.svg"

const GalleryImg = styled.div`
  width: 145px;
  height: 68px;
  border-radius: 10px;
  background: url(${QuestionsImg});
  background-size: cover;

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default GalleryImg;