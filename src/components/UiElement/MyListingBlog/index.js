import React from "react";
import { Link } from "react-router-dom";
import { checkValidData, checkValidPrice } from "../Formatter";
import ImageElement from "../ImageElement";

function MyListingBlock({
  description,
  time,
  portfolio,
  nearly,
  discountPrice,
  price,
  beauty,
  instant,
  detail,
  source,
  onHandleOpen,
}) {
  return (
    <div className="beautyBox_items beautyBox_items_border d-lg-flex">
      <div className="beautyBox_img">
        <ImageElement className="img-fluid" source={source} alt="product" />
      </div>
      <div className="beautyBox_detail d-flex">
        <div className="left border-0 pe-0">
          <div className="d-flex justify-content-between">
            <div className="label">
              <span>{checkValidData(beauty)}</span>
              {}
              {instant && (
                <span className="instant">
                  <em className="icon-instant" />
                  {checkValidData(instant)}
                </span>
              )}
              {checkValidData(time)}
            </div>
            <div className="profileCard_review_icon">
              <Link to="#">
                <ImageElement source="/edit-review.svg" className="svg" />
              </Link>
              <Link
                to="#"
                onClickCapture={(e) => {
                  e.preventDefault();
                  onHandleOpen();
                }}
              >
                <ImageElement source="/delete-review.svg" className="svg" />
              </Link>
            </div>
          </div>
          <h3 className="font-md">
            <Link to="#">{checkValidData(detail)}</Link>
          </h3>
          <p>{checkValidData(description)}</p>
          <ul className="perks list-unstyled d-flex flex-wrap">
            <li>
              <em className="icon-portfolio" />
              {checkValidData(portfolio)}
            </li>
            <li>
              <em className="icon-nearly" />
              {checkValidData(nearly)}
            </li>
            <li>
              <em className="icon-places" />4 Places left
            </li>
            <li>
              <em className="icon-online" />
              Online
            </li>
          </ul>
          <div className="availability d-flex justify-content-between align-items-center">
            <h4 className="font-md mb-0 d-flex align-items-center">
              {checkValidPrice(discountPrice)}{" "}
              <sub>{checkValidPrice(price)} </sub>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyListingBlock;
