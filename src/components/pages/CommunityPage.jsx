import WritingFrame from "../layouts/frames/WritingFrame";
import GalleryContent from "../layouts/contents/GalleryContent";

const CommunityPage = () => {
    return <WritingFrame content={<GalleryContent name={"커뮤니티"} description={"다양한 사람을 만나고 생각의 폭을 넓혀보세요."}/>}/>
}

export default CommunityPage;