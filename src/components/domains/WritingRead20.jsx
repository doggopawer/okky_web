import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowsUpDown,
    faBolt,
    faCircleCheck,
    faCommentDots,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import WritingTagRead from "./WritingTagRead";


const WritingReadLayout = styled.div`
  width: 100%;
  height: auto;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const WritingReadList = styled.ul``;


const WritingReadItem = styled.li`
  width: 100%;
  height: 117px;
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

const WritingReadFirstBox = styled.div`
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
const WritingReadFirstLeftBox = styled.div`
`;
const WritingReadFirstRightBox = styled.div`
`;
const WritingReadAdoptText = styled.span`
`;

const WritingReadSecondBox = styled.div`
  width: 100%;
  height: 20px;
  margin: 10px 0;
`
const WritingReadThirdBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const WritingReadThirdLeftBox = styled.div`
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
const WritingReadThirdRightBox = styled.div`
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
  margin-left: 10px;
  color: #374151;
`
const WritingReadCommentText = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #374151;
`
const WritingReadViewsText = styled.span`
  font-size: 14px;
  color: #374151;
`;
const WritingReadSmallMenuText = styled.span`
  display: inline-block;
  width: auto;
  height: auto;
  padding: 4px 8px;
  background: #d1e9fa;
  border-radius: 3px;
  font-size: 12px;
  color: #0090f9;
`;


const WritingRead20 = ({name}) => {
    // 리액트 쿼리 훅
    // 소메뉴 의 name 에 따라 가져오는 데이터가 다르다.
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
            <WritingReadList>
                {
                    data.map(({profile, nick, score, created_at, like_amount, comment_amount, title })=> (
                        <WritingReadItem>
                            <WritingReadFirstBox>
                                <WritingReadFirstLeftBox>
                                    <WritingReadProfileImg src={profile}/>
                                    <WritingReadNickText>{nick}</WritingReadNickText>
                                    <WritingReadScoreText>
                                        <FontAwesomeIcon icon={faBolt}/>
                                        {score}
                                    </WritingReadScoreText>
                                    <WritingReadDateText>{created_at}</WritingReadDateText>    
                                </WritingReadFirstLeftBox>
                                <WritingReadFirstRightBox>
                                    <WritingReadAdoptText>
                                        <FontAwesomeIcon icon={faCircleCheck}/>
                                    </WritingReadAdoptText>
                                </WritingReadFirstRightBox>
                            </WritingReadFirstBox>
                            <WritingReadSecondBox>
                                <WritingReadTitleText>
                                    {title}
                                </WritingReadTitleText>
                            </WritingReadSecondBox>
                            <WritingReadThirdBox>
                                <WritingReadThirdLeftBox>
                                    <WritingReadSmallMenuText>
                                        사는얘기
                                    </WritingReadSmallMenuText>
                                    <WritingTagRead writingId={1}/>
                                </WritingReadThirdLeftBox>
                                <WritingReadThirdRightBox>
                                    <WritingReadViewsText>
                                        <FontAwesomeIcon icon={faEye}/>&nbsp;0
                                    </WritingReadViewsText>
                                    <WritingReadCommentText>
                                        <FontAwesomeIcon icon={faCommentDots}/>&nbsp;0
                                    </WritingReadCommentText>
                                    <WritingReadLikeText>
                                        <FontAwesomeIcon icon={faArrowsUpDown}/>&nbsp;0
                                    </WritingReadLikeText>
                                </WritingReadThirdRightBox>
                            </WritingReadThirdBox>
                        </WritingReadItem>
                    ))
                }
            </WritingReadList>

        </WritingReadLayout>
    )
}

export default WritingRead20;