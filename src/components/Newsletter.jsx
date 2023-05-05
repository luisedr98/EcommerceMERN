import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 2rem;
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    /* width: 70rem;
    flex-direction: row; */
  }
`;

const Title = styled.h1`
  font-size: 7rem;
  text-align: center;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  width: 50%;
  font-weight: 300;
  height: 4rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding: 0.5rem;
`;

const Button = styled.button`
  flex: 2;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export const Newsletter = () => {
  return (
    <>
      <Container>
        <Title>Newsletter</Title>
        <Description>
          Subscribe and recieve the newsletter about our products!
        </Description>
        <InputContainer>
          <Input id="input-letter" placeholder="Enter your Email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Container>
    </>
  );
};
