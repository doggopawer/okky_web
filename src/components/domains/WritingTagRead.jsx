import styled from "styled-components";


const WritingTagReadList = styled.ul`
  display: flex;
`;
const WritingTagReadItem = styled.li`
  color: #4b5563;
  font-size: 14px;
  margin-left: 10px;
`;

const WritingTagRead = ({writingId}) => {
    // 리액트 쿼리 훅
    const data = [
        {
            name : "react",
        },
        {
            name : "php",
        }
    ]



    return (
        <WritingTagReadList>
            {
                data.map(({name})=> (
                    <WritingTagReadItem>
                        #{name}
                    </WritingTagReadItem>
                ))
            }
        </WritingTagReadList>
    )
}
export default WritingTagRead;