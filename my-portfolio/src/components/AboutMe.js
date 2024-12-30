import React from "react";
import {
  Container,
  Main,
  InitialText,
  ContentTechnologies,
  Technology,
  TextRight,
  FooterContainer,
} from "../styles/StyledComponentAboutMe";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const AboutMe = () => {
  return (
    <Container>
      <Main>
        Freelancer specialized in the development of creative experiences.
      </Main>
      <InitialText>
        I am a passionate creative developer living in Italy (for now). My
        preferred field is focusing on the <span>front-end</span> part of the
        web. I am specialized in REACT, a powerful library which allows me to
        create efficient, unique and fluid user experiences thanks to
        captivating and inmersive animations.
      </InitialText>
      <ContentTechnologies>
        <Technology>React</Technology>
        <Technology>HTML</Technology>
        <Technology>CSS</Technology>
        <Technology>Javascript</Technology>
        <Technology>Figma</Technology>
        <Technology>Nextjs</Technology>
        <Technology>Tailwind</Technology>
      </ContentTechnologies>
      <FooterContainer>
        <Button
          variant="contained"
          endIcon={<DownloadIcon />}
          sx={{
            backgroundColor: "#fde400",
            color: "black",
            fontFamily: "Lexend Giga, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "12px", sm: "16px" },
            borderRadius: "30px",
            letterSpacing: "1px",
            boxShadow: "2px 2px 30px 2px rgba(253, 228, 0, 0.2)",
            width: { xs: "200px", sm: "250px" },
            height: { xs: "40px", sm: "50px" },
          }}
          href="/OjedaCandelaCV.pdf"
          download="OjedaCandela_CV.pdf"
        >
          DOWNLOAD CV
        </Button>
        <TextRight>I also love the moon, nature, traveling and art.</TextRight>
      </FooterContainer>
    </Container>
  );
};

export default AboutMe;
