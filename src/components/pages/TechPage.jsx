import WritingFrame from "../layouts/frames/WritingFrame";
import GalleryContent from "../layouts/contents/GalleryContent";

const TechPage = () => {
    return <WritingFrame content={<GalleryContent name={"기술"} description={"지식을 공유하고 새로운 아이디어를 얻어보세요."}/>}/>
}

export default TechPage;