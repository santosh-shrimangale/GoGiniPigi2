import React from "react";
import { useNavigate } from "react-router-dom";
import { CommonButton, CommonMoreButton } from "../Button";
import ImageElement from "../ImageElement";
import SectionLayoutComponent from "../SectionLayoutComponent";

function ProviderSection({
  sectionClass,
  heading,
  children,
  path = "#",
  moreLink = "#",
  buttonName,
  linkName,
  source,
}) {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate(`${path}`);
  };

  const onMoreClick = () => {
    navigate(`${moreLink}`);
  };
  return (
    <SectionLayoutComponent extraClassName={`partnerSec py-70 ${sectionClass}`}>
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-1 order-2">
          <div className="commonhead">
            <h2 className="commonhead_title">{heading}</h2>
            {children}
            <div className="d-flex commonhead_button flex-wrap">
              <CommonButton
                onClick={onButtonClick}
                className="btn btn-primary ripple-effect-dark btn-lg partnerSec_btn mb-2 mb-sm-0"
              >
                {buttonName}
              </CommonButton>
              <CommonMoreButton onClick={onMoreClick}>
                <span>{linkName}</span>
              </CommonMoreButton>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-lg-2 order-1">
          <div className="text-center mb-lg-0 mb-3">
            <ImageElement
              className="img-fluid"
              source={source}
              alt="providers-img"
            />
          </div>
        </div>
      </div>
    </SectionLayoutComponent>
  );
}

export default ProviderSection;
