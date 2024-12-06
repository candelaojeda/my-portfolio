import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { motion } from "framer-motion";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import ReactHowler from "react-howler";
import {
  SocialIcons,
  FooterMusicIcon,
  GitHub,
  LinkedIn,
  Email,
  MusicNote,
  MusicOff,
} from "./styles/StyledComponentHome";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 8px;
  background-color: ${({ isActive }) => (isActive ? "#FDE400" : "white")};
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    top: -7px;
    left: -7px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: ${({ isActive }) => (isActive ? "2px solid #FDE400" : "none")};
    transition: border 0.3s ease, transform 0.3s ease;
    transform: ${({ isActive }) => (isActive ? "scale(1.2)" : "scale(1)")};
  }
`;

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoverState, setHoverState] = useState({
    github: false,
    linkedin: false,
    email: false,
    behance: false,
    instagram: false,
    music: false,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#fde400",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 100,
      y: mousePosition.y - 100,
      backgroundColor: "#fde400",
      mixBlendMode: "difference",
      color: "black",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const toggleMusic = () => setIsPlaying(!isPlaying);

  const sections = [
    {
      name: "HOME",
      component: (
        <Home
          setCurrentSection={setCurrentSection}
          onNameHover={textEnter}
          onNameLeave={textLeave}
        />
      ),
    },
    { name: "ABOUT ME", component: <AboutMe /> },
    { name: "PORTFOLIO", component: <Portfolio /> },
    { name: "CONTACT", component: <Contact /> },
  ];

  const rotationAngles = [0, -90, -180, -270];
  const rotationAngle = rotationAngles[currentSection];

  return (
    <>
      <GlobalStyles />
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div
        className="background"
        style={{
          transform: `rotate(${rotationAngle}deg)`,
          transition: "transform 0.9s ease-in-out",
        }}
      ></div>
      <Navbar
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <div className="section-content">
        {sections[currentSection].component}
      </div>

      <CarouselDots>
        {sections.map((_, index) => (
          <Dot
            key={index}
            onClick={() => setCurrentSection(index)}
            isActive={currentSection === index}
          />
        ))}
      </CarouselDots>

      <SocialIcons>
        <GitHub
          style={{
            color: hoverState.github ? "#FDE400" : "white",
            width: "23px",
            height: "23px",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            setHoverState((prev) => ({ ...prev, github: true }))
          }
          onMouseLeave={() =>
            setHoverState((prev) => ({ ...prev, github: false }))
          }
          onClick={() =>
            window.open("https://github.com/candelaojeda", "_blank")
          }
        />
        <LinkedIn
          style={{
            color: hoverState.linkedin ? "#FDE400" : "white",
            width: "25px",
            height: "25px",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            setHoverState((prev) => ({ ...prev, linkedin: true }))
          }
          onMouseLeave={() =>
            setHoverState((prev) => ({ ...prev, linkedin: false }))
          }
          onClick={() =>
            window.open("https://www.linkedin.com/in/candela-ojeda/", "_blank")
          }
        />
        <Email
          style={{
            color: hoverState.email ? "#FDE400" : "white",
            width: "26px",
            height: "26px",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            setHoverState((prev) => ({ ...prev, email: true }))
          }
          onMouseLeave={() =>
            setHoverState((prev) => ({ ...prev, email: false }))
          }
          onClick={() => {
            window.location.href =
              "mailto:ojedacandelaco@gmail.com?subject=Contacto%20desde%20tu%20portfolio&body=Hola%20Candela,%20te%20contacto%20porque%20...";
          }}
        />
        <FaBehance
          style={{
            color: hoverState.behance ? "#FDE400" : "white",
            width: "26px",
            height: "26px",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            setHoverState((prev) => ({ ...prev, behance: true }))
          }
          onMouseLeave={() =>
            setHoverState((prev) => ({ ...prev, behance: false }))
          }
          onClick={() => {
            window.open("https://www.behance.net/candelaojeda4", "_blank");
          }}
        />
        <FaInstagram
          style={{
            color: hoverState.instagram ? "#FDE400" : "white",
            width: "21px",
            height: "21px",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            setHoverState((prev) => ({ ...prev, instagram: true }))
          }
          onMouseLeave={() =>
            setHoverState((prev) => ({ ...prev, instagram: false }))
          }
          onClick={() => {
            window.open("https://www.instagram.com/candesign.art/", "_blank");
          }}
        />
      </SocialIcons>

      <FooterMusicIcon>
        {isPlaying ? (
          <MusicNote
            style={{
              color: "#FDE400",
              width: "25px",
              height: "25px",
              cursor: "pointer",
            }}
            onMouseEnter={() =>
              setHoverState((prev) => ({ ...prev, music: true }))
            }
            onMouseLeave={() =>
              setHoverState((prev) => ({ ...prev, music: false }))
            }
            onClick={toggleMusic}
          />
        ) : (
          <MusicOff
            style={{
              color: "white",
              width: "25px",
              height: "25px",
              cursor: "pointer",
            }}
            onMouseEnter={() =>
              setHoverState((prev) => ({ ...prev, music: true }))
            }
            onMouseLeave={() =>
              setHoverState((prev) => ({ ...prev, music: false }))
            }
            onClick={toggleMusic}
          />
        )}
      </FooterMusicIcon>

      <ReactHowler
        src="/audio/Marconi Union - Weightless (Official Video).mp3"
        playing={isPlaying}
        loop={true}
      />
    </>
  );
}

export default App;
