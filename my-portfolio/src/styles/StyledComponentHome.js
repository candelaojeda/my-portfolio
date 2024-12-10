import styled from "styled-components";
import {
  GitHub,
  LinkedIn,
  MusicNote,
  MusicOff,
  Language,
} from "@mui/icons-material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  padding-top: 30px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 50px;
  padding: 10px 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    top: 30px;
    padding: 8px 15px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
  }
`;

export const Logo = styled.img`
  width: 40px;
  margin: 0px 50px;

  @media (max-width: 768px) {
    width: 35px;
    margin: 0px 30px;
  }

  @media (max-width: 480px) {
    width: 30px;
    margin: 0px 20px;
  }
`;

export const NavItem = styled.a`
  margin: 0 40px;
  color: ${({ isActive }) => (isActive ? "#fde400" : "white")};
  text-decoration: none;
  font-family: "Lexend Giga", sans-serif;
  font-weight: 200;
  font-size: 15px;
  font-style: normal;
  transition: color 0.3s ease;

  &:hover {
    color: #fde400;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 30px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin: 0 15px;
  }
`;

export const Greeting = styled.h1`
  text-align: left;
  font-weight: 200;
  font-size: 40px;
  font-style: normal;
  padding: 0px;
  margin: 0px 10px;

  @media (max-width: 1200px) {
    text-align: center;
    font-size: 30px;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    text-align: center;
    font-size: 16px;
  }
`;

export const Name = styled.h2`
  font-size: 6rem;
  font-weight: 600;
  text-align: center;
  padding: 0px;
  margin: 0px 10px;
  color: #fde400;
  background-color: transparent;

  @media (max-width: 1200px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const ExploreButton = styled.button`
  margin: 50px;
  padding: 10px 30px;
  font-family: "Lexend Giga", sans-serif;
  font-weight: 400;
  font-size: 21px;
  letter-spacing: 1.5px;
  color: black;
  width: 200px;
  height: 58px;
  background-color: #fde400;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover {
    box-shadow: 2px 2px 30px 2px rgba(253, 228, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 50px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 45px;
    font-size: 16px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterMusicIcon = styled.div`
  margin: 0px 20px;
  position: fixed;
  bottom: 50px;
  right: 50px;

  @media (max-width: 768px) {
    bottom: 30px;
    right: 15px;
  }

  @media (max-width: 480px) {
    bottom: 20px;
    right: 10px;
  }
`;

export const Icon = styled.img`
  width: 30px;

  &:hover {
    box-shadow: 10px 10px 20px rgba(253, 228, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 25px;
  }

  @media (max-width: 480px) {
    width: 20px;
  }
`;

export { GitHub, LinkedIn, MusicNote, MusicOff, Language };
