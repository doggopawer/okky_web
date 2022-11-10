import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  width: 85px;
  height: 35px;
  
  border: none;
  border-radius: 35px;
  background: #0090f9;
  
  font-size: 12px;
  color: #fff;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;

const SignUpMove = () => {
  // 리액트 라우터 훅
  return (
      <Button>회원가입</Button>
  )
}


export default SignUpMove;