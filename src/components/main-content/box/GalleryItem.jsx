import styled from "styled-components";

const GalleryItem = styled.li`
  width: 100%;
  height: 80px;
  
  background: steelblue;

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default GalleryItem;