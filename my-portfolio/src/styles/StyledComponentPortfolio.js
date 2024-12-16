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
  width: 15%;

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
    width: 22%;
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
    width: 31%;
  }

  @media (max-width: 800px) {
    gap: 2px;
    padding: 0px 50px;
    width: 36%;
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

  @media (max-width: 1152px) {
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 800px) {
    font-size: 11px;
  }
`;

export const ContentGrid = styled.div`
  margin: 0px 50px 0px 0px;

  .portfolio-grid-projects {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: auto;
    overflow-x: hidden;
    height: 500px;
    padding: 5px;
    margin: 10px 20px;
    gap: 15px;
    align-items: left;
  }

  .portfolio-grid-projects::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .portfolio-grid-projects::-webkit-scrollbar-track {
    background: #222;
    border-radius: 10px;
  }

  .portfolio-grid-projects::-webkit-scrollbar-thumb {
    background: #fde400;
    border-radius: 10px;
    border: 2px solid #222;
  }

  .portfolio-grid-projects::-webkit-scrollbar-thumb:hover {
    background: #f1c40f;
  }

  .portfolio-item {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
    margin: 0px 20px;
    max-width: 100%;
    font-weight: 400;
    font-size: 18px;
    padding: 15px 25px;
    border: 1px solid #515151;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.63);

    h5 {
      margin: 0 50px 0 20px;
    }
  }

  .a-project {
    font-size: 15px;
    margin: 0 20px;
    text-decoration: none;
    color: #fde400;
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

  //media queries projects

  @media (max-width: 1366px) {
    .portfolio-grid-projects {
      height: 360px;
    }

    .portfolio-item {
      font-size: 15px;
      padding: 10px 20px;
      border-radius: 15px;
    }
  }

  @media (max-width: 1280px) {
    .portfolio-grid-projects {
      height: 320px;
    }

    .portfolio-item {
      font-size: 15px;
      padding: 10px 20px;
      border-radius: 15px;
    }
  }

  @media (max-width: 1024px) {
    .portfolio-grid-projects .portfolio-item {
      font-size: 12px;
      padding: 8px 18px;
    }

    .a-project {
      font-size: 12px;
    }
  }

  @media (max-width: 800px) {
    section .portfolio-grid-projects {
      height: 250px;

      .portfolio-item {
        font-size: 12px;
        padding: 5px 8px;
        border-radius: 15px;
        margin: 0px 10px;
      }

      h5 {
        margin: 0 50px 0 10px;
        font-weight: 300;
      }
    }

    .a-project {
      font-size: 9px;
      font-weight: 300;
      margin: 0 10px;
    }
  }

  // media queries logos

  @media (max-width: 1600px) {
    .portfolio-grid-projects {
      height: 450px;
    }

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
    .portfolio-grid-projects {
      height: 350px;
    }

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
      flex-wrap: nowrap;
      overflow-x: scroll;
      gap: 10px;
    }

    .portfolio-item-logos img {
      width: 70px;
    }
  }
`;
