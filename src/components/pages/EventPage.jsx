import WritingFrame from "../layouts/frames/WritingFrame";
import GalleryContent from "../layouts/contents/GalleryContent";

const EventPage = () => {
    return <WritingFrame content={<GalleryContent name={"이벤트"} description={"기술 관련 행사와 네트워킹 이벤트 정보를 함께 해요."}/>}/>
}

export default EventPage;