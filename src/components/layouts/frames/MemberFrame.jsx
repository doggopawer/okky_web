import Center from "../Center";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 8rem 0;
`

const MemberFrame = ({content}) => {

    return (
        <Wrapper>
            <Center content={content}/>
        </Wrapper>
    )
}

export default MemberFrame;