import styled from "styled-components";
import BigMenuItem from "../domains/gallery/BigMenuItem";
import WritingCreateMove from "../domains/gallery/WritingCreateMove";
import SmallMenuList from "../domains/gallery/SmallMenuList";
import OrderBySelect from "../domains/gallery/OrderBySelect";
import WritingListReset from "../domains/gallery/WritingListReset";
import WritingListSearch from "../domains/gallery/WritingListSearch";
import LongWritingList from "../domains/gallery/LongWritingList";

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
  }
`;
const First = styled.div`
`
const Second = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
`
const Third = styled.div`
  height: 74px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Fourth = styled.div`
  
`;
const Fifth = styled.div`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const GalleryContent = ({name, description}) => {

    return (
        <Wrapper>
            <First>
                <BigMenuItem name={"Q&A"} description={"좋은 질문과 답변으로 동료의 시간을 아껴주세요."}/>
            </First>
            <Second>
                <WritingCreateMove/>
                <SmallMenuList name={name}/>
                <OrderBySelect/>
            </Second>
            <Third>
                <WritingListReset/>
                <WritingListSearch/>
            </Third>
            <Fourth>
                <LongWritingList/>
            </Fourth>
            <Fifth>
                {/*<WritingListPrevious/>*/}
                {/*<WritingListComplexPaging/>*/}
                {/*<WritingListNext/>*/}
            </Fifth>
        </Wrapper>
    )
}

export default GalleryContent;