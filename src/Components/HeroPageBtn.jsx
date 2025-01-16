import PropTypes from "prop-types";
export function HeroPageButton({
  active = false,
  id,
  onClick: handlePageBtnClick,
}) {
  if (active) {
    return (
      <button
        className="w-4 h-4 border rounded-full bg-primary-500 opacity-20 border-primary-500"
        data-id={id}
        onClick={handlePageBtnClick}
      ></button>
    );
  } else {
    return (
      <button
        className="w-4 h-4 border rounded-full opacity-20 border-primary-500"
        data-id={id}
        onClick={handlePageBtnClick}
      ></button>
    );
  }
}

HeroPageButton.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.number,
  onClick: PropTypes.func,
};
