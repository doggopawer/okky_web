import styled from "styled-components";

const Wrapper = styled.div`
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
const Item = styled.div`
  width: 100%;
  height: 16px;
  margin-bottom: 32px;
  

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;



const WriterRankList = () => {
    // 리액트 훅
    const data = [
        {
            name: "frostDog"
        },
        {
            name: "무명시민"
        },
        {
            name: "JungleVeryQ"
        },
        {
            name: "톰소여"
        },
        {
            name: "카피닌자"
        },
    ]
  return (
      <Wrapper>
          <Head>Top Writers</Head>
          {
              data.map(({name})=> (
                  <Item>{name}</Item>
              ))
          }
      </Wrapper>
  )
}
export default WriterRankList;