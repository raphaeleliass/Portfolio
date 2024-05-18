import PropTypes from "prop-types";

function SkillsComponents({ title, text }) {
  return (
    <div className="flex flex-col gap-4 text-center md:text-start">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-sm text-neutral-400 dark:text-customGrey">{text}</p>
    </div>
  );
}
SkillsComponents.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillsComponents;
