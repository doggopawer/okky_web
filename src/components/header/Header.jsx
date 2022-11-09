import Wrapper from "./Wrapper";
import Whole from "./Whole";
import Left from "./Left";
import Right from "./Right";
import Logo from "./Logo";
import Gnb from "./Gnb";
import SearchTextDeco from "./SearchTextDeco";
import SignInBtn from "./SignInBtn";
import SignUpBtn from "./SignUpBtn";
import NavBtn from "./NavBtn";
import GnbItem from "./GnbItem";
import SearchText from "./SearchText";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faBars} from "@fortawesome/free-solid-svg-icons";

function Header () {
    return (
        <Wrapper>
            <Whole>
                <Left>
                    <Logo/>
                    <Gnb>
                        <GnbItem>Q&A</GnbItem>
                        <GnbItem>지식</GnbItem>
                        <GnbItem>커뮤니티</GnbItem>
                        <GnbItem>이벤트</GnbItem>
                        <GnbItem>JOBS</GnbItem>
                        <GnbItem>공지사항</GnbItem>
                    </Gnb>
                </Left>
                <Right>
                    <SearchTextDeco>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <SearchText placeholder={"검색"}/>
                    </SearchTextDeco>


                    <SignInBtn>로그인</SignInBtn>
                    <SignUpBtn>회원가입</SignUpBtn>
                    <NavBtn>
                        <FontAwesomeIcon icon={faBars} />
                    </NavBtn>
                </Right>
            </Whole>
        </Wrapper>
    )
}

export default Header