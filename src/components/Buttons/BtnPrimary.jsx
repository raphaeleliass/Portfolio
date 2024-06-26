import PropTypes from "prop-types";

function BtnPrimary({ href, text, children }) {
  return (
    <button className="rounded-full bg-green-500 px-6 py-2 transition-all hover:bg-green-400 hover:shadow-xl">
      <a
        href={href}
        className="flex flex-row items-center gap-2 font-semibold text-white"
      >
        <p>{text}</p>
        {children}
      </a>
    </button>
  );
}

BtnPrimary.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default BtnPrimary;
