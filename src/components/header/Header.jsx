import Wrapper from "./box/Wrapper";
import Whole from "./box/Whole";
import Left from "./box/Left";
import Right from "./box/Right";
import Logo from "./item/Logo";
import Gnb from "./item/Gnb";
import SearchTextDeco from "./item/SearchTextDeco";
import SignInBtn from "./item/SignInBtn";
import SignUpBtn from "./item/SignUpBtn";
import NavBtn from "./item/NavBtn";
import GnbItem from "./item/GnbItem";
import SearchText from "./item/SearchText";
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