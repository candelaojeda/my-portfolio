import styled from "styled-components";
import {
  GitHub,
  LinkedIn,
  Email,
  MusicNote,
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
`;

export const Logo = styled.img`
  width: 40px;
  margin: 0px 50px;
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
`;

export const Greeting = styled.h1`
  text-align: left;
  font-weight: 200;
  font-size: 40px;
  font-style: normal;
  padding: 0px;
  margin: 0px;
`;

export const Name = styled.h2`
  font-size: 6rem;
  font-weight: 600;
  text-align: center;
  padding: 0px;
  margin: 0px;
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
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-top: 20px;
  position: fixed;
  bottom: 50px;
  left: 50px;
`;

export const FooterMusicIcon = styled.div`
  position: fixed;
  bottom: 50px;
  right: 40px;
`;

export const Icon = styled.img`
  width: 30px;

  &:hover {
    box-shadow: 10px 10px 20px rgba(253, 228, 0, 0.4);
  }
`;

export { GitHub, LinkedIn, Email, MusicNote, Language };
