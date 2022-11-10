import styled from "styled-components";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Button = styled.button`
  display:none;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {}
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display: inline-block;
    width: 24px;
    height: 24px;
    
    border: none;
    background: #fff;
    margin-right: 10px;

    font-size: 20px;
    color: #0090f9;
  }
`;

const BigMenuModalShow = () => {
    // 리액트 훅
    return (
        <Button>
            <FontAwesomeIcon icon={faBars} />
        </Button>
    )
}

export default BigMenuModalShow;