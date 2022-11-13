import styled from "styled-components";
import MemberAuth from "../../domains/sign-in/MemberAuth";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`
const First = styled.div`
  width: 100%;
  color: #6b7280;
  font-size: 14px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`





const SignInContent = () => {
  return (
      <Wrapper>
        <First>
            <MemberAuth/>
        </First>
      </Wrapper>
  )
}

export default SignInContent;