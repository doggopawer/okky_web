import styled from "styled-components";
import SmallMenuRead from "../../domains/SmallMenuRead";

const GalleryContentLayout = styled.div`
  width: 90%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;



const GalleryContent = ({name, description}) => {

    return (
        <GalleryContentLayout>
            <SmallMenuRead name={name} description={description}/>
        </GalleryContentLayout>
    )
}

export default GalleryContent;