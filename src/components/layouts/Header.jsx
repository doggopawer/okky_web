import BigMenuRead from "../domains/BigMenuRead";
import styled from "styled-components";
import logoImg from "../../resources/okky-munchkin-logo.svg"
import {
    faArrowRightFromBracket,
    faBars,
    faGear,
    faMagnifyingGlass,
    faUser,
    faWaveSquare
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {useState} from "react";

const HeaderLayout = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid lightgray;
  
  /* 가운데 정렬  */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderBox = styled.div`
  width: 1280px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  // 1280px 이하
  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
`;
const HeaderLeftBox = styled.div`
  width: 640px;
  height: 28px;

  display: flex;
  justify-content: space-between;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    width: 535px;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {}
`;
const HeaderMainLink = styled(Link)`
  width: 115px;
  height: 28px;
  border: none;
  background-image: url(${logoImg});
  z-index:999;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    margin-left: 15px;
  }
`;
const HeaderRightBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 455px;
  height: 35px;
  
  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    width: 348px;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;
const HeaderRightInnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 35px;
  border: 1px solid lightgray;
  
  width: 235px;
  height: 35px;
  background: #fff;
  
  font-size: 10px;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    width: 160px;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;
const HeaderButton = styled.div`

`
const HeaderTextArea = styled.input`
  display: inline-block;
  border-radius: 35px;
  border: none;
  outline: none;
  width: 80%;
  height: 16px;
  background: #fff;
  
  font-size: 12px;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;
const HeaderSignInLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  line-height: 35px;
  width: 85px;
  height: 35px;
  border: 1px solid #0090f9;
  border-radius: 35px;
  background: #fff;

  font-size: 12px;
  color: #0090f9;

  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;
const HeaderSignUpLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  line-height: 35px;
  width: 85px;
  height: 35px;

  border: none;
  border-radius: 35px;
  background: #0090f9;

  font-size: 12px;
  color: #fff;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const HeaderModalOpenButton = styled.button`
  display:none;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display: inline-block;
    width: 24px;
    height: 24px;
    
    border: none;
    background: #fff;
    margin-right: 10px;

    font-size: 20px;
    color: #0090f9;
  }
`;
const HeaderProfileBox = styled.div`
  position: relative;
`;
const HeaderProfileButton = styled.img`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: cover;
`;
const HeaderProfileTapBox = styled.div`
  box-sizing: border-box;
  width: 224px;
  height: 150px;
  background: #fff;
  padding: 12px 40px;
  position: absolute;
  top: 30px;
  right: 0px;
  border-radius: 5px;
`;
const HeaderTapItemLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 14px;
  color: #111827;
  margin: 15px 0;
  border-bottom: 1px solid lightgray;
`;



function Header () {

    const [headerProfile, setHeaderProfile] = useState(false);

    const handleHeaderProfileClick = () => {
        setHeaderProfile(!headerProfile);
    }
    const handleHeaderLogoutClick = () => {
        window.localStorage.removeItem("authToken");
        window.reload();
    }

    return (
        <HeaderLayout>
            <HeaderBox>
                <HeaderLeftBox>
                    <HeaderMainLink to={"/"}/>
                    <BigMenuRead/>
                </HeaderLeftBox>
                <HeaderRightBox>
                    <HeaderRightInnerBox>
                        <HeaderButton>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </HeaderButton>
                        <HeaderTextArea/>
                    </HeaderRightInnerBox>

                    {
                        window.localStorage.authToken ?
                            <HeaderProfileBox onClick={handleHeaderProfileClick}>
                                <HeaderProfileButton src={"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}/>
                                {
                                    headerProfile ?
                                        <HeaderProfileTapBox>
                                            <HeaderTapItemLink to={"/my-profile"}>
                                                <FontAwesomeIcon icon={faUser}/> &nbsp;
                                                내 프로필
                                            </HeaderTapItemLink>
                                            <HeaderTapItemLink to={"/my-account"}>
                                                <FontAwesomeIcon icon={faGear}/> &nbsp;
                                                내 계정
                                            </HeaderTapItemLink>
                                            <HeaderTapItemLink to={"/my-activity"}>
                                                <FontAwesomeIcon icon={faWaveSquare}/> &nbsp;
                                                활동내역
                                            </HeaderTapItemLink>
                                            <HeaderTapItemLink onClick={handleHeaderLogoutClick}>
                                                <FontAwesomeIcon icon={faArrowRightFromBracket}/> &nbsp;
                                                로그아웃
                                            </HeaderTapItemLink>
                                        </HeaderProfileTapBox> : null
                                }
                            </HeaderProfileBox>:
                            <>
                                <HeaderSignInLink to={"/sign-in"}>
                                    로그인
                                </HeaderSignInLink>
                                <HeaderSignUpLink to={"/sign-up"}>
                                    회원가입
                                </HeaderSignUpLink>
                            </>
                    }
                    <HeaderModalOpenButton>
                        <FontAwesomeIcon icon={faBars} />
                    </HeaderModalOpenButton>
                </HeaderRightBox>
            </HeaderBox>
        </HeaderLayout>
    )
}

export default Header