import styled from "styled-components";

const TagRankReadList = styled.div`
  width: 100%;
  height: 230px;
  margin-bottom: 32px;
  

  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const TagRankReadHead = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
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
const TagRankReadItem = styled.li`
  width: 100%;
  height: 16px;
  margin-bottom: 20px;
  list-style: none;
  color: #111827;
  font-size: 14px;
  
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
const Name = styled.div`
  color: #111827;
  font-weight: 500;
`
const Amount = styled.div`
  color: #0090f9;
  font-weight: 500;
`

const TagRankRead = () => {
    // 리액트 쿼리 훅
    const data = [
        {
            name: "java",
            amount: 52
        },
        {
            name: "javascript",
            amount: 46
        },
        {
            name: "spring",
            amount: 34,
        },
        {
            name: "springboot",
            amount: 27,
        },
        {
            name: "react",
            amount: 26,
        },
    ]
    return (
        <TagRankReadList>
            <TagRankReadHead>#인기 태그</TagRankReadHead>
            {
                data.map(({name, amount}) => (
                    <TagRankReadItem>
                       <Name># {name}</Name>
                        <Amount>{amount}</Amount>
                    </TagRankReadItem>
                ))
            }
        </TagRankReadList>
    )
}

export default TagRankRead;