import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Button = styled.div`
  font-size: 22.5px;
`;

const EmailMove = () => {
    // 리액트 훅
    return (
        <Button>
            <FontAwesomeIcon icon={faEnvelope}/>
        </Button>
    )
}
export default EmailMove;