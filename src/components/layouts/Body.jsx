import TagRankRead from "../domains/TagRankRead";
import AdSense from "../domains/AdSense";
import WriterRankRead from "../domains/WriterRankRead";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


const BodyLayout = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid lightgray;
  
  /* 가운데 정렬  */
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`;
const BodyBox = styled.div`
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
const BodyLeftBox = styled.div`
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
const BodyCenterBox = styled.div`
  
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
const BodyRightBox = styled.div`
  flex-basis: 180px;
  flex-shrink: 0;
  height: 100%;
  
  // 1280px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

const BodyLeftInnerBox = styled.div`
  width: 100%;
  height: 64px;
  border-radius: 7.5px;
  margin-bottom: 32px;
  background: #eff6ff;
  
  display: flex;
  align-items: center;

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    width: 90vw;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const BodyBugReportLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  width: 32px;
  height: 32px;
  padding: 6px;
  margin:6px;
  border-radius: 5px;
  box-sizing: border-box;
  background: #a5d1f6;

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const BodyBugReportText = styled.span`
  
  font-size: 11.6px;

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

function Body ({content}) {

    return (
        <BodyLayout>
            <BodyBox>
                <BodyLeftBox>
                    <TagRankRead/>
                    <AdSense/>
                    <BodyLeftInnerBox>
                        <BodyBugReportLink>
                            <FontAwesomeIcon icon={faBullhorn}/>
                        </BodyBugReportLink>
                        <BodyBugReportText>
                            버그와 제안은 여기에 댓글로 남겨주세요
                        </BodyBugReportText>
                    </BodyLeftInnerBox>
                    <WriterRankRead/>
                </BodyLeftBox>
                <BodyCenterBox>
                    <AdSense/>
                    {content}
                </BodyCenterBox>
                <BodyRightBox>
                </BodyRightBox>
            </BodyBox>
        </BodyLayout>
    )
}

export default Body;