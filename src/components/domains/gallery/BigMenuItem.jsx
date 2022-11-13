import styled from "styled-components";

const Wrapper = styled.div`
  width : 100%;
  height: 80px;
  background: #dae2f0;
  
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FirstLine = styled.h2`
  width: 90%;
  height: 28px;
  color: #111827;
  font-size: 20px;
  font-weight: bold;
`
const SecondLine = styled.p`
  width: 90%;
  height: 20px;
  color: #111827;
  font-size: 14px;
`


const BigMenuItem = ({name, description}) => {

    return (
        <Wrapper>
            <FirstLine>
                {name}
            </FirstLine>
            <SecondLine>
                {description}
            </SecondLine>
        </Wrapper>
    )
}

export default BigMenuItem;