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
    // height: 100vh;
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
    transition: all 3s ease-in-out;

    @keyframes twinkle {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 0.2; }
    }

    @media (max-width: 768px) and (min-width: 50px) {
      transform: none !important;
      transition: all 3s ease-in-out;
      
      .background {
        display: none;
      }

      background-color: black;
      background-image: 
        radial-gradient(2px 2px at 10% 20%, white, transparent), 
        radial-gradient(2px 2px at 40% 50%, white, transparent),
        radial-gradient(2px 2px at 70% 80%, white, transparent),
        radial-gradient(2px 2px at 90% 10%, white, transparent),
        radial-gradient(2px 2px at 20% 70%, white, transparent),
        radial-gradient(2px 2px at 50% 90%, white, transparent),
        radial-gradient(2px 2px at 80% 30%, white, transparent),

        radial-gradient(2px 2px at 8% 18%, white, transparent), 
        radial-gradient(2px 2px at 48% 58%, white, transparent),
        radial-gradient(2px 2px at 78% 88%, white, transparent),
        radial-gradient(2px 2px at 98% 18%, white, transparent),
        radial-gradient(2px 2px at 28% 78%, white, transparent),
        radial-gradient(2px 2px at 58% 98%, white, transparent),
        radial-gradient(2px 2px at 88% 38%, white, transparent),

        radial-gradient(2px 2px at 5% 25%, white, transparent), 
        radial-gradient(2px 2px at 35% 45%, white, transparent),
        radial-gradient(2px 2px at 65% 75%, white, transparent),
        radial-gradient(2px 2px at 95% 25%, white, transparent),
        radial-gradient(2px 2px at 25% 65%, white, transparent),
        radial-gradient(2px 2px at 45% 95%, white, transparent),
        radial-gradient(2px 2px at 75% 35%, white, transparent),

        radial-gradient(1px 1px at 5% 10%, white, transparent), 
        radial-gradient(1px 1px at 30% 40%, white, transparent),
        radial-gradient(1px 1px at 60% 70%, white, transparent),
        radial-gradient(1px 1px at 90% 10%, white, transparent),
        radial-gradient(1px 1px at 10% 60%, white, transparent),
        radial-gradient(1px 1px at 40% 90%, white, transparent),
        radial-gradient(1px 1px at 70% 30%, white, transparent);

        radial-gradient(1px 1px at 1% 7%, white, transparent), 
        radial-gradient(1px 1px at 1% 18%, white, transparent),
        radial-gradient(1px 1px at 14% 19%, white, transparent),
        radial-gradient(1px 1px at 15% 11%, white, transparent),
        radial-gradient(1px 1px at 6% 13%, white, transparent),
        radial-gradient(1px 1px at 7% 15%, white, transparent),
        radial-gradient(1px 1px at 18% 17%, white, transparent);

        radial-gradient(2px 2px at 2% 7%, white, transparent), 
        radial-gradient(2px 2px at 3% 8%, white, transparent),
        radial-gradient(2px 2px at 4% 9%, white, transparent),
        radial-gradient(2px 2px at 5% 22%, white, transparent),
        radial-gradient(2px 2px at 6% 23%, white, transparent),
        radial-gradient(2px 2px at 7% 25%, white, transparent),
        radial-gradient(2px 2px at 8% 17%, white, transparent);

      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 3s ease-in-out;
      height: 100vh;
      width: 100vw;
      animation: twinkle 3s infinite ease-in-out;
    }
  }

  .App {
    height: 100%;
    position: relative; 
    z-index: 1;
  }

  .section-content {
    transition: opacity 0.5s ease-in-out;
  }

  @media (max-width: 1024px) {
    body {
      font-size: 16px;
    }

    .cursor {
      height: 8px;
      width: 8px;
    }
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 12px;
    }

    .cursor {
      display: none; 
    }
  }
`;

export default GlobalStyles;
