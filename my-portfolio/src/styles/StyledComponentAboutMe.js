import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  margin: 0 100px;
  color: white;
  padding: 0 20px;
  font-family: "Lexend Giga", sans-serif;

  @media (max-width: 1200px) {
    margin: 0 50px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    margin: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    margin: 0;
  }
`;

export const Main = styled.h1`
  text-align: left;
  font-weight: 400;
  font-size: 17px;
  font-style: normal;
  padding: 10px 20px;
  margin-bottom: 50px;
  border: 1px solid #515151;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.63);
  width: auto;

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const InitialText = styled.h1`
  text-align: left;
  font-weight: 400;
  font-size: 21px;
  font-style: normal;
  padding: 0px;
  margin-bottom: 20px;
  width: 60%;

  span {
    color: #fde400;
  }

  @media (max-width: 1200px) {
    font-size: 15px;
    width: 60%;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    width: 100%;
  }
`;

export const ContentTechnologies = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    justify-content: center;
  }
`;

export const Technology = styled.h1`
  text-align: left;
  font-weight: 500;
  font-size: 17px;
  font-style: normal;
  padding: 10px 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  color: #fde400;
  background-color: rgba(0, 0, 0, 0.63);
  border: 1px solid #fde400;
  border-radius: 20px;

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin: 5px;
  }
`;

export const TextRight = styled.h1`
  text-align: right;
  font-weight: 400;
  font-size: 15px;
  font-style: normal;
  padding: 10px 20px;
  margin-bottom: 50px;
  border: 1px solid #515151;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.63);

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  max-width: 1800px;

  button {
    font-size: 18px;
  }

  @media (max-width: 935px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
      max-width: 300px;
      margin: 10px 0;
      padding: 8px 16px;
      font-size: 14px;
    }

    ${TextRight} {
      text-align: center;
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
      max-width: 300px;
      margin: 10px 0;
      padding: 8px 16px;
      font-size: 14px;
    }

    ${TextRight} {
      text-align: center;
      margin-top: 10px;
    }
  }

  @media (max-width: 480px) {
    button {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
`;
