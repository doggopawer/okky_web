import styled from "styled-components";

const Select = styled.select`
    text-align: center;
    display: inline-block;
    width: 88.3px;
    height: 36px;
    font-size: 14px;
    color: #374151;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 5px;
`
const Option = styled.option`
  font-size: 14px;
  color: #374151;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 5px;
`

const OrderBySelect = () => {

    return (
        <Select>
            <Option>최신순</Option>
            <Option>추천순</Option>
            <Option>조회순</Option>
        </Select>
    )
}
export default OrderBySelect;