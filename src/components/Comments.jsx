import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.softcore};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  font-size: 15px;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrWps2upGevuvXZxkp1g52wwo0C00x6BZFKk-hJV5SQvcylGNjr0hnDgO0btsRBnWwuc&usqp=CAU" />
        <Input placeholder="Add a comment..." />
      </NewComment>

      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
