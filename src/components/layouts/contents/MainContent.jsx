import styled from "styled-components";
import WritingRead5 from "../../domains/WritingRead5";

const MainContentLayout = styled.div`
  width: 90%;
  height: 100%;

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const MainContentBox = styled.div`
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
function MainContent() {

    return (
            <MainContentLayout>
                <MainContentBox>
                    <WritingRead5/>
                    <WritingRead5/>
                </MainContentBox>
                <MainContentBox>
                    <WritingRead5/>
                    <WritingRead5/>
                </MainContentBox>
                <MainContentBox>
                    <WritingRead5/>
                    <WritingRead5/>
                </MainContentBox>
            </MainContentLayout>
    )
}

export default MainContent;