import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import produce from "immer";
import axios from "axios";

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
    const navigate = useNavigate();

    const [memberAuthState, setMemberAuthState] = useState(
        {
            email : "",
            password : "",
        }
    );

    const handleMemberAuthChange = (e) => {
        const {name, value} = e.currentTarget;
        console.log(name, value);

        const nextState = produce(memberAuthState, draftState => {
            draftState[name] = value;
        })
        setMemberAuthState(nextState);
    }

    const handleMemberAuthClick = async() => {
        const result = await axios.post("http://localhost:4000/account/member/sign-in", memberAuthState);
        console.log(result);
        if(result.data === "비밀번호 불일치") {
            return;
        }
        navigate("/");
        return;
    }


    return (
        <MemberAuthLayout>
            <MemberAuthHead>
                OKKY 아이디로 로그인
            </MemberAuthHead>
            <MemberAuthParagraph>
                이메일
            </MemberAuthParagraph>
            <MemberAuthTextArea
                name={"email"}
                value={memberAuthState.email}
                onChange={handleMemberAuthChange}
            />
            <MemberAuthParagraph>
                비밀번호
            </MemberAuthParagraph>
            <MemberAuthTextArea
                name={"password"}
                value={memberAuthState.password}
                onChange={handleMemberAuthChange}
            />
            <MemberAuthFindAccountLink to={"/find-account"}>계정찾기</MemberAuthFindAccountLink>
            <MemberAuthButton onClick={handleMemberAuthClick}>
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