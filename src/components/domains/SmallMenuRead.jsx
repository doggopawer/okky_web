import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faPencil, faRecycle} from "@fortawesome/free-solid-svg-icons";
import WritingRead20 from "./WritingRead20";
import {Link} from "react-router-dom";


const SmallMenuReadZeroBox= styled.div`
  width : 100%;
  height: 80px;
  background: #dae2f0;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SmallMenuReadHead = styled.h2`
  width: 90%;
  height: 28px;
  color: #111827;
  font-size: 20px;
  font-weight: bold;
`;
const SmallMenuReadParagraph = styled.p`
  width: 90%;
  height: 20px;
  color: #111827;
  font-size: 14px;
`;
const SmallMenuReadFirstBox = styled.div`
`
const SmallMenuReadSecondBox = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
`
const SmallMenuReadThirdBox = styled.div`
  height: 74px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SmallMenuReadFourthBox = styled.div`
  
`;
const SmallMenuReadFifthBox = styled.div`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SmallMenuReadWritingCreateLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  line-height: 36px;
  width: 97px;
  height: 36px;
  background: #0090f9;
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
`;
const SmallMenuReadList = styled.ul`
  width: 316px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SmallMenuReadItem = styled.li`
  color: #4b5563;
  font-size: 16px;
`
const SmallMenuReadSelect = styled.select`
  text-align: center;
  display: inline-block;
  width: 88.3px;
  height: 36px;
  font-size: 14px;
  color: #374151;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
const SmallMenuReadOption = styled.option`
  font-size: 14px;
  color: #374151;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
const SmallMenuReadResetButton = styled.button`
    font-size: 20px;
    color: #4b5563;
    background: none;
    border: none;
`
const SmallMenuReadTextAreaBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  border: 1px solid lightgray;

  width: 160px;
  height: 32px;
  background: #fff;

  font-size: 10px;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    width: 160px;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;
const SmallMenuReadTextAreaButton = styled.div`
`;
const SmallMenuReadTextArea = styled.input`
  display: inline-block;
  border-radius: 35px;
  border: none;
  outline: none;
  width: 80%;
  height: 16px;
  background: #fff;

  font-size: 12px;
  // 1024px 이하
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;


const SmallMenuRead = ({name, description}) => {
    // 리액트 쿼리 훅
    // 아래 데이터는 쿼리로 소메뉴 데이터를 받는다.
    const data = [
        {
            name : "기술",
        },
        {
            name : "커리어",
        },
        {
            name : "기타",
        },
        {
            name : "전체",
        },
    ]
    return (
        <>
            <SmallMenuReadFirstBox>
                <SmallMenuReadZeroBox>
                    <SmallMenuReadHead>
                        {name}
                    </SmallMenuReadHead>
                    <SmallMenuReadParagraph>
                        {description}
                    </SmallMenuReadParagraph>
                </SmallMenuReadZeroBox>
            </SmallMenuReadFirstBox>
            <SmallMenuReadSecondBox>
                <SmallMenuReadWritingCreateLink>
                    <FontAwesomeIcon icon={faPencil}/> &nbsp;
                    작성하기
                </SmallMenuReadWritingCreateLink>
                <SmallMenuReadList>
                    {
                        data.map(({name})=> (
                            <SmallMenuReadItem>{name}</SmallMenuReadItem>
                        ) )
                    }
                </SmallMenuReadList>
                <SmallMenuReadSelect>
                    <SmallMenuReadOption>최신순</SmallMenuReadOption>
                    <SmallMenuReadOption>추천순</SmallMenuReadOption>
                    <SmallMenuReadOption>조회순</SmallMenuReadOption>
                </SmallMenuReadSelect>
            </SmallMenuReadSecondBox>
            <SmallMenuReadThirdBox>
                <SmallMenuReadResetButton>
                    <FontAwesomeIcon icon={faRecycle} />
                </SmallMenuReadResetButton>

                <SmallMenuReadTextAreaBox>
                    <SmallMenuReadTextAreaButton onClick={() => console.log("gd")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </SmallMenuReadTextAreaButton>
                    <SmallMenuReadTextArea placeholder={"Q&A 내에서 검색"}/>
                </SmallMenuReadTextAreaBox>
            </SmallMenuReadThirdBox>
            <SmallMenuReadFourthBox>
                <WritingRead20/>
            </SmallMenuReadFourthBox>
            <SmallMenuReadFifthBox>
                {/*<WritingListPrevious/>*/}
                {/*<WritingListComplexPaging/>*/}
                {/*<WritingListNext/>*/}
            </SmallMenuReadFifthBox>
        </>








    )
}

export default SmallMenuRead;