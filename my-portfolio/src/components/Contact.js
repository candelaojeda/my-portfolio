import React from "react";
import { Container, ContentButton } from "../styles/StyledComponentContact";
import { Button } from "@mui/material";
import { Email } from "@mui/icons-material";

const Contact = () => {
  return (
    <Container>
      <p>
        LET'S <span>MAKE</span> YOUR PROJECT <span>FLY TOGETHER</span>
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
    </Container>
  );
};

export default Contact;
