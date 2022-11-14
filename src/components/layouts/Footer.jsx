import styled from "styled-components";
import logoImg from "../../resources/okky-munchkin-logo.svg";
import {Link} from "react-router-dom";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FooterLayout = styled.div`
  width: 100%;
  height: 183px;
  border-bottom: 1px solid lightgray;
  
  /* 가운데 정렬  */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterBox = styled.div`
  width: 1280px;
  height: 126px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  // 1280px 이하
  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  
`;

const FooterLeftBox = styled.div`
  
  display: flex;
  justify-content: space-around;
  flex-direction: column;


  flex-basis: 126px;
  flex-shrink: 0;


  // 1280px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-basis: auto;
  }
  
`;

const FooterCenterBox = styled.div`
  width: 70vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const FooterRightBox = styled.div`

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  

  flex-basis: 126px;
  flex-shrink: 0;
`;
const FooterImg = styled.img`
  width: 115px;
  height: 28px;
  border: none;
  background-image: url(${logoImg});
  z-index:999;
  // 1024px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const FooterHead = styled.h2`
  width: 100%;
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const FooterLeftInnerBox = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    width: 20%;
  }
`

const FooterCenterInnerBox = styled.div`
    font-size: 14px;
    color: #374151;
    display: flex;
    margin-bottom: 20px;
    & div {
      margin-right: 20px;
    }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  
`;
const FooterParagraph = styled.p`
      font-size: 12px;
      color: #374151;
`
const FooterAnchor = styled.a`
  display: inline-block;
  width: 20px;
  height: 20px;
`;
const FooterAnchor2 = styled.a`
  display: inline-block;
  width: 25px;
  height: 25px;
`;
const FooterAnchor3 = styled.a`
  font-size: 22.5px;
`;
const FooterLink = styled(Link)`
  display: inline-block;
  margin-right: 10px;
  font-size: 14px;
  color: #374151;
  text-decoration: none;
`;


const Footer = () => {

    return (
        <FooterLayout>
            <FooterBox>
                <FooterLeftBox>
                    <FooterImg/>
                    <FooterHead>All That Developer</FooterHead>
                    <FooterLeftInnerBox>
                        <FooterAnchor href={"http://www.facebook.com"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
                            </svg>
                        </FooterAnchor>
                        <FooterAnchor2 href={"http://www.youtube.com"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                            </svg>
                        </FooterAnchor2>
                        <FooterAnchor3 href={"mailto:doggopawer@gmail.com"}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </FooterAnchor3>
                    </FooterLeftInnerBox>
                </FooterLeftBox>
                <FooterCenterBox>
                    <FooterCenterInnerBox>
                        <FooterLink to={"/company"}>회사소개</FooterLink>
                        <FooterLink to={"/notice"}>공지사항</FooterLink>
                        <FooterLink to={"/contact"}>연락처</FooterLink>
                        <FooterLink to={"/inquiry"}>광고문의</FooterLink>
                        <FooterLink to={"/recruit"}>채용</FooterLink>
                        <FooterLink to={"/bug"}>버그제보</FooterLink>
                        <FooterLink to={"/policy"}>개인정보 처리방침</FooterLink>
                        <FooterLink to={"/terms"}>서비스 이용약관</FooterLink>
                    </FooterCenterInnerBox>
                    <FooterParagraph>상호명: (주)오키코리아 | 대표명 : 노상범, 장기진 | 사업자등록번호 : 592-87-02037 | 문의 : info@okky.kr</FooterParagraph>
                    <FooterParagraph>통신판매업신고번호 : 제 2022-서울강남-04742호 ㅣ 주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103)</FooterParagraph>
                    <FooterParagraph>© 2022 (주)오키코리아, Inc. All rights reserved.</FooterParagraph>
                </FooterCenterBox>
                <FooterRightBox>
                </FooterRightBox>
            </FooterBox>
        </FooterLayout>
    )
}

export default Footer;