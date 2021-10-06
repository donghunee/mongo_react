import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

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

function PostItemComponent({ post, onClickPost }) {
  const { title, content, writer, writeTime, _id } = post;
  const formatDate = dayjs(writeTime).format("YYYY-MM-DD");

  return (
    <ItemBox onClick={() => onClickPost(_id)}>
      <ItemTitle>{title}</ItemTitle>
      <ItemInfoWrap>
        <ItemWriter>{writer && writer.name}</ItemWriter>
        <ItemCreatedDate>{formatDate}</ItemCreatedDate>
      </ItemInfoWrap>
      <hr />
      <ItemContent dangerouslySetInnerHTML={{ __html: content }} />
    </ItemBox>
  );
}

export default PostItemComponent;
