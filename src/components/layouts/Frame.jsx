import Header from "./Header";
import Body from "./Body";
import styled from "styled-components";
import Footer from "./Footer";



function Frame ({content}) {

    return (
        <>
            <Header/>
            <Body content={content}/>
            <Footer/>
        </>
    )
}

export default Frame;