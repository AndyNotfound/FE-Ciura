import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

function BreadCrumb({ list }) {

  return (
    <div className="breadcrumb">
      {list?.map((item, index) => {
        return (
          <div key={index}>
            <Link className="breadcrumb__link" to={item.path}>
              {item.name}
            </Link>
            {index !== list?.length - 1 ? <IoIosArrowForward /> : ""}
          </div>
        );
      })}
    </div>
  );
}

BreadCrumb.propTypes = {
  list: PropTypes.array.isRequired
}

export default BreadCrumb;
