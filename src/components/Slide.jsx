import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    background-color: #${ (props)  => props.backgroundColor };
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

export const Slide = ({ backgroundColor = null, id = null, title = null, description = null, image = null }) => {
    return (
        <>
            <Container backgroundColor={backgroundColor}>
                <ImageContainer>
                    <Image src={image} loading="lazy" alt={`${id}-${title}`}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Container>
        </>
    )
}
