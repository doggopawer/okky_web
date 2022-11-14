import styled from "styled-components";
import {Link} from "react-router-dom";

const BigMenuReadList = styled.ul`
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

const BigMenuReadItem = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: #111827;
  height: 28px;
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  
  &:hover {
    color: #0090f9;
  }
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;


const BigMenuRead = () => {
    // 리액트 쿼리 훅
    const data = [
        {
            name: "Q&A",
            url: "/qna"
        },
        {
            name: "지식",
            url: "/tech"
        },
        {
            name: "커뮤니티",
            url: "/community"
        },
        {
            name: "이벤트",
            url: "/event"
        },

    ]


    return (
        <BigMenuReadList>
            {
                data.map(({name,url}) => (
                    <BigMenuReadItem to={url}>{name}</BigMenuReadItem>
                ))
            }
        </BigMenuReadList>
    )
}
export default BigMenuRead;