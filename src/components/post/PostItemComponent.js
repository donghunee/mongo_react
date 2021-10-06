import React from "react";
import styled from "styled-components";

const ItemBox = styled.div`
  border: 1px solid grey;
  padding: 1rem;
  box-sizing: border-box;
  width: 50rem;
  cursor: pointer;

  & + & {
    margin-top: 1rem;
  }
`;

const ItemTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;

const ItemInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemWriter = styled.div`
  font-size: 1.4rem;
  font-weight: normal;
  color: grey;
`;

const ItemCreatedDate = styled.div`
  font-size: 1.4rem;
  font-weight: normal;
  color: grey;
`;

const ItemContent = styled.div`
  font-size: 1.6rem;
  font-weight: normal;
  padding: 1rem 0;
`;

function PostItemComponent() {
  return (
    <ItemBox>
      <ItemTitle>제목 테스트</ItemTitle>
      <ItemInfoWrap>
        <ItemWriter>ssac</ItemWriter>
        <ItemCreatedDate>2021-10-6</ItemCreatedDate>
      </ItemInfoWrap>
      <hr />
      <ItemContent>내용 테스트</ItemContent>
    </ItemBox>
  );
}

export default PostItemComponent;
