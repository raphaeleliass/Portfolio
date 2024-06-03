import PropTypes from "prop-types";

function ListItems({ href, text }) {
  return (
    <a href={href} className="transition-all hover:text-green-500">
      {text}
    </a>
  );
}

ListItems.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListItems;
