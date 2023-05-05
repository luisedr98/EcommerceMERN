import styled from "styled-components";

import { ProductItem } from "./";

import { popularProducts } from "../data";



const Container = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }
`;


export const Products = () => {
    return (
        <>
        <Container>
            {
                popularProducts.map( product => (
                    <ProductItem key={product.id} {...product}  />
                ))
            }
        </Container>
        </>
    )
}
