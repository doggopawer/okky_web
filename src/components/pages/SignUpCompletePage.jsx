import styled from "styled-components";
import {Link, useParams} from "react-router-dom";


const SignUpCompleteLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem 0;
`;

const SignUpCompleteBox = styled.div`
  width: 448px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignUpCompleteImgBox = styled.div`
  width: 100%;
  text-align: center;
`;
const SignUpCompleteWelcomeText = styled.span`
  font-size: 30px;
  font-weight: bolder;
  color: #111827;
`;
const SignUpCompleteNickText = styled.span`
  color: #0090f9;
`;
const SignUpCompleteGuideBox = styled.div`
  background: #f9fafb;
  box-sizing: border-box;
  width: 576px;
  font-size: 14px;
  padding: 16px;
  margin-top: 20px;
  text-align: center;
`;
const SignUpCompleteGuideParagraph = styled.p`

`;
const SignUpCompleteSignInLink = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  background: #0090f9;
  width: 192px;
  height: 38px;
  border-radius: 5px;
  border: none;
  margin-top: 30px;
  text-decoration: none;
  text-align: center;
  line-height: 15px;
`;

const SignUpCompletePage = () => {
    const {nick} = useParams();
    return (
        <SignUpCompleteLayout>
            <SignUpCompleteBox>
                <SignUpCompleteImgBox>
                    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M69.9992 101.8C85.905 101.8 98.7992 88.9058 98.7992 73C98.7992 57.0942 85.905 44.2 69.9992 44.2C54.0934 44.2 41.1992 57.0942 41.1992 73C41.1992 88.9058 54.0934 101.8 69.9992 101.8ZM83.3448 68.3455C84.7507 66.9396 84.7507 64.6603 83.3448 63.2544C81.9389 61.8485 79.6595 61.8485 78.2536 63.2544L66.3992 75.1088L61.7448 70.4544C60.3389 69.0485 58.0595 69.0485 56.6536 70.4544C55.2477 71.8603 55.2477 74.1396 56.6536 75.5455L63.8536 82.7455C65.2595 84.1514 67.5389 84.1514 68.9448 82.7455L83.3448 68.3455Z" fill="#34D399"></path><g clip-path="url(#clip0_1394_6431)"><path d="M104.098 107.24C105.928 107.441 109.829 109.53 111.369 111.839C112.908 114.148 113.783 118.144 113.911 119.94" stroke="#BAE0DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.9789 84.343C28.8623 86.7802 23.3208 91.1544 18.0871 89.1533C11.5449 86.652 11.7373 82.8037 13.8539 81.2643C15.9705 79.725 18.8567 82.2265 19.4339 84.343C20.0112 86.4595 19.0491 93.5789 13.8539 96.2728C8.65869 98.9666 1.73174 97.6197 0 96.2728" stroke="#EFE0FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M114.391 16.2281C111.89 15.9073 106.656 17.3824 105.732 25.8488C104.809 34.3151 97.3945 36.0469 93.8027 35.8544" stroke="#64B9F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="20.1082" cy="51.1087" r="4.61793" fill="#F99A3D"></circle><circle cx="48.0318" cy="14.8809" r="3.84817" fill="#FFE7EE"></circle><circle cx="59.7688" cy="22.18" r="2.29619" fill="#FFE7EE"></circle><circle cx="121.125" cy="65.759" r="4.13688" fill="#EFE0FF"></circle><circle cx="35.1154" cy="112.708" r="4.13688" fill="#BDE2F8"></circle><circle cx="86.6838" cy="124.83" r="4.13688" fill="#F9D2DD"></circle><circle cx="73.888" cy="120.693" r="2.29623" fill="#0090F9"></circle></g><defs><clipPath id="clip0_1394_6431"><rect width="140" height="140" fill="white"></rect></clipPath></defs></svg>
                    <br/><SignUpCompleteWelcomeText>
                        환영합니다! <br/>
                        <SignUpCompleteNickText>
                            {nick}
                        </SignUpCompleteNickText>님
                    </SignUpCompleteWelcomeText>
                </SignUpCompleteImgBox>
                <SignUpCompleteGuideBox>
                    <SignUpCompleteGuideParagraph>
                        계정으로 회원가입이 성공적으로 완료되었습니다.<br/>
                        아래 로그인 버튼을 눌러 다시한번 로그인 해주세요.
                    </SignUpCompleteGuideParagraph>
                </SignUpCompleteGuideBox>
                <SignUpCompleteSignInLink to={"/sign-in"}>
                    로그인
                </SignUpCompleteSignInLink>
            </SignUpCompleteBox>
        </SignUpCompleteLayout>
    )
}
export default SignUpCompletePage;