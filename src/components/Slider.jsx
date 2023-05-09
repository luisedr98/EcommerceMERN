import { useState } from "react";
import styled from "styled-components";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { tablet } from "../responsive";

import { Slide } from "./";
import { sliders } from "../data";

const Container = styled.section`
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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 200;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleOnClick = (direction) => {
    if (direction === "left")
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleOnClick("left")}>
        <ArrowBackIcon style={{ fontSize: "2.5rem" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliders.map((slider) => (
          <Slide
            key={slider.id}
            backgroundColor={slider.backgroundColor}
            description={slider.description}
            image={slider.image}
            title={slider.title}
          ></Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleOnClick("right")}>
        <ArrowForwardIcon style={{ fontSize: "2.5rem" }} />
      </Arrow>
    </Container>
  );
};
