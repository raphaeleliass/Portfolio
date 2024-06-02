// Technology.jsx

import PropTypes from "prop-types";

function Technology({ tech }) {
  return (
    <section>
      <div className="cursor-default rounded-full border border-neutral-500 px-2 py-px text-[12px] font-light text-neutral-600 transition-all ">
        {tech}
      </div>
    </section>
  );
}

Technology.propTypes = {
  tech: PropTypes.string.isRequired,
};

export default Technology;
