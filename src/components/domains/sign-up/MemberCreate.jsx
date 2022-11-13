import styled from "styled-components";
import TermsMove from "./TermsMove";
import PolicyMove from "./PolicyMove";
import SignInMove from "./SignInMove";

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
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid lightgray;
  font-size: 16px;
  &::placeholder {
    color: lightgray;
  }
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

const ToggleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  & P {
    margin-bottom: 0;
  }
`
const Toggle = styled.input`
  display: inline-block;
  width: 24px;
  height: 24px;
`
const Guide = styled.div`
  color: #6b7280 ;
  font-size: 14px ;
`;

const MoveBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;
const Center = styled.div`
  margin-top: 30px;
  text-align: center;
  color: #111827;
  font-size: 14px;
`


const MemberCreate = () => {
    // 리액트 쿼리 훅
    return (
        <Wrapper>
            <Head>
                회원가입에 필요한 기본정보를 입력해주세요.
            </Head>
            <P>
                아이디
            </P>
            <Text placeholder="4~15자 이내로 입력하세요."/>
            <P>
                비밀번호
            </P>
            <Text placeholder="최소 6자 이동(알파벳, 숫자 필수)"/>
            <P>
                이메일
            </P>
            <Text placeholder="munchkin@okky.kr"/>
            <P>
                실명
            </P>
            <Text placeholder="홍길동"/>
            <P>
                닉네임
            </P>
            <Text placeholder="별명을 알파벳, 한글, 숫자를 20자 이하로 입력해주세요."/>

            <ToggleBox>
                <P>
                    이메일 수신동의
                </P>
                <Toggle type="checkbox"/>
            </ToggleBox>
            <Guide>
                OKKY에서 주최하는 다양한 이벤트, 정보성 뉴스레터 및 광고 수신여부를 설정할 수 있습니다.
            </Guide>
            <MoveBox>
                <TermsMove/>
                <PolicyMove/>
            </MoveBox>
            <Button>회원가입</Button>
            <Center>
                이미 회원이신가요? <SignInMove/>
            </Center>

        </Wrapper>
    )
}

export default MemberCreate;