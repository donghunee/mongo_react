import React from "react";
import styled from "styled-components";
import RoundedButton from "../common/button/RoundedButton";
import { BsTrashFill, BsGearFill } from "react-icons/bs";
import LoadingComponent from "../common/loading/LoadingComponent";

const DetailWrap = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailContainer = styled.div`
  width: 70rem;
`;

const DetailTitle = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  text-align: left;
  width: 100%;
`;

const DetailTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailIconWrap = styled.div`
  display: flex;
  align-items: center;
`;

const DetailHR = styled.hr`
  margin: 2rem 0;
`;

const DetailContent = styled.div`
  font-size: 2rem;
  min-height: 20rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  /* text-align: right; */
  justify-content: right;
  -webkit-justify-content: right;
  -ms-justify-content: right;
  -moz-justify-content: right;
`;

const StyledBackButton = styled(RoundedButton)`
  background: grey;
  width: 10rem;
`;

const StyledGearIcon = styled(BsGearFill)`
  color: grey;
  font-size: 1.7rem;
  cursor: pointer;
`;

const StyledTrashIcon = styled(BsTrashFill)`
  color: grey;
  font-size: 1.7rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

function DetailComponent({ data, loading }) {
  // data = null <-   data.title undefined error!!!
  // data = {title , content}

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        data && (
          <DetailWrap>
            <DetailContainer>
              <DetailTitleWrap>
                <DetailTitle>{data.title}</DetailTitle>
                <DetailIconWrap>
                  <StyledGearIcon />
                  <StyledTrashIcon />
                </DetailIconWrap>
              </DetailTitleWrap>
              <DetailHR />
              <DetailContent
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              <ButtonWrap>
                <StyledBackButton>뒤로가기</StyledBackButton>
              </ButtonWrap>
            </DetailContainer>
          </DetailWrap>
        )
      )}
    </>
  );
}

export default DetailComponent;
