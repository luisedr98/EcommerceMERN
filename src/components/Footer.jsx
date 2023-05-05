import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
const Logo = styled.h1``;

const Description = styled.p`
  margin: 2rem 0;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Center = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Title = styled.h3`
  margin-bottom: 2rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 1.5rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Payment = styled.img``;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon color="2b5999">
            <Facebook style={{ fontSize: "2.5rem" }} />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram style={{ fontSize: "2.5rem" }} />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter style={{ fontSize: "2.5rem" }} />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest style={{ fontSize: "2.5rem" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful List</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ fontSize: "2rem" }} />
          Ecuador, Santo Domingo
        </ContactItem>
        <ContactItem>
          <Phone style={{ fontSize: "2rem" }} />
          +59399998978
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ fontSize: "2rem" }} />
          bussinessstore@store.com
        </ContactItem>
        <Payment
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          style={{ width: "60%" }}
        />
      </Right>
    </Container>
  );
};
