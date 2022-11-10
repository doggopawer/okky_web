import styled from "styled-components";

const Image = styled.img`
  display: inline-block;
  width: 100%;
  height: 160px;
  margin-bottom: 32px;
  background: ${props=> props.ad === null ? 'lightgray' : props.ad};
  background-size: cover;

  // 1280px 이하
  @media only screen and (max-width: 1024px) {
    width: 640px;
    height: 200px;
    background: ${props=> props.ad === null ? 'lightgray' : props.ad};
    background-size: cover;
  }
  // 768px 이하
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 23vw;
  }
`;

const AdSense = () => {
    // 구글 API

    return (
        <Image ad={null} alt={"Google AdSense"} />
    )
}
export default AdSense;