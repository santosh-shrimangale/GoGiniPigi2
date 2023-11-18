import React from "react";
import ImageElement from "../ImageElement";

function TeamProfileCard({ name, position, imagePath }) {
  return (
    <div className="col">
      <div className="ourTeamSec_box text-center">
        <ImageElement className="img-fluid" source={imagePath} />
        <h3>{name}</h3>
        <p className="mb-0">{position}</p>
      </div>
    </div>
  );
}

export default TeamProfileCard;
