
import  Search  from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    padding: 1rem 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 768px){
        flex-direction: row;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
`;

const Language = styled.span`
    font-size: 1.4rem;
    cursor: pointer;
`

const SearhConatiner = styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
`;

const Input =styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 2;
`;

const Logo = styled.h1`
    text-align: center;
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`;

const MenuLink = styled.a`
    cursor: pointer;

`


export const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearhConatiner>
                    <Input/>
                    <Search style={{ fontSize : '2.5rem', color: 'gray'}} />
                </SearhConatiner>
            </Left>
            <Center>
                <Logo>Store</Logo>
            </Center>
            <Right>
                <MenuLink>Register</MenuLink>
                <MenuLink>Sign in</MenuLink>
                <MenuLink>
                    <Badge badgeContent={4} color="primary">
                        <MailIcon color="action" style={{ fontSize: '2.5rem'}} />
                    </Badge>
                </MenuLink>
            </Right>
        </Wrapper>
    </Container>
  )
}
