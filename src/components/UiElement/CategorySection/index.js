import React, { useState } from "react";
import CustomChecked from "../CustomChecked";

function CategorySection({ getFilterData, t }) {
  const [price, setPrice] = useState("");

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const soryBy = [
    {
      label: t("text.treatmentList.instantLabel"),
    },
    {
      label: t("text.treatmentList.highestLabel"),
    },
    {
      label: t("text.treatmentList.onlineLabel"),
    },
  ];
  const treatment = [
    {
      label: t("text.treatmentList.trainingLabel"),
    },
    {
      label: t("text.treatmentList.caseLable"),
    },
    {
      label: t("text.treatmentList.portfolioLabel"),
    },
  ];

  const Competency = [
    {
      label: t("text.treatmentList.newbieLabel"),
    },
    {
      label: t("text.treatmentList.nearlyLabel"),
    },
    {
      label: t("text.treatmentList.starLabel"),
    },
  ];
  return (
    <div className="filter_inner">
      <h2 className="font-md m-0">{t("text.treatmentList.filterRefine")}</h2>
      <h5 className="font-sm mt-3">{t("text.treatmentList.sortBy")}</h5>
      <ul className="list-unstyled">
        {soryBy.map((index) => {
          return (
            <li>
              <div className="form-group mb-0">
                <div className="form-check d-flex align-items-center">
                  <CustomChecked
                    label={index.label}
                    handleClick={(e) => {
                      getFilterData(e);
                    }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <h5 className="font-sm">{t("text.treatmentList.treatmentPurpose")}</h5>
      <ul className="list-unstyled">
        {treatment.map((index) => {
          return (
            <li>
              <div className="form-group mb-0">
                <div className="form-check d-flex align-items-center">
                  <CustomChecked
                    label={index.label}
                    handleClick={(e) => {
                      getFilterData(e, price);
                    }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <h5 className="font-sm">{t("text.treatmentList.price")}</h5>
      <ul className="list-unstyled">
        <li>
          <div className="form-group mb-0">
            <div className="form-check d-flex align-items-center">
              <input
                className="form-check-input ms-0"
                id="check02"
                type="radio"
                name="price"
                value="High-Low"
                onChange={handlePriceChange}
              />
              <label htmlFor="check02" className="form-check-label mb-0">
                {t("text.treatmentList.highLowLabel")}
              </label>
            </div>
          </div>
        </li>
        <li>
          <div className="form-group mb-0">
            <div className="form-check d-flex align-items-center">
              <input
                className="form-check-input ms-0"
                id="check03"
                type="radio"
                name="price"
                value="Low-High"
                onChange={handlePriceChange}
              />
              <label htmlFor="check03" className="form-check-label mb-0">
                {t("text.treatmentList.lowHighLabel")}
              </label>
            </div>
          </div>
        </li>
      </ul>
      <div className="rang-slider">
        <input
          className="distanceRangeSlider"
          min="0"
          max="300"
          value="30,200"
          type="points"
          name="distance"
        />
        <div className="d-flex align-items-center rangInput">
          <div className="input-group mb-0">
            <span className="input-group-text">
              {" "}
              {t("text.treatmentList.min")}
            </span>
            <input
              type="text"
              value="£ 7.50"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="input-group mb-0">
            <span className="input-group-text">
              {t("text.treatmentList.max")}
            </span>
            <input
              type="text"
              value="£1,000.00"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <h5 className="font-sm">{t("text.treatmentList.competencyLevel")}</h5>
      <ul className="list-unstyled">
        {Competency.map((index) => {
          return (
            <li>
              <div className="form-group mb-0">
                <div className="form-check d-flex align-items-center">
                  <CustomChecked label={index.label} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategorySection;
