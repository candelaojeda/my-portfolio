import React from "react";
import { Logo, Nav, NavItem, Language } from "../styles/StyledComponentHome";

const Navbar = ({ sections, currentSection, setCurrentSection }) => {
  return (
    <Nav>
      <Logo src="/logos/logo svg.svg" alt="Logo" style={{ height: "40px" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        {sections.map((section, index) => (
          <NavItem
            key={index}
            onClick={() => setCurrentSection(index)}
            isActive={currentSection === index}
          >
            {section.name}
          </NavItem>
        ))}
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
  );
};

export default Navbar;
