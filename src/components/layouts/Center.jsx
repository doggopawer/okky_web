import styled from "styled-components";
import OkkyLogo from "../../resources/okky.svg"

const Wrapper = styled.div`
  width: 448px;
  height: auto;
`;
const First = styled.div`
  display: flex;
  justify-content: center;
`
const Logo = styled.div`
  width: 66.2px;
  height: 48px;
  background-image: url(${OkkyLogo});
  margin-bottom: 30px;
`

const Second = styled.h2`
  height: auto;
  text-align: center;
  color: #111827;
  font-size: 30px;
  font-weight: bolder;
  margin-bottom: 10px;
`;
const Third = styled.p`
  height: auto;
  text-align: center;
  color: #4b5563;
  font-size: 14px;
`;
const Fourth = styled.div`
  width: 100%;
  height: auto;
`;




const Center = ({content}) => {
    return (
        <Wrapper>
            <First>
                <Logo/>
            </First>
            <Second>OKKY에 오신것을 환영합니다.</Second>
            <Third>OKKY는 소프트웨어 개발자를 위한 지식공유 플랫폼입니다.</Third>
            <Fourth>
                {content}
            </Fourth>
        </Wrapper>
    )
}

export default Center;