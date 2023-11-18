import React from "react";
import config from "../../../config";

function ImageElement({ previewSource = "", source, alt = "image", ...rest }) {
  return (
    <>
      {previewSource ? (
        <img src={previewSource} alt={alt} {...rest} />
      ) : (
        <img src={`${config.IMAGE_URL}/${source}`} alt={alt} {...rest} />
      )}
    </>
  );
}

export default ImageElement;
