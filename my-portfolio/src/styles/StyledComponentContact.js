import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  padding: 0 50px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin: 10px;

  @media (max-width: 800px) {
    flex-direction: row;
    gap: 15px;
    margin: 5px 10px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 15px;
    margin: 5px 10px;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    gap: 10px;
    margin: 5px 10px;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  p {
    font-family: "Source Code Pro", monospace;
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    margin: 10px 10px 20px 10px;

    span {
      font-weight: 200;
      font-style: italic;
    }
  }

  @media (max-width: 1366px) {
    gap: 10px;

    p {
      margin: 10px;
      font-size: 45px;
    }
  }

  @media (max-width: 800px) {
    gap: 10px;

    p {
      margin: 5px;
      font-size: 30px;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 10px;

    p {
      margin: 10px;
      font-size: 30px;
    }
  }

  @media (max-width: 480px) {
    gap: 20px;

    p {
      margin-bottom: 40px;
      font-size: 30px;
    }
  }

  @media (max-width: 320px) {
    gap: 10px;

    p {
      font-size: 25px;
    }
  }
`;

export const ContentButton = styled.div`
  margin: 8px;

  @media (max-width: 1366px) {
    button {
      width: 300px;
      height: 50px;
      font-size: 15px;
    }
  }

  @media (max-width: 800px) {
    button {
      width: 270px;
      height: 40px;
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    button {
      width: 250px;
      height: 40px;
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    button {
      width: 220px;
      height: 35px;
      font-size: 11px;
    }
  }
`;
