import React, { useState } from "react";
import {
  Container,
  ContentButton,
  SocialIcons,
  TextSection,
} from "../styles/StyledComponentContact";
import { Button } from "@mui/material";
import { Email } from "@mui/icons-material";
import { GitHub, LinkedIn } from "../styles/StyledComponentHome";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [hoverState, setHoverState] = useState({
    github: false,
    linkedin: false,
    email: false,
    behance: false,
    instagram: false,
  });

  return (
    <Container>
      <TextSection>
        <p>
          LET'S <span>MAKE</span> YOUR PROJECT <span>FLY TOGETHER.</span>
        </p>
        <ContentButton>
          <Button
            variant="contained"
            endIcon={<Email />}
            sx={{
              backgroundColor: "#fde400",
              color: "black",
              fontFamily: "Lexend Giga, sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              borderRadius: "30px",
              letterSpacing: "1px",
              boxShadow: "2px 2px 30px 2px rgba(253, 228, 0, 0.2)",
              width: "350px",
              height: "58px",
            }}
            onClick={() => {
              window.location.href =
                "mailto:ojedacandelaco@gmail.com?subject=Contacto%20desde%20tu%20portfolio&body=Hola%20Candela,%20te%20contacto%20porque%20...";
            }}
          >
            SEND ME AN EMAIL
          </Button>
        </ContentButton>
        <SocialIcons>
          <GitHub
            style={{
              color: hoverState.github ? "#FDE400" : "white",
              width: "32px",
              height: "32px",
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
              width: "34px",
              height: "34px",
              cursor: "pointer",
            }}
            onMouseEnter={() =>
              setHoverState((prev) => ({ ...prev, linkedin: true }))
            }
            onMouseLeave={() =>
              setHoverState((prev) => ({ ...prev, linkedin: false }))
            }
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/candela-ojeda/",
                "_blank"
              )
            }
          />
          <Email
            style={{
              color: hoverState.email ? "#FDE400" : "white",
              width: "35px",
              height: "35px",
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
              width: "35px",
              height: "35px",
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
              width: "30px",
              height: "30px",
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
      </TextSection>
    </Container>
  );
};

export default Contact;
