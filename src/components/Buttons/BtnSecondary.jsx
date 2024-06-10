import PropTypes from "prop-types";

function BtnSecondary({ href, text, children }) {
  return (
    <button className="flex flex-row items-center">
      <a
        href={href}
        target="_blank"
        className="p-1 text-black underline underline-offset-4 transition-all hover:text-green-500 dark:text-white"
      >
        {text}
      </a>
      {children}
    </button>
  );
}

BtnSecondary.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default BtnSecondary;
