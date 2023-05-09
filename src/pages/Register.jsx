import styled from "styled-components";
import { tablet } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center right;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 2rem;
  width: 95%;
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  ${tablet({
    width: "60%",
  })}
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${tablet({
    flexDirection: "row",
    flexWrap: "wrap",
  })}
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 2rem 1rem 0 0;
  padding: 1rem;
`;

const Agreement = styled.span`
  font-size: 1.5rem;
  margin: 2rem 0px;
  display: inline-block;
  width: 100%;
  line-height: 1.5;
`;
const Button = styled.button`
  border: none;
  padding: 1.5rem;
  cursor: pointer;
  color: white;
  background-color: teal;
  transition: background 0.5 ease-in-out;

  &:hover {
    background-color: #035757;
  }

  ${tablet({
    display: "block",
    margin: "0 auto",
    padding: "1.5rem 3rem",
  })}
`;

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input type="text" placeholder="enter your name" />
          <Input type="text" placeholder="enter your last name" />
          <Input type="text" placeholder="enter your username" />
          <Input type="email" placeholder="enter your email" />
          <Input type="passwod" placeholder="enter your password" />
          <Input type="passwod" placeholder="confirm your password" />
          <Input type="text" placeholder="enter your name" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create an account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
