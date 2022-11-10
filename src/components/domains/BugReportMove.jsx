import styled from "styled-components";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
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
const Left = styled.div`
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
const Right = styled.div`
  
  font-size: 11.6px;

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const BugReportMove = () => {

    return (
        <Wrapper>
            <Left>
                <FontAwesomeIcon icon={faBullhorn}/>
            </Left>
            <Right>
                버그와 제안은 여기에 댓글로 남겨주세요
            </Right>
        </Wrapper>
    )
}

export default BugReportMove;