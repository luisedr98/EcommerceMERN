import styled from "styled-components"

import { CategoryItem } from "./";

import { categories } from "../data";


const Container = styled.section`
    margin-top: 5rem;
    display: grid;
    gap: 2rem;
    padding: 0 2.5rem;
    

    @media (min-width: 768px){
        grid-template-columns : repeat(2, 1fr);
    }

    @media (min-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }
`;


export const Categories = () => {
  return (
    <>
        <Container>
            {
                categories.map( category => (
                    <CategoryItem key={category.id} 
                        id={category.id}
                        title={category.title} 
                        img={category.img}>
                    </CategoryItem>
                ))
            }
        </Container>
    </>
  )
}
