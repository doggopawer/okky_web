import Header from "../Header";
import Body from "../Body";
import styled from "styled-components";
import Footer from "../Footer";


const WritingFrameLayout = styled.div`
  display: flex;
  flex-direction: column;
`

function WritingFrame ({content}) {

    return (
        <WritingFrameLayout>
            <Header/>
            <Body content={content}/>
            <Footer/>
        </WritingFrameLayout>
    )
}

export default WritingFrame;