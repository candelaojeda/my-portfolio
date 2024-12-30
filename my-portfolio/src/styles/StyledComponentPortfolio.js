import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: "Lexend Giga", sans-serif;
  color: #ffffff;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 50px;
  width: 20%;

  @media (max-width: 1680px) {
    gap: 10px;
    padding: 0px 50px;
    width: 20%;
  }

  @media (max-width: 1600px) {
    gap: 10px;
    padding: 0px 50px;
    width: 20%;
  }

  @media (max-width: 1440px) {
    gap: 10px;
    padding: 0px 50px;
    width: 28%;
  }

  @media (max-width: 1366px) {
    gap: 10px;
    padding: 0px 30px;
    width: 20%;
  }

  @media (max-width: 1280px) {
    gap: 10px;
    padding: 0px 30px;
    width: 23%;
  }
  @media (max-width: 1152px) {
    gap: 10px;
    padding: 0px 50px;
    width: 28%;
  }

  @media (max-width: 1024px) {
    gap: 5px;
    padding: 0px 50px;
    width: 42%;
  }

  @media (max-width: 800px) {
    gap: 2px;
    padding: 0px 50px;
    width: 70%;
  }

  @media (max-width: 768px) {
    gap: 2px;
    padding: 0px 50px;
    width: 70%;
  }

  @media (max-width: 480px) {
    width: auto;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    top: 90px;
    margin: 10px 0px;
  }

  @media (max-width: 320px) {
    width: auto;
    gap: 10px;
    padding: 0px 30px !important;
  }
`;

export const TagButton = styled.button`
  padding: 10px 20px;
  background: none;
  color: ${({ active }) => (active ? "#fde400" : "#ffffff")};
  text-align: left;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
  font-family: "Lexend Giga", sans-serif;
  font-weight: 200;
  font-size: 20px;
  font-style: normal;

  &:hover {
    font-weight: 300;
    letter-spacing: 1px;
  }

  @media (max-width: 1440px) {
    font-size: 18px;
  }

  @media (max-width: 1152px) {
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 800px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 0 8px;

    &:hover {
      font-weight: 300;
    }
  }

  @media (max-width: 375px) {
    font-size: 9px;
    padding: 0 5px;

    &:hover {
      font-weight: 300;
    }
  }

  @media (max-width: 320px) {
    margin: 0;
    width: 75px;
    font-size: 9px;
    padding: 0;

    &:hover {
      font-weight: 200;
      letter-spacing: 0px !important;
    }
  }
`;

export const ContentGrid = styled.div`
  margin: 0px 50px 0px 30px;

  //estilos para projects y para social media

  .portfolio-grid-projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    margin: 20px 0;
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;

    .portfolio-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      width: 200px;
      height: 200px;
      border: 1px solid #515151;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.63);
      transition: transform 0.3s ease;
      cursor: pointer;

      h5 {
        margin: 10px 0;
        text-align: center;
        font-size: 15px;
      }

      p {
        margin: 0;
        font-size: 12px;
        text-align: center;
      }

      &:hover {
        transform: scale(1.05);
      }

      .a-project {
        margin-top: 10px;
        text-decoration: none;
        color: #fde400;
        font-size: 14px;
        text-align: center;
      }
    }
  }

  // media queries proyetos y social media

  @media (max-width: 375px) {
    margin: 0px 30px;
    .portfolio-grid-projects {
      height: 330px !important;

      .portfolio-item {
        width: 100px !important;
        height: 100px !important;
        padding: 10px;

        h5 {
          margin: 5px 0;
          font-size: 11px !important;
        }

        p {
          font-size: 10px !important;
        }

        .a-project {
          font-size: 11px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    margin: 0px 30px;
    .portfolio-grid-projects {
      height: 300px !important;

      .portfolio-item {
        h5 {
          margin: 5px 0;
          font-size: 11px !important;
        }

        p {
          font-size: 10px !important;
        }

        .a-project {
          font-size: 11px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .portfolio-grid-projects {
      height: 400px;
      .portfolio-item {
        width: 100px !important;
        height: 100px !important;

        h5 {
          margin: 8px 0;
          font-size: 12px;
        }

        p {
          font-size: 10px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .portfolio-grid-projects {
      height: 400px;
      .portfolio-item {
        width: 130px !important;
        height: 130px !important;

        h5 {
          margin: 8px 0;
          font-size: 12px;
        }

        p {
          font-size: 10px;
        }
      }
    }
  }

  @media (max-width: 1440px) {
    .portfolio-grid-projects {
      .portfolio-item {
        width: 180px;
        height: 180px;
      }
    }
  }

  //estilos para logos

  .portfolio-grid-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 0 20px;
    padding: 10px;
    height: auto;
    overflow-x: auto;
  }

  .portfolio-item-logos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    img {
      width: 200px;
      height: 150px;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    img:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

    h5 {
      margin: 20px 0 5px 0;
    }

    p {
      margin: 0;
      font-size: 12px;
    }
  }

  // media queries logos

  @media (max-width: 1600px) {
    .portfolio-item-logos {
      img {
        width: 180px;
        height: 130px;
      }
    }
  }

  @media (max-width: 1440px) {
    .portfolio-item-logos {
      img {
        width: 150px;
        height: 100px;
      }
    }
  }

  @media (max-width: 1366px) {
    .portfolio-item-logos {
      img {
        width: 120px;
        height: 80px;
      }
    }
  }

  @media (max-width: 1152px) {
    .portfolio-item-logos {
      img {
        width: 140px;
        height: 100px;
      }
    }
  }

  @media (max-width: 1024px) {
    .portfolio-item-logos {
      img {
        width: 130px;
        height: 90px;
      }
    }
  }

  @media (max-width: 800px) {
    .portfolio-item-logos {
      img {
        width: 100px;
        height: 60px;
      }

      h5 {
        font-size: 10px;
      }

      p {
        font-size: 9px;
      }
    }
  }

  @media (max-width: 768px) {
    .portfolio-grid-logos {
      gap: 10px;
      margin: 0 10px;
    }

    .portfolio-item-logos img {
      width: 80px;
    }
  }

  @media (max-width: 480px) {
    .portfolio-grid-logos {
      height: 300px;
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      padding: 0 10px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .portfolio-item-logos img {
      width: 100px;
    }
  }
`;
