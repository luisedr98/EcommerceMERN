import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { tablet } from "../responsive";

const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 2rem;
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;

  ${tablet({
    fontSize: "7rem",
  })}
`;

const Description = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  width: 100%;
  font-weight: 300;
  height: 4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightgray;

  ${tablet({
    flexDirection: "row",
    width: "50%",
  })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding: 1rem;

  ${tablet({
    flex: "8",
  })}
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${tablet({
    flex: "4",
  })}
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
