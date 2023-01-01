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

  input, span, p, button, a {
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${(props) => props.theme["blue-100"]};
    border-radius: 0;
    position: fixed;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${(props) => props.theme["blue-200"]};
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme["blue-200"]};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["gray-400"]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["gray-900"]};
    border-radius: 0;
  }
`;
