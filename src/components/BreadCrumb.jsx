import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import slugsToTitle from "../utils/slugsToTitle";

function BreadCrumb() {
  const location = useLocation().pathname.split("/");
  let breadPath = "";

  return (
    <div className="breadcrumb">
      <Link className="breadcrumb__link" to="/">
        Beranda
      </Link>
      {location.map((path, index) => {
        1;
        if (path.trim().length !== 0) {
          breadPath += `${path}/`;
          return (
            <div key={index}>
              <IoIosArrowForward />
              <Link className="breadcrumb__link" to={`/${breadPath.trim()}`}>
                {slugsToTitle(path)}
              </Link>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default BreadCrumb;
