import styled from "styled-components";
import FindAccountMove from "./FindAccountMove";
import SignUpMove from "./SignUpMove";

const Wrapper = styled.div`
  width: 100%;
`;
const Head = styled.div`
  color: #6b8270;
  font-size: 14px;
  text-align: center;
  margin: 30px 0;
`;
const P = styled.p`
  color: #374151;
  font-size: 14px;
  margin-bottom: 10px;
`
const Text = styled.input`
  display: inline-block;
  width: 100%;
  height: 42px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid lightgray;
  font-size: 16px;
`;

const Button = styled.button`
  display: inline-block;
  width: 100%;
  height: 38px;
  background: #0090f9;
  color: #fff;
  border: none;
  border-radius: 5px;
`;
const End = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`
const Center = styled.div`
  margin-top: 30px;
  text-align: center;
  color: #111827;
  font-size: 14px;
`
const MemberAuth = () => {
    // 리액트 쿼리 훅
    return (
        <Wrapper>
            <Head>
                OKKY 아이디로 로그인
            </Head>
            <P>
                아이디
            </P>
            <Text/>
            <P>
                비밀번호
            </P>
            <Text/>
            <End>
                <FindAccountMove/>
            </End>
            <Button>로그인</Button>
            <Center>
                아직 회원이 아니신가요? <SignUpMove/>
            </Center>
        </Wrapper>
    )
}

export default MemberAuth;