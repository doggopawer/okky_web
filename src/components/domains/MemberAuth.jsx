import styled from "styled-components";
import {Link} from "react-router-dom";

const MemberAuthLayout = styled.div`
  width: 100%;
`;
const MemberAuthHead = styled.h3`
  color: #6b8270;
  font-size: 14px;
  text-align: center;
  margin: 30px 0;
`;
const MemberAuthParagraph = styled.p`
  color: #374151;
  font-size: 14px;
  margin-bottom: 10px;
`
const MemberAuthTextArea = styled.input`
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

const MemberAuthButton = styled.button`
  display: inline-block;
  width: 100%;
  height: 38px;
  background: #0090f9;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

const MemberAuthBox2 = styled.div`
  margin-top: 30px;
  text-align: center;
  color: #111827;
  font-size: 14px;
`;
const MemberAuthFindAccountLink = styled(Link)`
  display: inline-block;
  width: 100%;
  text-decoration: none;
  text-align: right;  
  font-size: 14px;
  &:visited {
    color: #0090f9;
  }
  
`;
const MemberAuthSignUpLink = styled(Link)`
    &:visited {
      color: #0090f9;
    }
    
`;


const MemberAuth = () => {
    // 리액트 쿼리 훅
    return (
        <MemberAuthLayout>
            <MemberAuthHead>
                OKKY 아이디로 로그인
            </MemberAuthHead>
            <MemberAuthParagraph>
                아이디
            </MemberAuthParagraph>
            <MemberAuthTextArea/>
            <MemberAuthParagraph>
                비밀번호
            </MemberAuthParagraph>
            <MemberAuthTextArea/>
            <MemberAuthFindAccountLink to={"/find-account"}>계정찾기</MemberAuthFindAccountLink>
            <MemberAuthButton>
                로그인
            </MemberAuthButton>
            <MemberAuthBox2>
                아직 회원이 아니신가요?
                <MemberAuthSignUpLink to={"/sign-up"}>회원가입</MemberAuthSignUpLink>
            </MemberAuthBox2>
        </MemberAuthLayout>
    )
}

export default MemberAuth;