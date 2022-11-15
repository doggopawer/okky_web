import BigMenuRead from "../domains/BigMenuRead";
import BigMenuShow from "../domains/BigMenuShow";
import styled from "styled-components";
import logoImg from "../../resources/okky-munchkin-logo.svg"
import {faBars, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

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


function Header () {
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
                    <HeaderSignInLink to={"/sign-in"}>
                        로그인
                    </HeaderSignInLink>
                    <HeaderSignUpLink to={"/sign-up"}>
                        회원가입
                    </HeaderSignUpLink>
                    <HeaderModalOpenButton>
                        <FontAwesomeIcon icon={faBars} />
                    </HeaderModalOpenButton>
                </HeaderRightBox>
            </HeaderBox>
        </HeaderLayout>
    )
}

export default Header