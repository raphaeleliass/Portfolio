// ProjectCards.jsx

import PropTypes from "prop-types";
import Technology from "./Technology";
import { useState } from "react";
import BtnSecondary from "../Buttons/BtnSecondary";

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
    <div className="flex w-80 flex-col gap-4 text-center md:w-[370px] lg:w-[280px]">
      <div
        className="flex content-center items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className=" rounded-xl" src={imgCard} alt="" />
        <div className={`overflow-card ${isHovered ? "active" : ""}`}>
          <div className="flex items-center gap-4">
            <BtnSecondary text="website" href={hrefWebsite} />
            <BtnSecondary text="repositório" href={hrefRepository} />
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
