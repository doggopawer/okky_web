import styled from "styled-components";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
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
const Button = styled.div`

`
const Text = styled.input`
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


const GoogleSearchMove = () => {
  // 리액트 라우터 훅
    return (
      <Wrapper>
          <Button onClick={() => console.log("gd")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
          <Text placeholder={"검색"}/>
      </Wrapper>
  )
}

export default GoogleSearchMove;