import PropTypes from "prop-types";

function NutritionDetailItem({ thumbnail, title, information }) {
  return (
    <div className="container-information">
      <div className="information-left">
        <img src={thumbnail} alt="" />
      </div>
      <div className="information-right">
        <div className="information-detail">{title}</div>
        <div className="information-desc">{information}</div>
      </div>
    </div>
  );
}
NutritionDetailItem.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};
export default NutritionDetailItem;
