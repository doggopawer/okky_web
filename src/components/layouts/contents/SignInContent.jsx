import styled from "styled-components";
import MemberAuth from "../../domains/MemberAuth";

const SignInLayout = styled.div`
  width: 100%;
  height: auto;
`


const SignInContent = () => {
  return (
      <SignInLayout>
            <MemberAuth/>
      </SignInLayout>
  )
}

export default SignInContent;