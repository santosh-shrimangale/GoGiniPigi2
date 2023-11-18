import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function BackButton({
  extraClassName = "readmore d-flex align-items-center justify-content-center position-relative",
  path = "#",
  linkAction,
}) {
  const { t } = useTranslation();
  return (
    <>
      <Link
        to={path}
        onClick={(e) => {
          if (path === "") {
            e.preventDefault();
            linkAction();
          }
        }}
        className={extraClassName}
      >
        <em className="icon-arrow-back" />
        {t("text.common.back")}
      </Link>
    </>
  );
}

export default BackButton;
