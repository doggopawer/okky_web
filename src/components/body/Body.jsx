import Wrapper from "./Wrapper";
import Whole from "./Whole";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";
import TagRank from "./TagRank";
import LeftAd from "./LeftAd";
import WriterRank from "./WriterRank";
import BugReport from "./BugReport";
import RightAd from "./RightAd";
import CenterAd from "./CenterAd";
import WriterRankHead from "./WritierRankHead";
import WriterRankItem from "./WriterRankItem";
import TagRankHead from "./TagRankHead";
import TagRankItem from "./TagRankItem";
import BugReportIconBox from "./BugReportIconBox";
import BugReportDescription from "./BugReportDescription";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons";

function Body ({content}) {

    return (
        <Wrapper>
            <Whole>
                <Left>
                    <TagRank>
                        <TagRankHead>#인기 태그</TagRankHead>
                        <TagRankItem>#java</TagRankItem>
                        <TagRankItem>#javascript</TagRankItem>
                        <TagRankItem>#spring</TagRankItem>
                        <TagRankItem>#spring</TagRankItem>
                        <TagRankItem>#react</TagRankItem>
                    </TagRank>
                    <LeftAd/>
                    <BugReport>
                        <BugReportIconBox>
                            <FontAwesomeIcon icon={faBullhorn}/>
                        </BugReportIconBox>
                        <BugReportDescription>
                            <span>버그와 제안은 여기에 댓글로 남겨주세요.</span>
                        </BugReportDescription>
                    </BugReport>
                    <WriterRank>
                        <WriterRankHead>Top Writers</WriterRankHead>
                        <WriterRankItem>frostDog</WriterRankItem>
                        <WriterRankItem>무명시민</WriterRankItem>
                        <WriterRankItem>JungleVeryQ</WriterRankItem>
                        <WriterRankItem>톰소여</WriterRankItem>
                        <WriterRankItem>kjjc</WriterRankItem>
                    </WriterRank>
                </Left>
                <Center>
                    <CenterAd/>
                    {content}
                </Center>
                <Right>
                    <RightAd/>
                </Right>
            </Whole>
        </Wrapper>
    )
}

export default Body;