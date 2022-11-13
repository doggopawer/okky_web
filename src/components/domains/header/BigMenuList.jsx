import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  
  width: 419px;
  height: 28px;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  display: inline-block;
  height: 28px;
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;


const BigMenuList = () => {
    // 리액트 쿼리 훅
    const data = [
        {
            name: "Q&A"
        },
        {
            name: "지식"
        },
        {
            name: "커뮤니티"
        },
        {
            name: "이벤트"
        },
        {
            name: "JOBS"
        },
        {
            name: "공지사항"
        },
    ]


    return (
        <Wrapper>
            {
                data.map(({name}) => (
                    <Item>{name}</Item>
                ))
            }
        </Wrapper>
    )
}
export default BigMenuList;