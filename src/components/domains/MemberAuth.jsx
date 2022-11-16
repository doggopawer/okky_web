import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import produce from "immer";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

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
  margin-bottom: 20px;
  &:visited {
    color: #0090f9;
  }
  
`;
const MemberAuthSignUpLink = styled(Link)`
    &:visited {
      color: #0090f9;
    }
    
`;
const MemberAuthMessageBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 82px;
  background: #f0f6fa;
  padding: 16px;
  color: #991b1b;
  font-size: 14px;
  display: flex;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid lightgray;
  
`;
const MemberAuthMessageText1 = styled.span`
  
`;
const MemberAuthMessageHead = styled.h2`
  font-weight: 400;
  margin-left: 20px;
`;
const MemberAuthMessageText2= styled.span`
  display: inline-block;
  color: #b91c1c;
  font-weight: initial;
  margin-top: 15px;
`;
const MemberAuthWarningText = styled.span`
  color: #ef4444;
  font-size: 12px;
`;


const MemberAuth = () => {
    // 리액트 쿼리 훅
    const navigate = useNavigate();

    const [memberAuthForm, setMemberAuthForm] = useState(
        {
            email : "",
            password : "",
        }
    );
    const [memberAuthMessage, setMemberAuthMessage] = useState(
        {
            show: false,
            message: "",
        }
    );
    const [memberAuthWarning, setMemberAuthWarning] = useState(
        {
            show: false,
            message : "",
        }
    )

    const handleMemberAuthChange = (e) => {
        const {name, value} = e.currentTarget;

        const nextState = produce(memberAuthForm, draftState => {
            draftState[name] = value;
        })
        setMemberAuthForm(nextState);
    }

    const handleMemberAuthClick = async() => {
        if(memberAuthForm.email === "") {
            const nextState = produce(memberAuthWarning, draftState => {
                draftState.show = true;
                draftState.message = "이메일을 입력해주세요.";
            });
            setMemberAuthWarning(nextState);
            return;
        }
        if(memberAuthForm.password === "") {
            const nextState = produce(memberAuthWarning, draftState => {
                draftState.show = true;
                draftState.message = "비밀번호를 입력해주세요.";
            })
            setMemberAuthWarning(nextState);
            return;
        }
        try {
            const result = await axios.post("http://localhost:4000/account/member/sign-in", memberAuthForm);
            console.log(result);
            window.localStorage.authToken = result.data.authToken;
            navigate("/");
            return;
        } catch (e) {
            const nextState = produce(memberAuthMessage, draftState => {
                draftState.show = true;
                draftState.message = e.response.data;
            })
            setMemberAuthMessage(nextState);
            return;
        }
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
                value={memberAuthForm.email}
                onChange={handleMemberAuthChange}
            />
            <MemberAuthParagraph>
                비밀번호
            </MemberAuthParagraph>
            <MemberAuthTextArea
                type={"password"}
                name={"password"}
                value={memberAuthForm.password}
                onChange={handleMemberAuthChange}
            />
            {
                memberAuthWarning.show ?
                <MemberAuthWarningText>
                    <FontAwesomeIcon icon={faCircleExclamation} /> &nbsp;
                    {memberAuthWarning.message}
                </MemberAuthWarningText> : null
            }
            <MemberAuthFindAccountLink to={"/find-account"}>계정찾기</MemberAuthFindAccountLink>
            <MemberAuthButton onClick={handleMemberAuthClick}>
                로그인
            </MemberAuthButton>
            <MemberAuthBox2>
                아직 회원이 아니신가요?
                <MemberAuthSignUpLink to={"/sign-up"}>회원가입</MemberAuthSignUpLink>
            </MemberAuthBox2>

                {
                    memberAuthMessage.show ? (
                        <MemberAuthMessageBox>
                            <MemberAuthMessageText1>
                                <FontAwesomeIcon icon={faCircleExclamation} />
                            </MemberAuthMessageText1>
                            <MemberAuthMessageHead>
                                로그인 실패 <br/>
                                <MemberAuthMessageText2>
                                    {memberAuthMessage.message}
                                </MemberAuthMessageText2>
                            </MemberAuthMessageHead>
                        </MemberAuthMessageBox>
                    ) : null
                }
        </MemberAuthLayout>
    )
}

export default MemberAuth;