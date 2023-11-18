import React from "react";
import ImageElement from "../ImageElement";

function Portfolio({ imgsource }) {
  return (
    <>
      <li>
        <div className="uploadStuff_img  position-relative">
          <ImageElement source={imgsource} alt="portfolio" />
        </div>
      </li>
    </>
  );
}
export default Portfolio;
