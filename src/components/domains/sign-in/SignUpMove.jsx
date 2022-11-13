import styled from "styled-components";

const Span = styled.span`
  color: #111827;
  font-size: 14px;
`;
const Move = styled.span`
  color: #0090f9;
  text-decoration: underline;
`;


const SignUpMove = () => {
    // 리액트 라우터 쿼리
    return (
        <Span>
            아직 회원이 아닌신가요? <Move>회원가입</Move>
        </Span>
    )
}
export default SignUpMove;