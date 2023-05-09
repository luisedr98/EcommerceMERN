import { css } from "styled-components";

export const tablet = (props) => {
    return css`
   @media (min-width: 768px){
    ${props}
   }
  `;
};