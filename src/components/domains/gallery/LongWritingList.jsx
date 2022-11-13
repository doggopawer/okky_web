import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsUpDown, faBolt, faCommentDots} from "@fortawesome/free-solid-svg-icons";


const Wrapper = styled.div`
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

const Body = styled.div``;


const Item = styled.li`
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

const FirstLine = styled.div`
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

const Left = styled.div`
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
const Right = styled.div`
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
const SecondLine = styled.div`
  width: 100%;
  height: 20px;
`

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`


const Profile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-size: cover;
`
const Nick = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #111827;
`
const Score = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #686868;
`
const Date = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #838383;
`
const Like = styled.span`
  font-size: 14px;
  color: #6b7280;
`
const Comment = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #6b7280;
`


const WritingList = ({}) => {
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
        <Wrapper>
            <Body>
                {
                    data.map(({profile, nick, score, created_at, like_amount, comment_amount, title })=> (
                        <Item>
                            <FirstLine>
                                <Left>
                                    <Profile src={profile}/>
                                    <Nick>{nick}</Nick>
                                    <Score>
                                        <FontAwesomeIcon icon={faBolt}/>
                                        {score}
                                    </Score>
                                    <Date>{created_at}</Date>
                                </Left>
                                <Right>
                                    <Like>
                                        <FontAwesomeIcon icon={faArrowsUpDown}/>&nbsp;0
                                    </Like>
                                    <Comment>
                                        <FontAwesomeIcon icon={faCommentDots}/>&nbsp;0
                                    </Comment>
                                </Right>
                            </FirstLine>
                            <SecondLine>
                                <Title>
                                    {title}
                                </Title>
                            </SecondLine>
                        </Item>
                    ))
                }
            </Body>

        </Wrapper>
    )
}

export default WritingList;