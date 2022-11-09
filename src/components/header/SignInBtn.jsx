import styled from "styled-components";

const SignInBtn = styled.button`
  display: inline-block;
  width: 85px;
  height: 35px;
  border: 1px solid #0090f9;
  border-radius: 35px;
  background: #fff;
  
  font-size: 12px;
  color: #0090f9;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;

export default SignInBtn;