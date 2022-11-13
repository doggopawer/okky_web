import styled from "styled-components";
import WritingList from "../domains/main/WritingList";

const Wrapper = styled.div`
  width: 90%;
  height: 100%;

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const Layout = styled.div`
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
            <Wrapper>
                <Layout>
                    <WritingList/>
                    <WritingList/>
                </Layout>
                <Layout>
                    <WritingList/>
                    <WritingList/>
                </Layout>
                <Layout>
                    <WritingList/>
                    <WritingList/>
                </Layout>
            </Wrapper>
    )
}

export default MainContent;