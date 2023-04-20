import styled from "styled-components"

const Container = styled.div`
    position: relative;
`;

const Image = styled.img`
    height: 45rem;
    width: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;

const Title = styled.h3`
    color: white;
    font-weight: 600;
    font-size: 2.8rem;
    text-align: center;
`;

const Button = styled.button`
    padding: 1rem;
    border: none;
    background-color: white;
    border-radius: 2px;
    font-weight: 500;
    color: black;
    cursor: pointer;

    :hover{
        font-weight: 700;
        border: 1px solid black;
    }
`;


export const CategoryItem = ( { id , title, img }) => {
  return (
    <>
        <Container>
            <Image src={img} loading="lazy" alt={`${id}-${title}`}/>
            <Info>
                <Title>{title} </Title>
                <Button>SHOW NOW</Button>
            </Info>
        </Container>
    </>
  )
}
