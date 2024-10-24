import React, { useState } from "react";
import ReactHowler from "react-howler";
import {
  Container,
  Nav,
  Logo,
  NavItem,
  Greeting,
  Name,
  ExploreButton,
  SocialIcons,
  FooterMusicIcon,
  GitHub,
  LinkedIn,
  Email,
  MusicNote,
  MusicOff,
  Language,
} from "./StyledComponentHome";

const Home = () => {
  const [hoverState, setHoverState] = useState({
    instagram: false,
    facebook: false,
    github: false,
    linkedin: false,
    email: false,
    music: false,
  });

  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container>
      <Nav>
        <Logo src="/logos/Group 10.svg" alt="Logo" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavItem href="#home">HOME</NavItem>
          <NavItem href="#about">ABOUT ME</NavItem>
          <NavItem href="#portfolio">PORTFOLIO</NavItem>
          <NavItem href="#contact">CONTACT</NavItem>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
              marginRight: "50px",
              cursor: "pointer",
            }}
          >
            <Language
              style={{ color: "#fde400", width: "25px", height: "25px" }}
            />
          </div>
        </div>
      </Nav>
      <div>
        <Greeting>Hello! My name is</Greeting>
        <Name>CANDELA OJEDA</Name>
      </div>
      <ExploreButton>EXPLORE</ExploreButton>
      <SocialIcons>
        <GitHub
          style={{
            color: hoverState.github ? "#FDE400" : "white",
            width: "25px",
            height: "25px",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            setHoverState((prev) => ({ ...prev, github: true }))
          }
          onMouseLeave={() =>
            setHoverState((prev) => ({ ...prev, github: false }))
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
        />
        <Email
          style={{
            color: hoverState.email ? "#FDE400" : "white",
            width: "25px",
            height: "25px",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            setHoverState((prev) => ({ ...prev, email: true }))
          }
          onMouseLeave={() =>
            setHoverState((prev) => ({ ...prev, email: false }))
          }
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
    </Container>
  );
};

export default Home;
