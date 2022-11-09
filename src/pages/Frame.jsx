import Header from "../components/header/Header";
import Body from "../components/body/Body";

function Frame ({content}) {

    return (
        <>
            <Header/>
            <Body content={content}/>
        </>
    )
}

export default Frame;