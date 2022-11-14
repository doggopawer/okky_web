import styled from "styled-components";
import {Link} from "react-router-dom";

const MemberCreateLayout = styled.div`
  width: 100%;
`;
const MemberCreateHead = styled.div`
  color: #6b8270;
  font-size: 14px;
  text-align: center;
  margin: 30px 0;
`;
const MemberCreateParagraph = styled.p`
  color: #374151;
  font-size: 14px;
  margin-bottom: 10px;
`
const MemberCreateTextArea = styled.input`
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

const MemberCreateButton = styled.button`
  display: inline-block;
  width: 100%;
  height: 38px;
  background: #0090f9;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

const MemberCreateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  & P {
    margin-bottom: 0;
  }
`
const MemberCreateCheck = styled.input`
  display: inline-block;
  width: 24px;
  height: 24px;
`
const MemberCreateParagraph2 = styled.p`
  color: #6b7280 ;
  font-size: 14px ;
`;

const MemberCreateBox2 = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;
const MemberCreateBox3 = styled.div`
  margin-top: 30px;
  text-align: center;
  color: #111827;
  font-size: 14px;
`
const MemberCreateLink = styled(Link)`
  font-size: 14px;
  color: #0090f9;
`;
const MemberCreateText = styled.span`
  display: inline-block;
  color: lightgray;
  margin: 0 15px;
`;


const MemberCreate = () => {
    // 리액트 쿼리 훅
    return (
        <MemberCreateLayout>
            <MemberCreateHead>
                회원가입에 필요한 기본정보를 입력해주세요.
            </MemberCreateHead>
            <MemberCreateParagraph>
                아이디
            </MemberCreateParagraph>
            <MemberCreateTextArea placeholder="4~15자 이내로 입력하세요."/>
            <MemberCreateParagraph>
                비밀번호
            </MemberCreateParagraph>
            <MemberCreateTextArea placeholder="최소 6자 이동(알파벳, 숫자 필수)"/>
            <MemberCreateParagraph>
                이메일
            </MemberCreateParagraph>
            <MemberCreateTextArea placeholder="munchkin@okky.kr"/>
            <MemberCreateParagraph>
                실명
            </MemberCreateParagraph>
            <MemberCreateTextArea placeholder="홍길동"/>
            <MemberCreateParagraph>
                닉네임
            </MemberCreateParagraph>
            <MemberCreateTextArea placeholder="별명을 알파벳, 한글, 숫자를 20자 이하로 입력해주세요."/>
            <MemberCreateBox>
                <MemberCreateParagraph>
                    이메일 수신동의
                </MemberCreateParagraph>
                <MemberCreateCheck type="checkbox"/>
            </MemberCreateBox>
            <MemberCreateParagraph2>
                OKKY에서 주최하는 다양한 이벤트, 정보성 뉴스레터 및 광고 수신여부를 설정할 수 있습니다.
            </MemberCreateParagraph2>
            <MemberCreateBox2>
                <MemberCreateLink to={"/terms"}>서비스이용약관</MemberCreateLink>
                <MemberCreateText>|</MemberCreateText>
                <MemberCreateLink to={"/policy"}>개인정보처리방침</MemberCreateLink>
            </MemberCreateBox2>
            <MemberCreateButton>회원가입</MemberCreateButton>
            <MemberCreateBox3>
                이미 회원이신가요? <MemberCreateLink to={"/sign-in"}>로그인</MemberCreateLink>
            </MemberCreateBox3>
        </MemberCreateLayout>
    )
}

export default MemberCreate;