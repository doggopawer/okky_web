import styled from "styled-components";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const BigMenuShowButton = styled.button`
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

const BigMenuShow = () => {
    // 리액트 훅
    return (
        <BigMenuShowButton>
            <FontAwesomeIcon icon={faBars} />
        </BigMenuShowButton>
    )
}

export default BigMenuShow;