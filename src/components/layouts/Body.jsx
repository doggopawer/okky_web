import TagRankList from "../domains/TagRankList";
import AdSense from "../domains/AdSense";
import BugReportMove from "../domains/BugReportMove";
import WriterRankList from "../domains/WriterRankList";
import styled from "styled-components";


const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
  border-bottom: 1px solid lightgray;
  
  /* 가운데 정렬  */
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`;
const Layout = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: center;
  
  
  // 1280px 이하
  @media only screen and (max-width: 1280px) {
    width: 100%;
  }


  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const Left = styled.div`
  flex-basis: 180px;
  flex-shrink: 0;
  height: 100%;
  

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    display:flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
  
`;
const Center = styled.div`
  
  width: 70vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const Right = styled.div`
  flex-basis: 180px;
  flex-shrink: 0;
  height: 100%;
  
  // 1280px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;


function Body ({content}) {

    return (
        <Wrapper>
            <Layout>
                <Left>
                    <TagRankList/>
                    <AdSense/>
                    <BugReportMove/>
                    <WriterRankList/>
                </Left>
                <Center>
                    <AdSense/>
                    {content}
                </Center>
                <Right>
                </Right>
            </Layout>
        </Wrapper>
    )
}

export default Body;