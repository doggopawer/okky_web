import Wrapper from "./box/Wrapper";
import Whole from "./box/Whole";
import Left from "./box/Left";
import Center from "./box/Center";
import Right from "./box/Right";
import TagRank from "./box/TagRank";
import LeftAd from "./item/LeftAd";
import WriterRank from "./box/WriterRank";
import BugReport from "./box/BugReport";
import RightAd from "./item/RightAd";
import CenterAd from "./item/CenterAd";

function Body ({content}) {

    return (
        <Wrapper>
            <Whole>
                <Left>
                    <TagRank>
                    </TagRank>
                    <LeftAd/>
                    <BugReport>

                    </BugReport>
                    <WriterRank>

                    </WriterRank>
                </Left>
                <Center>
                    <CenterAd/>
                    {content}
                </Center>
                <Right>
                    <RightAd/>
                    <RightAd/>
                </Right>
            </Whole>
        </Wrapper>
    )
}

export default Body;