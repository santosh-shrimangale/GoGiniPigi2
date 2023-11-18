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

function VerticalViewComponent({
  categoryImage,
  time,
  detail,
  description,
  portfolio,
  nearly,
  places,
  status,
  discountPrice,
  price,
  name,
  address,
  address2,
  rating,
  count,
  beauty,
  instant,
  date,
  oclock,
  code,
  extraClassName,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const { t } = useTranslation();

  const handleLike = (e) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <div className={`beautyBox_items d-lg-flex ${extraClassName}`}>
      <div className="beautyBox_img">
        <ImageElement source={categoryImage} />
      </div>
      <div className="beautyBox_detail d-flex">
        <div className="left">
          <div className="label">
            <span>{checkValidData(beauty)}</span>{" "}
            {instant && (
              <span className="instant">
                <em className="icon-instant" />
                {checkValidData(instant)}
              </span>
            )}
            {time}
          </div>
          <h3 className="font-md">
            <Link to="#">{checkValidData(detail)}</Link>
          </h3>
          <p>{description}</p>
          {date && (
            <ul className="beautyBox_detail_list list-unstyled d-flex flex-wrap mt-0">
              <li>
                <em className="icon-timer" />
                {checkValidData(date)}
              </li>
              <li>
                <em className="icon-sunrise" />
                {checkValidData(oclock)}
              </li>
              <li>
                <em className="icon-user-check" />
                {checkValidData(code)}
              </li>
            </ul>
          )}

          <ul className="list-unstyled d-flex flex-wrap">
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
            {status && (
              <li>
                <em className="icon-online" />
                {checkValidData(status)}
              </li>
            )}
          </ul>
          {price && (
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
          )}
        </div>
        {name && (
          <div className="userCard position-relative d-flex flex-column justify-content-center">
            <div className="userCard_profile">
              <ImageElement source="/category/user.png" />
            </div>
            <div className="userCard_info">
              <h4 className="font-sm">{checkValidData(name)}</h4>
              <p>
                {checkValidData(address)} <br className="d-none d-md-block" />
                {checkValidData(address2)}
              </p>
              {rating && (
                <div className="ratings d-flex align-items-center justify-content-center">
                  <StarRate rate={rating} />

                  <span className="ratings_count">
                    ({checkValidCount(count)})
                  </span>
                </div>
              )}
              <h5 className="font-sm">Other Appointments (1)</h5>
              <Link to="#" className="rpt-txt">
                Report
              </Link>
            </div>
            <Link
              to="#"
              onClick={handleLike}
              className={`liked position-absolute${isLiked ? " yup" : ""}`}
            >
              <em className="icon-unlike" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerticalViewComponent;
