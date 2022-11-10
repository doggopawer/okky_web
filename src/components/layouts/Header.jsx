import SignInMove from "../domains/SignInMove";
import SignUpMove from "../domains/SignUpMove";
import BigMenuList from "../domains/BigMenuList";
import GoogleSearchMove from "../domains/GoogleSearchMove";
import BigMenuModalShow from "../domains/BigMenuModalShow";
import styled from "styled-components";
import logoImg from "../../resources/okky-munchkin-logo.svg"

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid lightgray;
  
  /* 가운데 정렬  */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Layout = styled.div`
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
const Left = styled.div`
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
const Logo = styled.div`
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
const Right = styled.div`
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


function Header () {
    return (
        <Wrapper>
            <Layout>
                <Left>
                    <Logo/>
                    <BigMenuList/>
                </Left>
                <Right>
                    <GoogleSearchMove/>
                    <SignInMove/>
                    <SignUpMove/>
                    <BigMenuModalShow/>
                </Right>
            </Layout>
        </Wrapper>
    )
}

export default Header