import styled from "styled-components";

const NavBtn = styled.button`
  display:none;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display: inline-block;
    width: 24px;
    height: 24px;
    
    border: none;
    background: #fff;
    margin-right: 10px;

    font-size: 20px;
    color: #0090f9;
  }
`;

export default NavBtn;