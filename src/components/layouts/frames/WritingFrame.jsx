import Header from "../Header";
import Body from "../Body";
import styled from "styled-components";
import Footer from "../Footer";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

function WritingFrame ({content}) {

    return (
        <Wrapper>
            <Header/>
            <Body content={content}/>
            <Footer/>
        </Wrapper>
    )
}

export default WritingFrame;