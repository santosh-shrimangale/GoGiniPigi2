import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CommonButton } from "../Button";
import { checkValidData, checkValidPrice } from "../Formatter";
import ImageElement from "../ImageElement";

function BeautyComponent({
  heading,
  description,
  name,
  address,
  portfolio,
  places,
  nearly,
  rating,
  discountPrice,
  price,
}) {
  const { t } = useTranslation();
  return (
    <div className="beautyCard_box position-relative overflow-hidden">
      <span className="beautyCard_box_tag position-absolute">{heading}</span>
      <ImageElement
        source="/treat-yourself-img-01.jpg"
        className="beautyCard_image"
        alt=""
      />
      <div className="beautyCard_box_text position-absolute">
        <Link to="#" className="mb-0 beautyCard_box_title">
          {checkValidData(description)}
        </Link>
        <div className="beautyCard_box_userimage d-flex">
          <ImageElement source="/user-image.png" alt="user-image" />
          <div className="beautyCard_box_element ms-2">
            <h4 className="mb-0 text-truncate">{checkValidData(name)}</h4>
            <p className="mb-0 text-truncate">{checkValidData(address)}</p>
          </div>
        </div>
        <div className="beautyCard_box_iconbox d-flex align-items-center">
          <p>
            <em className="icon-portfolio" />
            {checkValidData(portfolio)}
          </p>
          <p>
            <em className="icon-nearly" />
            {checkValidData(nearly)}
          </p>
          <p>
            <em className="icon-places" />
            {checkValidData(places)}
          </p>
          <p>
            <em className="icon-star" />
            {rating}
          </p>
        </div>
        <div className="beautyCard_box_avail d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h3 className="mb-0">{checkValidPrice(discountPrice)}</h3>
            <span>{checkValidPrice(price)}</span>
          </div>

          <CommonButton className="btn btn-primary ripple-effect">
            {t("text.common.availability")}
          </CommonButton>
        </div>
      </div>
    </div>
  );
}

export default BeautyComponent;
