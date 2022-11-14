import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";

const WriterRankList = styled.div`
  width: 100%;
  height: 237px;
  margin-bottom: 32px;
  

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const WriterRankHead = styled.div`
  width: 100%;
  height: 20px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid lightgray;
  
  color: #111827;
  font-size: 14px;
  font-weight: bolder;
  
  // 1280px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const WriterRankReadItem = styled.div`
  width: 100%;
  height: 16px;
  margin-bottom: 20px;
  
  display: flex;
  justify-content: space-between;
  
  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const WriterRankReadBox = styled.div`
  display: flex;
  align-items: center;
`;
const WriterRankReadProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-size: cover;
`
const WriterRankReadNickSpan = styled.span`
  font-size: 12px;
  color: #111827;
`;
const WriterRankReadScoreSpan = styled.span`
  color: #374151;
  font-size: 12px;  
`;


const WriterRankRead = () => {
    // 리액트 훅
    const data = [
        {
            profile : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            nick: "frostDog",
            score: 133,
        },
        {
            profile : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            nick: "무명시민",
            score: 123,
        },
        {
            profile : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            nick: "JungleVeryQ",
            score: 79
        },
        {
            profile : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            nick: "톰소여",
            score: 78,
        },
        {
            profile : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            nick: "카피닌자",
            score: 76
        },
    ]
  return (
      <WriterRankList>
          <WriterRankHead>Top Writers</WriterRankHead>
          {
              data.map(({profile,nick, score })=> (
                  <WriterRankReadItem>
                      <WriterRankReadBox>
                          <WriterRankReadProfileImg src={profile}/>
                          <WriterRankReadNickSpan>{nick}</WriterRankReadNickSpan>
                      </WriterRankReadBox>
                      <WriterRankReadScoreSpan>
                          <FontAwesomeIcon icon={faTrophy}/>
                          &nbsp;{score}
                      </WriterRankReadScoreSpan>
                  </WriterRankReadItem>
              ))
          }
      </WriterRankList>
  )
}
export default WriterRankRead;