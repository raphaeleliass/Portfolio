import PropTypes from "prop-types";

function SkillCard({ title, text }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-center text-4xl font-black drop-shadow-md md:text-left">
        {title}
      </h2>
      <p className="text-center text-sm text-neutral-500 md:text-left">
        {text}
      </p>
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillCard;
