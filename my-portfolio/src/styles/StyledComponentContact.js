import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  height: 100vh;
  color: white;
  font-family: "Source Code Pro", monospace;
  font-size: 60px;
  font-weight: 900;
  margin: 0px 50px;
  padding-right: 50px;

  p {
    width: 500px;
    text-align: end;
    margin: 0px 100px;

    span {
      font-family: "Source Code Pro", monospace;
      font-weight: 200;
      font-style: italic;
    }
  }

  @media (max-width: 768px) {
    font-size: 45px;
    margin: 0px 30px;
    padding-right: 30px;

    p {
      width: 400px;
      margin: 0px 50px;
    }

    button {
      font-size: 15px;
      width: 300px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    font-size: 35px;
    margin: 0px 20px;
    padding-right: 20px;

    p {
      width: 300px;
      margin: 0px 20px;
    }

    button {
      font-size: 12px;
      width: 250px;
      height: 50px;
    }
  }
`;

export const ContentButton = styled.div`
  margin: 30px 100px;

  @media (max-width: 768px) {
    margin: 20px 50px;
  }

  @media (max-width: 480px) {
    margin: 15px 20px;
  }
`;
