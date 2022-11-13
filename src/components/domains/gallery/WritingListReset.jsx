import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRecycle} from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
    font-size: 20px;
    color: #4b5563;
    background: none;
    border: none;
`
const WritingListReset = () => {

    return (
        <Button>
            <FontAwesomeIcon icon={faRecycle} />
        </Button>
    )
}

export default WritingListReset;