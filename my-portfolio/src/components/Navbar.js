import React, { useState } from "react";
import {
  Logo,
  Nav,
  NavItem,
  FooterMusicIcon,
  MusicNote,
  MusicOff,
  NavMenu,
  HamburgerMenu,
  MobileMenu,
} from "../styles/StyledComponentHome";
import ReactHowler from "react-howler";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ sections, currentSection, setCurrentSection }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMusic = () => setIsPlaying(!isPlaying);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const [hoverState, setHoverState] = useState({
    music: false,
  });

  return (
    <>
      <Nav>
        <Logo src="/logos/logo svg.svg" alt="Logo" style={{ height: "40px" }} />

        <NavMenu>
          {sections.map((section, index) => (
            <NavItem
              key={index}
              onClick={() => setCurrentSection(index)}
              isActive={currentSection === index}
            >
              {section.name}
            </NavItem>
          ))}
        </NavMenu>

        <HamburgerMenu onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <CloseIcon style={{ color: "white" }} />
          ) : (
            <MenuIcon style={{ color: "white" }} />
          )}
        </HamburgerMenu>

        <MobileMenu isOpen={isMobileMenuOpen}>
          {sections.map((section, index) => (
            <a
              key={index}
              onClick={() => {
                setCurrentSection(index);
                toggleMobileMenu();
              }}
            >
              {section.name}
            </a>
          ))}
        </MobileMenu>
      </Nav>
      <FooterMusicIcon>
        {isPlaying ? (
          <MusicNote
            style={{
              color: hoverState.music ? "#FDE400" : "white",
              width: "26px",
              height: "26px",
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
        volume={0.5}
      />
    </>
  );
};

export default Navbar;
