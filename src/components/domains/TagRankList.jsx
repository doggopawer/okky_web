import styled from "styled-components";

const Wrapper = styled.div`
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
const Head = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
  

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const Item = styled.li`
  width: 100%;
  height: 16px;
  margin-bottom: 32px;
  list-style: none;

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;

const TagRankList = () => {
    // 리액트 쿼리 훅
    const data = [
        {
            name: "java"
        },
        {
            name: "java"
        },
        {
            name: "java"
        },
        {
            name: "java"
        },
        {
            name: "java"
        },
    ]
    return (
        <Wrapper>
            <Head>#인기 태그</Head>
            {
                data.map(({name}) => (
                    <Item>
                       # {name}
                    </Item>
                ))
            }
        </Wrapper>
    )
}

export default TagRankList;