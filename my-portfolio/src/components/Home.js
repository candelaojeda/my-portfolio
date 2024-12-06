import React from "react";
import {
  Container,
  Greeting,
  Name,
  ExploreButton,
} from "../styles/StyledComponentHome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = ({ setCurrentSection, onNameHover, onNameLeave }) => {
  const goToAboutMe = () => {
    setCurrentSection(1);
  };

  return (
    <Container>
      <div>
        <Greeting>Hello! My name is</Greeting>
        <Name onMouseEnter={onNameHover} onMouseLeave={onNameLeave}>
          CANDELA OJEDA
        </Name>
      </div>
      <ExploreButton onClick={goToAboutMe}>
        EXPLORE
        <ArrowForwardIcon style={{ marginLeft: "8px" }} />
      </ExploreButton>
    </Container>
  );
};

export default Home;
