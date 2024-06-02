import PropTypes from "prop-types";

function BtnSecondary({ href, text, children }) {
  return (
    <button className="flex flex-row items-center transition-all hover:text-green-600">
      <a
        href={href}
        target="_blank"
        className="p-1 underline underline-offset-4"
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
