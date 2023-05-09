import styled from "styled-components";
import { tablet } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center right;

  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 2rem;
  width: 70%;
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  ${tablet({
    width: "45%",
  })}
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem 0;
  padding: 1rem;
`;

const Button = styled.button`
  margin: 1rem 0;
  width: 40%;
  border: none;
  padding: 1rem;
  color: white;
  cursor: pointer;
  align-self: center;

  background-color: teal;
  transition: background 0.5 ease-in-out;

  &:hover {
    background-color: #035757;
  }
`;

const Link = styled.a`
  margin: 0.5rem 0 1.5rem 0;
  font-size: 1.5rem;
  display: block;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 400;
`;

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input type="text" placeholder="enter your username" />
          <Input type="passwod" placeholder="enter your password" />
          <Button>Login</Button>
        </Form>
        <Link>Don't you remember your password</Link>
        <Link>Create an account</Link>
      </Wrapper>
    </Container>
  );
};
