import Center from "../Center";
import styled from "styled-components";


const MemberFrameLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 8rem 0;
`

const MemberFrame = ({content}) => {

    return (
        <MemberFrameLayout>
            <Center content={content}/>
        </MemberFrameLayout>
    )
}

export default MemberFrame;