import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body, html {
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    
    background-color: ${(props) => props.theme["gray-900"]};
  }
`;
