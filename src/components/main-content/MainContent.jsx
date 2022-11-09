import ContentWrapper from "./box/ContentWrapper";
import ShortGallery from "./box/ShortGallery";
import GalleryWrapper from "./box/GalleryWrapper";
import GalleryHead from "./box/GalleryHead";
import GalleryItem from "./box/GalleryItem";

function MainContent() {

    return (
        <>
            <ContentWrapper>
                <GalleryWrapper>
                    <ShortGallery>
                        <GalleryHead></GalleryHead>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                    </ShortGallery>
                    <ShortGallery>
                        <GalleryHead></GalleryHead>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                    </ShortGallery>
                </GalleryWrapper>
                <GalleryWrapper>
                    <ShortGallery>
                        <GalleryHead></GalleryHead>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                    </ShortGallery>
                    <ShortGallery>
                        <GalleryHead></GalleryHead>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                    </ShortGallery>
                </GalleryWrapper>
                <GalleryWrapper>
                    <ShortGallery>
                        <GalleryHead></GalleryHead>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                    </ShortGallery>
                    <ShortGallery>
                        <GalleryHead></GalleryHead>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                        <GalleryItem></GalleryItem>
                    </ShortGallery>
                </GalleryWrapper>
            </ContentWrapper>
        </>
    )
}

export default MainContent;