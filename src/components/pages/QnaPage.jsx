import WritingFrame from "../layouts/frames/WritingFrame";
import GalleryContent from "../layouts/contents/GalleryContent";

const QnaPage = () => {
    return <WritingFrame content={<GalleryContent name={"Q&A"} description={"좋은 질문과 답변으로 동료의 시간을 아껴주세요."}/>}/>
}

export default QnaPage;