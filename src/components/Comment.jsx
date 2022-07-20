import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 35px 0px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrWps2upGevuvXZxkp1g52wwo0C00x6BZFKk-hJV5SQvcylGNjr0hnDgO0btsRBnWwuc&usqp=CAU" />
      <Details>
        <Name>
          Nature Calling <Date>2 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde
          optio explicabo, tempore debitis minima dignissimos odio. Tempore
          doloremque dolore aliquid consequatur facere, eos cumque est
          consequuntur veniam fuga delectus!
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
