import styled from "styled-components";
import { Ammouncent, Footer, NavBar } from "../components";
import { Add, Remove } from "@mui/icons-material";
import { tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  padding: 2rem;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  ${tablet({
    flexDirection: "row",
  })}
`;

const TopButton = styled.button`
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  color: white;
  background-color: teal;

  &:hover {
    background-color: #035757;
  }
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 1rem;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${tablet({
    flexDirection: "row",
  })};
`;
const Info = styled.div`
  flex: 2;
`;

const Product = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-evenly;

  ${tablet({
    flexDirection: "row",
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 20rem;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${tablet({
    flexDirection: "column",
  })}
`;

const ProductAmmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${tablet({
    flexDirection: "column",
  })}
`;
const ProductAmmount = styled.div`
  font-size: 2.4rem;
  margin: 0.5rem;
`;
const ProductPrice = styled.div`
  font-size: 3rem;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 0.1rem;
`;

const Summary = styled.div`
  margin-left: 2rem;
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 2rem;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  display: flex;
  justify-content: space-between;
`;
const SummaryItem = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "2.4rem"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  color: white;
  background-color: teal;

  &:hover {
    background-color: #035757;
  }
`;

export const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Ammouncent />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (2)</TopText>
          </TopTexts>
          <TopButton>Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Dessie Thunder
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 09988988998
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmountContainer>
                  <Add />
                  <ProductAmmount>2</ProductAmmount>
                  <Remove />
                </ProductAmmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>

            {/* <Hr /> */}
          </Info>
          <Summary>
            <SummaryTitle>Order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Estimated Shopping</SummaryItemText>
              <SummaryItemPrice>$ 30</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ - 0.30</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$27.70</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
