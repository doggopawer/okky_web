import styled from "styled-components";

const Wrapper = styled.div`
  width: 316px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Item = styled.span`
  color: #4b5563;
  font-size: 16px;
`




const SmallMenuList = ({name}) => {
    // 리액트 쿼리 훅
    const data = [
        {
            name : "기술",
        },
        {
            name : "커리어",
        },
        {
            name : "기타",
        },
        {
            name : "전체",
        },
    ]
    return (
        <Wrapper>
            {
                data.map(({name})=> (
                    <Item>{name}</Item>
                ) )
            }
        </Wrapper>
    )
}

export default SmallMenuList;