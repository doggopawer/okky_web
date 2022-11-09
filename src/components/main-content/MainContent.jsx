import ContentWrapper from "./ContentWrapper";
import ShortGallery from "./ShortGallery";
import GalleryWrapper from "./GalleryWrapper";
import GalleryHead from "./GalleryHead";
import GalleryItem from "./GalleryItem";
import GalleryTitle from "./GalleryTitle";
import GalleryImg from "./GalleryImg";
import WritingInfo from "./WritingInfo";
import WritingTitle from "./WritingTitle";
import WritingInfoRight from "./WritingInfoRight";
import WrtingInfoLeft from "./WrtingInfoLeft";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBolt, faComment, faEye} from "@fortawesome/free-solid-svg-icons"
import WritingProfile from "./WritingProfile";

function MainContent() {

    return (
        <>
            <ContentWrapper>
                <GalleryWrapper>
                    <ShortGallery>
                        <GalleryHead>
                            <GalleryTitle>
                                Q&A
                            </GalleryTitle>
                            <GalleryImg/>
                        </GalleryHead>
                        <GalleryItem>
                            <WritingInfo>
                                <WrtingInfoLeft>
                                    <WritingProfile/>
                                    <span>독고다이</span>
                                    <span>250</span>
                                    <FontAwesomeIcon icon={faBolt}/>
                                    <span>25분 전</span>
                                </WrtingInfoLeft>
                                <WritingInfoRight>
                                    <FontAwesomeIcon icon={faEye}/> <span>0</span>
                                    <FontAwesomeIcon icon={faComment}/> <span>0</span>
                                </WritingInfoRight>
                            </WritingInfo>
                            <WritingTitle>글 내용 쏼라쏼라 </WritingTitle>
                        </GalleryItem>
                        <GalleryItem>
                            <WritingInfo>
                                <WrtingInfoLeft>
                                    <WritingProfile/>
                                    <span>독고다이</span>
                                    <span>250</span>
                                    <FontAwesomeIcon icon={faBolt}/>
                                    <span>25분 전</span>
                                </WrtingInfoLeft>
                                <WritingInfoRight>
                                    <FontAwesomeIcon icon={faEye}/> <span>0</span>
                                    <FontAwesomeIcon icon={faComment}/> <span>0</span>
                                </WritingInfoRight>
                            </WritingInfo>
                            <WritingTitle>글 내용 쏼라쏼라 </WritingTitle>
                        </GalleryItem>
                        <GalleryItem>
                            <WritingInfo>
                                <WrtingInfoLeft>
                                    <WritingProfile/>
                                    <span>독고다이</span>
                                    <span>250</span>
                                    <FontAwesomeIcon icon={faBolt}/>
                                    <span>25분 전</span>
                                </WrtingInfoLeft>
                                <WritingInfoRight>
                                    <FontAwesomeIcon icon={faEye}/> <span>0</span>
                                    <FontAwesomeIcon icon={faComment}/> <span>0</span>
                                </WritingInfoRight>
                            </WritingInfo>
                            <WritingTitle>글 내용 쏼라쏼라 </WritingTitle>
                        </GalleryItem>
                        <GalleryItem>
                            <WritingInfo>
                                <WrtingInfoLeft>
                                    <WritingProfile/>
                                    <span>독고다이</span>
                                    <span>250</span>
                                    <FontAwesomeIcon icon={faBolt}/>
                                    <span>25분 전</span>
                                </WrtingInfoLeft>
                                <WritingInfoRight>
                                    <FontAwesomeIcon icon={faEye}/> <span>0</span>
                                    <FontAwesomeIcon icon={faComment}/> <span>0</span>
                                </WritingInfoRight>
                            </WritingInfo>
                            <WritingTitle>글 내용 쏼라쏼라 </WritingTitle>
                        </GalleryItem>
                        <GalleryItem>
                            <WritingInfo>
                                <WrtingInfoLeft>
                                    <WritingProfile/>
                                    <span>독고다이</span>
                                    <span>250</span>
                                    <FontAwesomeIcon icon={faBolt}/>
                                    <span>25분 전</span>
                                </WrtingInfoLeft>
                                <WritingInfoRight>
                                    <FontAwesomeIcon icon={faEye}/> <span>0</span>
                                    <FontAwesomeIcon icon={faComment}/> <span>0</span>
                                </WritingInfoRight>
                            </WritingInfo>
                            <WritingTitle>글 내용 쏼라쏼라 </WritingTitle>
                        </GalleryItem>
                    </ShortGallery>
                    <ShortGallery>
                        <GalleryHead>
                            <GalleryTitle>
                                커뮤니티
                            </GalleryTitle>
                            <GalleryImg/>
                        </GalleryHead>
                        <GalleryItem>
                            <WritingInfo>
                                <WrtingInfoLeft>
                                    <WritingProfile/>
                                    <span>독고다이</span>
                                    <span>250</span>
                                    <FontAwesomeIcon icon={faBolt}/>
                                    <span>25분 전</span>
                                </WrtingInfoLeft>
                                <WritingInfoRight>
                                    <FontAwesomeIcon icon={faEye}/> <span>0</span>
                                    <FontAwesomeIcon icon={faComment}/> <span>0</span>
                                </WritingInfoRight>
                            </WritingInfo>
                            <WritingTitle>글 내용 쏼라쏼라 </WritingTitle>
                        </GalleryItem>
                        <GalleryItem>
                            <WritingInfo>
                                <WrtingInfoLeft>
                                    <WritingProfile/>
                                    <span>독고다이</span>
                                    <span>250</span>
                                    <FontAwesomeIcon icon={faBolt}/>
                                    <span>25분 전</span>
                                </WrtingInfoLeft>
                                <WritingInfoRight>
                                    <FontAwesomeIcon icon={faEye}/> <span>0</span>
                                    <FontAwesomeIcon icon={faComment}/> <span>0</span>
                                </WritingInfoRight>
                            </WritingInfo>
                            <WritingTitle>글 내용 쏼라쏼라 </WritingTitle>
                        </GalleryItem>
                        <GalleryItem>
                            <WritingInfo>
                                <WrtingInfoLeft>
                                    <WritingProfile/>
                                    <span>독고다이</span>
                                    <span>250</span>
                                    <FontAwesomeIcon icon={faBolt}/>
                                    <span>25분 전</span>
                                </WrtingInfoLeft>
                                <WritingInfoRight>
                                    <FontAwesomeIcon icon={faEye}/> <span>0</span>
                                    <FontAwesomeIcon icon={faComment}/> <span>0</span>
                                </WritingInfoRight>
                            </WritingInfo>
                            <WritingTitle>글 내용 쏼라쏼라 </WritingTitle>
                        </GalleryItem>
                        <GalleryItem>
                            <WritingInfo>
                                <WrtingInfoLeft>
                                    <WritingProfile/>
                                    <span>독고다이</span>
                                    <span>250</span>
                                    <FontAwesomeIcon icon={faBolt}/>
                                    <span>25분 전</span>
                                </WrtingInfoLeft>
                                <WritingInfoRight>
                                    <FontAwesomeIcon icon={faEye}/> <span>0</span>
                                    <FontAwesomeIcon icon={faComment}/> <span>0</span>
                                </WritingInfoRight>
                            </WritingInfo>
                            <WritingTitle>글 내용 쏼라쏼라 </WritingTitle>
                        </GalleryItem>
                        <GalleryItem>
                            <WritingInfo>
                                <WrtingInfoLeft>
                                    <WritingProfile/>
                                    <span>독고다이</span>
                                    <span>250</span>
                                    <FontAwesomeIcon icon={faBolt}/>
                                    <span>25분 전</span>
                                </WrtingInfoLeft>
                                <WritingInfoRight>
                                    <FontAwesomeIcon icon={faEye}/> <span>0</span>
                                    <FontAwesomeIcon icon={faComment}/> <span>0</span>
                                </WritingInfoRight>
                            </WritingInfo>
                            <WritingTitle>글 내용 쏼라쏼라 </WritingTitle>
                        </GalleryItem>
                    </ShortGallery>
                </GalleryWrapper>

            </ContentWrapper>
        </>
    )
}

export default MainContent;