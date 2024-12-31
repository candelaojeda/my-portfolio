import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { motion } from "framer-motion";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import styled from "styled-components";
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

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0 1rem;
    gap: 20px;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#fde400")};
  color: ${({ disabled }) => (disabled ? "#777" : "#000")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#ffd700")};
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const [currentSection, setCurrentSection] = useState(0);

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

  const goToNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const goToPrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

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
        <Arrow onClick={goToPrevious} disabled={currentSection === 0}>
          &#9664;
        </Arrow>
        {sections.map((_, index) => (
          <Dot
            key={index}
            onClick={() => setCurrentSection(index)}
            isActive={currentSection === index}
          />
        ))}
        <Arrow
          onClick={goToNext}
          disabled={currentSection === sections.length - 1}
        >
          &#9654;
        </Arrow>
      </CarouselDots>
    </>
  );
}

export default App;
