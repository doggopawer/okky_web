import styled from "styled-components";

const GalleryWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  
  display: flex;
  justify-content: space-between;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default GalleryWrapper;