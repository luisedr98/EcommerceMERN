import styled from "styled-components";
import { Ammouncent, Footer, NavBar, Newsletter } from "../components";
import { Add, Remove } from "@mui/icons-material";
import { tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  ${tablet({
    flexDirection: "row",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 30rem;
  margin: 0 auto;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 1rem;
`;
const Title = styled.h1`
  margin-top: 2rem;
  font-weight: 200;
`;
const Description = styled.p`
  margin: 2rem 0;
  line-height: 1.3;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 4rem;
`;

const FilterContainer = styled.div`
  width: 40%;
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 200;
`;

// TODO: CHANGE DIV TAG TO BUTTON
const FilterColor = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.5rem;
  cursor: pointer;
  border: none;
`;
const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  column-gap: 1rem;
`;
const Amount = styled.span`
  width: 30px;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;
const Button = styled.button`
  border: none;
  padding: 1rem;
  cursor: pointer;
  color: white;
  background-color: teal;
  transition: background 0.5 ease-in-out;

  &:hover {
    background-color: #035757;
  }
`;

export const Product = () => {
  return (
    <Container>
      <NavBar />
      <Ammouncent />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Description>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
