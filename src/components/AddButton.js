import PropTypes from "prop-types";

const AddButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="edit-profile  btn-tertiary">
      New
    </button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddButton;
