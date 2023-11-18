import React from "react";
import { Link } from "react-router-dom";
import ImageElement from "../ImageElement";

function BlockComponent({ source, description, date, url = "#", btnText }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="browzingSec_box">
        <div className="browzingSec_box_img">
          <Link to={url}>
            <ImageElement
              className="img-fluid"
              source={source}
              alt="browzing"
            />
          </Link>
        </div>
        <div className="browzingSec_box_content">
          <h3 className="font-sm">
            <Link to={url}>{description}</Link>
          </h3>
          <span className="browzingSecYear font-rg d-block">{date}</span>
          <div className="d-flex">
            <Link
              to={url}
              className="readmore d-flex align-items-center justify-content-center position-relative"
            >
              <span>{btnText}</span>
              <em className="icon-large-arrow-right me-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockComponent;
