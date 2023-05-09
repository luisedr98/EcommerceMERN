import styled from "styled-components";
import { tablet } from "../responsive";

const Container = styled.div`
  padding: 1rem;
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #${(props) => props.backgroundColor};

  ${tablet({ flexDirection: "row" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 65%;
  margin: 0 auto;
  ${tablet({
    width: "45%",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 1rem;
  margin-top: 1.5rem;

  ${tablet({
    padding: "0",
    marginTop: "0",
  })}
`;

const Title = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 800;

  ${tablet({
    fontSize: "5rem",
  })}
`;

const Description = styled.p`
  font-size: 2.5rem;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  background-color: teal;
  cursor: pointer;
  border: none;
  color: white;
  transition: background-color 1s ease-in;

  &:hover {
    background-color: #035757;
    font-weight: 600;
  }
`;

export const Slide = ({
  backgroundColor = null,
  id = null,
  title = null,
  description = null,
  image = null,
}) => {
  return (
    <>
      <Container backgroundColor={backgroundColor}>
        <ImageContainer>
          <Image src={image} loading="lazy" alt={`${id}-${title}`} />
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button>SHOW NOW</Button>
        </InfoContainer>
      </Container>
    </>
  );
};
