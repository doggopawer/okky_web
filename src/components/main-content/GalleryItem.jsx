import styled from "styled-components";

const GalleryItem = styled.li`
  width: 90vw;
  height: 80px;
  
  list-style: none;
  
  font-size: 14px;
  color: lightgray;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default GalleryItem;