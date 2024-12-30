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

  @media (max-width: 1440px) {
    font-size: 14px;
  }

  @media (max-width: 1280px) {
    font-size: 13px;
  }

  @media (max-width: 1200px) {
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 800px) {
    padding: 0 15px;
    margin: 0 20px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    margin: 20px !important;
  }

  @media (max-width: 480px) {
    align-items: center;
    padding: 0 10px;
    margin: 0;
  }

  @media (max-width: 375px) {
    align-items: center;
    padding: 0 10px;
    margin: 0 10px;
  }
`;

export const Main = styled.h1`
  text-align: left;
  font-weight: 400;
  font-size: 21px;
  font-style: normal;
  padding: 10px 20px;
  margin-bottom: 50px;
  border: 1px solid #515151;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.63);

  @media (max-width: 1600px) {
    font-size: 14px;
    margin-bottom: 20px;
  }

  @media (max-width: 1440px) {
    font-size: 14px;
    margin-bottom: 20px;
  }

  @media (max-width: 1280px) {
    font-size: 13px;
    margin-bottom: 15px;
  }

  @media (max-width: 1200px) {
    text-align: left;
    font-size: 12px;
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    text-align: left;
    font-size: 12px;
    margin-bottom: 5px;
    padding: 5px 10px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: left;
    padding: 10px;
    margin: 5px 10px;
    width: 50%;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    padding: 5px 10px;
    margin: 5px 10px;
    width: 80%;
    border-radius: 12px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
    text-align: center;
    padding: 5px 10px;
    margin: 5px 10px;
    width: 90%;
    border-radius: 12px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
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

  @media (max-width: 1600px) {
    font-size: 18px;
    width: 80%;
  }

  @media (max-width: 1440px) {
    font-size: 16px;
    width: 80%;
  }

  @media (max-width: 1280px) {
    font-size: 14px;
    width: 90%;
  }

  @media (max-width: 1200px) {
    text-align: left;
    font-size: 15px;
    width: 100%;
  }

  @media (max-width: 800px) {
    text-align: left;
    font-size: 12px;
    margin-bottom: 5px;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    text-align: left;
    width: 90%;
    margin: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    width: 100%;
    margin: 20px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
    text-align: center;
    width: 100%;
    margin: 20px;
  }
`;

export const ContentTechnologies = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 1440px) {
    font-size: 14px;
  }

  @media (max-width: 1280px) {
    font-size: 13px;
  }

  @media (max-width: 1200px) {
    font-size: 12px;
  }

  @media (max-width: 800px) {
    font-size: 10px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    justify-content: center;
    margin: 5px 10px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    justify-content: center;
    margin: 10px 0px;
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

  @media (max-width: 1440px) {
    font-size: 16px;
    padding: 8px 18px;
    margin-bottom: 30px;
  }

  @media (max-width: 1280px) {
    font-size: 14px;
    padding: 6px 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    text-align: center;
    font-size: 12px;
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    font-size: 10px;
    margin-right: 5px;
    padding: 5px 10px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: 5px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
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

  @media (max-width: 1440px) {
    font-size: 14px;
    padding: 8px 18px;
    margin-bottom: 30px;
  }

  @media (max-width: 1280px) {
    font-size: 13px;
    padding: 6px 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    text-align: center;
    font-size: 12px;
    margin-bottom: 5px;
  }

  @media (max-width: 800px) {
    font-size: 10px;
    text-align: center;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
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

  @media (max-width: 935px) and (min-width: 768px) {
    margin: 20px 5px 5px 5px;
    flex-direction: column-reverse;
    align-items: center;

    button {
      width: 100%;
      max-width: 300px;
      margin: 15px 0;
      padding: 8px 16px;
      font-size: 10px;
    }

    ${TextRight} {
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 480px) {
    justify-content: center;
    margin: 10px 0px;

    button {
      font-size: 12px;
      padding: 8px 16px;
    }
  }

  @media (max-width: 375px) {
    justify-content: center;
    margin: 20px 0px 5px 0px;

    button {
      font-size: 12px !important;
      padding: 5px 12px !important;
      width: 200px !important;
      height: 40px !important;
    }
  }
`;
