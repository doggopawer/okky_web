import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsUpDown, faBolt, faCommentDots} from "@fortawesome/free-solid-svg-icons";
import QuestionsImg from "../../resources/questions.svg";


const WritingReadLayout = styled.div`
  width: 47%;
  height: 452px;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;
const WritingReadBox = styled.div`
  height: 64px;
  border-radius: 10px;
  background: #dae2f0;
  
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
const WritingReadBox2 = styled.div`
  display: inline-block;
  font-weight: bold;
  font-size: 18px;

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const WritingReadBox3 = styled.div`
  width: 145px;
  height: 68px;
  border-radius: 10px;
  background: url(${QuestionsImg});
  background-size: cover;

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const WritingReadList = styled.ul`
  
`


const WritingReadItem = styled.li`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid lightgray;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {}
`;

const WritingReadBox4 = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

const WritingReadBox6 = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const WritingReadBox7 = styled.div`
  width: auto;
  height: 20px;
  display: flex;
  align-items: center;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const WritingReadBox5 = styled.div`
  width: 100%;
  height: 20px;
`

const WritingReadTitleText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`


const WritingReadProfileImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-size: cover;
`
const WritingReadNickText = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #111827;
`
const WritingReadScoreText = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #686868;
`
const WritingReadDateText = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #838383;
`
const WritingReadLikeText = styled.span`
  font-size: 14px;
  color: #6b7280;
`
const WritingReadCommentText = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #6b7280;
`


const WritingRead5 = () => {
    // 리액트 쿼리 훅
    const data = [
        {
          profile : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
          nick : "카피닌자",
          score : "250",
          created_at : "12분 전",
          like_amount : "5",
          comment_amount : "6",
          title : "자바스크립트가 이상하게 작동합니다... 도와주세요!"
        },
        {
            profile : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            nick : "카피닌자",
            score : "250",
            created_at : "12분 전",
            like_amount : "5",
            comment_amount : "6",
            title : "자바스크립트가 이상하게 작동합니다... 도와주세요!"
        },
        {
            profile : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            nick : "카피닌자",
            score : "250",
            created_at : "12분 전",
            like_amount : "5",
            comment_amount : "6",
            title : "자바스크립트가 이상하게 작동합니다... 도와주세요!"
        },
        {
            profile : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            nick : "카피닌자",
            score : "250",
            created_at : "12분 전",
            like_amount : "5",
            comment_amount : "6",
            title : "자바스크립트가 이상하게 작동합니다... 도와주세요!"
        },
        {
            profile : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            nick : "카피닌자",
            score : "250",
            created_at : "12분 전",
            like_amount : "5",
            comment_amount : "6",
            title : "자바스크립트가 이상하게 작동합니다... 도와주세요!"
        },
    ]

    return (
        <WritingReadLayout>
            <WritingReadBox>
                <WritingReadBox2>Q&A</WritingReadBox2>
                <WritingReadBox3/>
            </WritingReadBox>
            <WritingReadList>
                {
                    data.map(({profile, nick, score, created_at, like_amount, comment_amount, title })=> (
                        <WritingReadItem>
                            <WritingReadBox4>
                                <WritingReadBox6>
                                    <WritingReadProfileImg src={profile}/>
                                    <WritingReadNickText>{nick}</WritingReadNickText>
                                    <WritingReadScoreText>
                                        <FontAwesomeIcon icon={faBolt}/>
                                        {score}
                                    </WritingReadScoreText>
                                    <WritingReadDateText>{created_at}</WritingReadDateText>
                                </WritingReadBox6>
                                <WritingReadBox7>
                                    <WritingReadLikeText>
                                        <FontAwesomeIcon icon={faArrowsUpDown}/>&nbsp;0
                                    </WritingReadLikeText>
                                    <WritingReadCommentText>
                                        <FontAwesomeIcon icon={faCommentDots}/>&nbsp;0
                                    </WritingReadCommentText>
                                </WritingReadBox7>
                            </WritingReadBox4>
                            <WritingReadBox5>
                                <WritingReadTitleText>{title}</WritingReadTitleText>
                            </WritingReadBox5>
                        </WritingReadItem>
                    ))
                }
            </WritingReadList>

        </WritingReadLayout>
    )
}

export default WritingRead5;