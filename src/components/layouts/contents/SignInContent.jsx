import styled from "styled-components";
import MemberAuth from "../../domains/sign-in/MemberAuth";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`


const SignInContent = () => {
  return (
      <Wrapper>
            <MemberAuth/>
      </Wrapper>
  )
}

export default SignInContent;