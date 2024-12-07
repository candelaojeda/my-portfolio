import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .cursor {
    background-color: #fde400;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  body {
    background-color: black;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100vh;
    font-family: "Lexend Giga", sans-serif;
  }

  .background {
    background-image: url('/images/moonopacity.png');
    background-size: contain; 
    background-position: top center; 
    background-repeat: no-repeat; 
    height: 100vh; 
    width: 100vw; 
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .App {
    height: 100%;
    position: relative; 
    z-index: 1;
  }

  .section-content {
    transition: opacity 0.5s ease-in-out;
  }
`;

export default GlobalStyles;
