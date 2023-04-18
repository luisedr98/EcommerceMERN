import styled from "styled-components";


const Container = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
`;


const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 40%;
    margin: 0 auto;
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h2`
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: 800;
`;

const Description = styled.p`
    font-size: 2.5rem;
    margin-top: 1.5rem;
`;

const Button = styled.button`
    padding: 1rem 1.5rem;
    background-color: transparent;
    cursor: pointer;
`;



export const Slide = () => {
    return (
        <>
            <Container>
                <ImageContainer>
                    <Image src="/slider_woman.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Summer Sale</Title>
                    <Description>Don't compromise on style. 30% discount for new arrivals</Description>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Container>
        </>
    )
}
