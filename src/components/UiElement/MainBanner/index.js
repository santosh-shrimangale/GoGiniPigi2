import React from "react";
import SectionLayoutComponent from "../SectionLayoutComponent";

function MainBanner({
  extraClassName,
  breadcrumb,
  heading,
  description,
  children,
  headings,
  mainBannerClass = "",
  descriptionClassName = "",
}) {
  return (
    <SectionLayoutComponent
      extraClassName={`pageBanner position-relative ${mainBannerClass}`}
    >
      {breadcrumb}
      <div className="row align-items-center">
        <div className="col-sm-6 col-lg-8">
          <div className={`commonhead ${extraClassName}`}>
            <h1 className="commonhead_title mb-0">
              {heading}
              <br className="d-none d-sm-block" />
              {headings}
            </h1>
            <p className={`${descriptionClassName} mb-0`}>{description}</p>
          </div>
        </div>
        {children && (
          <div className="col-sm-6 col-lg-4 pageBanner_img d-none d-sm-block">
            {children}
          </div>
        )}
      </div>
    </SectionLayoutComponent>
  );
}

export default MainBanner;
