import styled from "styled-components"


const Container = styled.div`
    margin: 0 auto;
    background-color: teal;
`;

const Description = styled.p`
    text-align: center;
    color: white;
    margin: 0;
    padding: 1rem;
    font-weight: 500;
`;

export const Ammouncent = () => {
  return (
    <>
        <Container> 
            <Description>Offert for this weekend! discount 50%</Description>
        </Container>
    </>
  )
}
