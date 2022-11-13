import styled from "styled-components";
import logoImg from "../../resources/okky-munchkin-logo.svg";
import FaceBookMove from "../domains/footer/FaceBookMove";
import YoutubeMove from "../domains/footer/YoutubeMove";
import EmailMove from "../domains/footer/EmailMove";
import CompanyMove from "../domains/footer/CompanyMove";
import NoticeMove from "../domains/footer/NoticeMove";
import ContactMove from "../domains/footer/ContactMove";
import InquiryMove from "../domains/footer/InquiryMove";
import RecruitMove from "../domains/footer/RecruitMove";
import BugMove from "../domains/footer/BugMove";
import PolicyMove from "../domains/footer/PolicyMove";
import TermsMove from "../domains/footer/TermsMove";

const Wrapper = styled.div`
  width: 100%;
  height: 183px;
  border-bottom: 1px solid lightgray;
  
  /* 가운데 정렬  */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Layout = styled.div`
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

const Left = styled.div`
  
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

const Center = styled.div`
  width: 70vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Right = styled.div`

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  

  flex-basis: 126px;
  flex-shrink: 0;
`;
const Logo = styled.div`
  width: 115px;
  height: 28px;
  border: none;
  background-image: url(${logoImg});
  z-index:999;
  // 1024px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const LogoText = styled.h2`
  width: 100%;
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const LogoDown = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    width: 20%;
  }
`

const FirstLine = styled.div`
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
const RestLine = styled.div`
      font-size: 12px;
      color: #374151;
`

const Footer = () => {

    return (
        <Wrapper>
            <Layout>
                <Left>
                    <Logo/>
                    <LogoText>All That Developer</LogoText>
                    <LogoDown>
                        <FaceBookMove/>
                        <YoutubeMove/>
                        <EmailMove/>
                    </LogoDown>
                </Left>
                <Center>
                    <FirstLine>
                        <CompanyMove/>
                        <NoticeMove/>
                        <ContactMove/>
                        <InquiryMove/>
                        <RecruitMove/>
                        <BugMove/>
                        <PolicyMove/>
                        <TermsMove/>
                    </FirstLine>
                    <RestLine>
                        <p>상호명: (주)오키코리아 | 대표명 : 노상범, 장기진 | 사업자등록번호 : 592-87-02037 | 문의 : info@okky.kr</p>
                        <p>통신판매업신고번호 : 제 2022-서울강남-04742호 ㅣ 주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103)</p>
                        <p>© 2022 (주)오키코리아, Inc. All rights reserved.</p>
                    </RestLine>
                </Center>
                <Right>
                </Right>
            </Layout>
        </Wrapper>
    )
}

export default Footer;