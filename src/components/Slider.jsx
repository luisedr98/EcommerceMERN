import styled from "styled-components"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Slide } from "./";

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    border-radius: 50%;
    background-color: #f5e3dd;
    border: none;
    width: 5.5rem;
    height: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left : ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: .5;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    
`;




export const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowBackIcon style={{ fontSize: '2.5rem' }} />
            </Arrow>
            <Wrapper>
                <Slide></Slide>
                <Slide></Slide>
                <Slide></Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowForwardIcon style={{ fontSize: '2.5rem' }} />
            </Arrow>
        </Container>

    )
}
