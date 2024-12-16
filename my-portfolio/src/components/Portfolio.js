import React, { useState } from "react";
import {
  Container,
  Nav,
  ContentGrid,
  TagButton,
} from "../styles/StyledComponentPortfolio";
import { projects } from "../data/portfolioItems";
import { logos } from "../data/portfolioItems";
import { socialMedia } from "../data/portfolioItems";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("/ PROJECTS");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <Container>
      <Nav>
        {["/ PROJECTS", "/ LOGOS", "/ SOCIAL MEDIA"].map((category) => (
          <TagButton
            key={category}
            active={activeCategory === category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </TagButton>
        ))}
      </Nav>
      <ContentGrid isTransitioning={isTransitioning}>
        {activeCategory === "/ PROJECTS" && (
          <section>
            <div className="portfolio-grid-projects">
              {projects.map((item, index) => (
                <div key={index} className="portfolio-item">
                  <h5>{item.title}</h5>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="a-project"
                    >
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeCategory === "/ LOGOS" && (
          <section>
            <div className="portfolio-grid-logos">
              {logos.map((item, index) => (
                <div key={index} className="portfolio-item-logos">
                  <img src={item.image} alt={item.title} />
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeCategory === "/ SOCIAL MEDIA" && (
          <section>
            <div className="portfolio-grid-projects">
              {socialMedia.map((item, index) => (
                <div key={index} className="portfolio-item">
                  <h5>{item.title}</h5>
                  {!item.link && item.image && (
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="a-project"
                    >
                      View Image Design
                    </a>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="a-project"
                    >
                      View Design
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </ContentGrid>
    </Container>
  );
};

export default Portfolio;
