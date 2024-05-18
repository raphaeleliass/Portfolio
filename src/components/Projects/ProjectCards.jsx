// ProjectCards.jsx

import PropTypes from "prop-types";
import Buttons from "../Buttons/Buttons";
import Technology from "./Technology";
import { useState } from "react";

function ProjectCards({
  imgCard,
  titleCard,
  hrefWebsite,
  hrefRepository,
  technologies,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col gap-4 text-center">
      <div
        className="flex items-center justify-center content-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className=" rounded-md" src={imgCard} alt="" />
        <div className={`overflow-card ${isHovered ? "active" : ""}`}>
          <div className="flex items-center gap-4">
            <Buttons title="Website" href={hrefWebsite} target="_blank" />
            <Buttons
              title="Repositório"
              href={hrefRepository}
              target="_blank"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold ">{titleCard}</h2>
        <div className="flex items-center gap-2">
          {technologies.map((tech, index) => (
            <Technology key={index} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

ProjectCards.propTypes = {
  imgCard: PropTypes.string.isRequired,
  titleCard: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  hrefWebsite: PropTypes.string.isRequired,
  hrefRepository: PropTypes.string.isRequired,
};

export default ProjectCards;
