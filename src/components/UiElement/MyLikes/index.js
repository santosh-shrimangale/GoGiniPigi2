import React from "react";
import { Link } from "react-router-dom";
import ImageElement from "../ImageElement";
import { checkValidData } from "../Formatter";

function MyLikesBlock({
  description,
  time,
  portfolio,
  nearly,
  beauty,
  source,
  detail,
  likes,
}) {
  return (
    <>
      <div className="beautyBox-profile myLikes">
        <div className="myLikes_items d-lg-flex">
          <div className="beautyBox_img">
            <ImageElement className="img-fluid" source={source} alt="product" />
          </div>
          <div className="beautyBox_detail d-flex">
            <div className="left border-0 pe-0">
              <div className="d-flex justify-content-between">
                <div className="label">
                  <span>{checkValidData(beauty)}</span> {checkValidData(time)}
                </div>
                <div className="liked position-absolute d-flex align-items-center">
                  <em className="icon-likes" />
                  <span>{checkValidData(likes)}</span>
                </div>
              </div>
              <h3 className="font-sm">
                <Link to="#">{checkValidData(detail)}</Link>
              </h3>
              <p>{checkValidData(description)}</p>
              <ul className="perks list-unstyled d-flex flex-wrap">
                <li>
                  <span>
                    <em className="icon-places" />4
                  </span>{" "}
                  Places left
                </li>
                <li>
                  <span>
                    <em className="icon-nearly" />
                  </span>
                  {checkValidData(nearly)}
                </li>
                <li>
                  <span>
                    <em className="icon-portfolio" />
                  </span>
                  {checkValidData(portfolio)}
                </li>
                <li>
                  <span>
                    <em className="icon-online" />
                  </span>
                  Online
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyLikesBlock;
