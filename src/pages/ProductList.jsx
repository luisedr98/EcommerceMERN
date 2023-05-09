import styled from "styled-components";
import {
  Ammouncent,
  NavBar,
  Newsletter,
  Products,
  Footer,
} from "../components";
import { tablet } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 2rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${tablet({
    flexDirection: "row",
  })}
`;
const Filter = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${tablet({
    display: "unset",
  })}
`;

const FilterText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-right: 2rem;
`;

const Select = styled.select`
  padding: 1rem;
  margin-right: 2rem;
`;
const Option = styled.option``;

export const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Ammouncent />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
