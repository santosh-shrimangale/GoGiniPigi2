import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function FilterContent({ items, allCategories, allFilterData, clearAll }) {
  const { t } = useTranslation();
  return (
    <div className="catInputs d-flex flex-wrap align-items-center ">
      <span>
        {items} {t("text.common.item")}{" "}
        <Link to="#" className="text-decoration-underline">
          {allCategories}
        </Link>
      </span>
      <div className="row row-cols-auto g-2 align-items-center catInputs_box">
        {allFilterData.map((filterData) => {
          return (
            <div className="col">
              <div className="catInputs_tag">
                <Link to="#">{filterData.name}</Link>
                <Link to="#" className="close">
                  {" "}
                  <em className="icon-close" />
                </Link>
              </div>
            </div>
          );
        })}

        <span>
          {" "}
          <Link
            to="#"
            className="text-decoration-underline"
            onClick={(e) => {
              e.preventDefault();
              clearAll("");
            }}
          >
            {t("text.common.clearAll")}
          </Link>
        </span>
      </div>
    </div>
  );
}

export default FilterContent;
