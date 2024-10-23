import styled from "styled-components";
import {
  GitHub,
  LinkedIn,
  Email,
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
    padding-top: 20px;
  }

  @media (max-width: 480px) {
    padding-top: 15px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    top: 30px;
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
  color: white;
  text-decoration: none;
  font-family: "Lexend Giga", sans-serif;
  font-weight: 200;
  font-size: 15px;
  font-style: normal;
  transition: color 0.3s ease;

  &:hover {
    color: #fde400;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 30px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin: 0 20px;
  }
`;

export const Greeting = styled.h1`
  text-align: left;
  font-weight: 200;
  font-size: 40px;
  font-style: normal;
  padding: 0px;
  margin: 0px;

  @media (max-width: 1200px) {
    font-size: 35px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 25px;
    text-align: center;
  }
`;

export const Name = styled.h2`
  font-size: 6rem;
  font-weight: 600;
  text-align: center;
  padding: 0px;
  margin: 0px;

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
  padding: 10px 20px;
  font-family: "Lexend Giga", sans-serif;
  font-weight: 400;
  font-size: 21px;
  font-style: normal;
  color: black;
  width: 200px;
  height: 58px;
  background-color: #fde400;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    box-shadow: 10px 10px 20px rgba(253, 228, 0, 0.4);
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
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-top: 20px;
  position: fixed;
  bottom: 50px;
  left: 50px;

  @media (max-width: 768px) {
    bottom: 30px;
    left: 30px;
  }

  @media (max-width: 480px) {
    width: 80px;
    bottom: 20px;
    left: 20px;
  }
`;

export const FooterMusicIcon = styled.div`
  position: fixed;
  bottom: 50px;
  right: 40px;

  @media (max-width: 768px) {
    bottom: 30px;
    right: 30px;
  }

  @media (max-width: 480px) {
    bottom: 20px;
    right: 20px;
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

export { GitHub, LinkedIn, Email, MusicNote, MusicOff, Language };
