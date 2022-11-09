import styled from "styled-components";

const SearchTextDeco = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 35px;
  border: 1px solid lightgray;
  
  width: 235px;
  height: 35px;
  background: #fff;
  
  font-size: 10px;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    width: 160px;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;

export default SearchTextDeco;