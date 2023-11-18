import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import routesMap from "../../../../routeControl/userRouteMap";
import {
  checkValidCount,
  checkValidData,
  checkValidPrice,
} from "../../Formatter";
import ImageElement from "../../ImageElement";
import StarRate from "../../StarRate";

function GridViewComponent({
  categoryImage,
  heading,
  time,
  detail,
  description,
  portfolio,
  nearly,
  discountPrice,
  price,
  places,
  count,
  name,
  address,
  userImage,
  rating,
}) {
  const { t } = useTranslation();
  const [isLiked, setIsLiked] = useState(false);
  return (
    // <div className="gridBox">
    //   <div className="row g-3">
    <div className="col-sm-6 col-lg-4">
      <div className="card border-0">
        <div className="card_img">
          <ImageElement
            className="img-fluid"
            source={categoryImage}
            alt="product"
          />
        </div>
        <div className="card_label d-flex justify-content-between align-items-center">
          <p className="mb-0">
            <span>{checkValidData(heading.beauty)}</span>{" "}
            <span className="instant">
              <em className="icon-instant" />
              {checkValidData(heading.instant)}{" "}
            </span>{" "}
            {checkValidData(time)}
          </p>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={isLiked ? "liked yup" : "liked"}
          >
            <em className="icon-unlike" />
          </Link>
        </div>
        <div className="card_txt">
          <h3 className="font-md">
            <Link to="#">{checkValidData(detail)}</Link>
          </h3>
          <p>{checkValidData(description)}</p>
          <ul className="listing list-unstyled mb-0 d-flex flex-wrap">
            <li>
              <em className="icon-portfolio" />
              {checkValidData(portfolio)}
            </li>
            <li>
              <em className="icon-nearly" />
              {checkValidData(nearly)}
            </li>
            <li>
              <em className="icon-places" />
              {checkValidData(places)}
            </li>
          </ul>
          <div className="availability d-flex justify-content-between align-items-center">
            <h4 className="font-md mb-0 d-flex align-items-center">
              {checkValidPrice(discountPrice)}
              <sub>{checkValidPrice(price)} </sub>
            </h4>
            <Link
              to={routesMap.TREATMENT_AVAILABILITY.path}
              className="btn btn-primary btn-shadow ripple-effect-dark"
            >
              {t("text.common.availability")}
            </Link>
          </div>
        </div>
        <div className="card_user d-flex">
          <div className="card_user_profile">
            <ImageElement
              className="img-fluid"
              source={userImage}
              alt="product"
            />
          </div>
          <div className="card_user_info">
            <h4 className="font-sm">{checkValidData(name)}</h4>
            <p>{checkValidData(address)}</p>
            <div className="ratings d-flex align-items-center">
              <StarRate rate={rating} />
              <span className="ratings_count">({checkValidCount(count)})</span>
            </div>
            <h5 className="font-sm">Other Appointments (1)</h5>
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default GridViewComponent;
