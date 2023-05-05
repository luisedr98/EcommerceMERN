import { FavoriteBorder, Search, SearchOffOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 /.1);
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eff6ff;
    padding: 2rem;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    background-color: white;
    border-radius: 50%;

`

const Image = styled.img`
    height: 25rem;
    margin: 0 auto;
`

const Icon = styled.div`
    width: 4rem;
    height: 4rem;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 1s ease-in;
    &:hover{
        background-color: #fdfafa;
        transform: scale(1.1);
    }
`;


export const ProductItem =  ({ id, img }) => {
    return (
        <>
            <Container>
                <Circle>
                    <Image src={img} loading="lazy" alt={`${id}-${img}-image`}/>
                </Circle>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined style={{ fontSize: '2.8rem'}}/>
                    </Icon>
                    <Icon>
                        <Search style={{ fontSize: '2.8rem'}}/>
                    </Icon>
                    <Icon>
                        <FavoriteBorder style={{ fontSize: '2.8rem'}}/>
                    </Icon>
                </Info>
            </Container>
        </>
    )
}
