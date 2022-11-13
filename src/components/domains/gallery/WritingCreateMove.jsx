import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
    display: inline-block;
    width: 97px;
    height: 36px;
    background: #0090f9;
    border: none;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
  
`

const WritingCreateMove = () => {

    return (
        <Button>
            <FontAwesomeIcon icon={faPencil}/> &nbsp;
            작성하기
        </Button>
    )
}

export default WritingCreateMove;