import styled from "styled-components";

const SearchText = styled.input`
  display: inline-block;
  border-radius: 35px;
  border: none;
  outline: none;
  width: 80%;
  height: 16px;
  background: #fff;
  
  font-size: 12px;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;

export default SearchText;