import styled from "styled-components";

const GalleryHead = styled.div`
  height: 64px;
  border-radius: 10px;
  background: darkgray;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

export default GalleryHead;