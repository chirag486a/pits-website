import PropTypes from "prop-types";
export function HeroPageButton({ active = false, id, setCurrentPage }) {
  function handlePageBtnClick(e) {
    console.log("hello");
    if (!e.target.closest("button")) return;
    setCurrentPage(Number(e.target.closest("button").dataset.id));
  }
  if (active) {
    return (
      <button
        className="w-4 h-4 border rounded-full bg-primary-500 opacity-20 border-primary-500"
        data-id={id}
        onClick={(e) => handlePageBtnClick(e)}
      ></button>
    );
  } else {
    return (
      <button
        className="w-4 h-4 border rounded-full opacity-20 border-primary-500"
        data-id={id}
        onClick={(e) => handlePageBtnClick(e)}
      ></button>
    );
  }
}

HeroPageButton.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
