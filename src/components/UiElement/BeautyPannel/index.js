import React from "react";
import { Link } from "react-router-dom";
import { checkValidData, checkValidPrice } from "../Formatter";
import ImageElement from "../ImageElement";

function BeautyPannel({
  time,
  beauty,
  description,
  price,
  discountPrice,
  name,
  address,
  portfolio,
  places,
  nearly,
  rating,
  reviewsCount,
  count,
  addressHeading,
  code,
  userImage,
  backgroundImage,
}) {
  return (
    <div className="card border-0">
      <div className="card_img">
        <ImageElement
          source={backgroundImage}
          className="img-fluid"
          alt="product"
        />
        <div className="label position-absolute d-flex justify-content-between align-items-center">
          <p className="mb-0">
            <span>{beauty}</span> {time}
          </p>
        </div>
      </div>
      <div className="card_txt">
        <h3 className="font-md">{description}</h3>
        <span className="location">
          {" "}
          <em className="icon-user-check" />
          {code}
        </span>

        <div className="availability d-flex justify-content-between align-items-center">
          <h4 className="font-sm mb-0 d-flex align-items-center">
            {" "}
            {checkValidPrice(price)}
            <sub>{checkValidPrice(discountPrice)} </sub>
          </h4>
        </div>
        <ul className="listing list-unstyled d-flex flex-wrap">
          <li>
            <label className="d-flex align-items-center">
              {" "}
              <em className="icon-places" />4
            </label>
            <p>{checkValidData(places)}</p>
          </li>
          <li>
            <label className="d-flex align-items-center">
              {" "}
              <em className="icon-nearly" />
            </label>
            <p>{checkValidData(nearly)}</p>
          </li>
          <li>
            <label className="d-flex align-items-center">
              {" "}
              <em className="icon-portfolio" />
            </label>
            <p>{checkValidData(portfolio)}</p>
          </li>
          <li>
            <label className="d-flex align-items-center">
              {" "}
              <em className="icon-Icon-feather-star" />
              {rating}{" "}
            </label>
            <p>({reviewsCount} Reviews)</p>
          </li>
        </ul>
      </div>
      <div className="card_user d-flex">
        <div className="card_user_profile">
          <ImageElement className="img-fluid" source={userImage} alt="user" />
        </div>
        <div className="card_user_info">
          <h4 className="font-sm">
            <Link to="#">{checkValidData(name)} </Link>
          </h4>
          <p className="mb-1">{checkValidData(addressHeading)}</p>
          <p className="mb-2">{checkValidData(address)}</p>
          <h5 className="font-md">Other Appointments ({count})</h5>
        </div>
      </div>
    </div>
  );
}

export default BeautyPannel;
