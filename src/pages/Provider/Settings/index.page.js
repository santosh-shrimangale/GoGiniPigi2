import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MetaTags } from "../../../components";

function ProviderSettings() {
  const { t } = useTranslation();
  const [emailNotification, setEmailNotificaion] = useState(false);
  const [allNotification, setAllNotificaion] = useState(false);
  const handleNotification = (e) => {
    switch (e.target.name) {
      case "emailNotification":
        return setEmailNotificaion(!emailNotification);
      case "allNotification":
        return setAllNotificaion(!allNotification);

      default:
        break;
    }
  };
  return (
    <>
      <MetaTags title={t("text.settings.pageTitle")} />
      <div className="profileCard_heading d-flex align-items-center justify-content-between">
        <h1 className="profileCard_heading_title mb-0">
          {t("text.settings.title")}
        </h1>
        <button className="btn btn-primary d-lg-none sidebarMenu" type="button">
          <em className="icon-user" />
        </button>
      </div>
      <div className="row">
        <div className="col-xl-4 col-md-5 col-sm-7">
          <div className="form-group mb-xl-4 mb-3">
            <div className="form-check form-switch ps-0 justify-content-between d-flex align-items-center mb-0">
              <label
                htmlFor="marketingSwitch"
                className="mb-0 ms-0 font-rg text-200"
              >
                {t("text.settings.marketingEmail")}
              </label>
              <input
                className="form-check-input mb-0"
                type="checkbox"
                role="switch"
                id="marketingSwitch"
                name="emailNotification"
                checked={emailNotification}
                onClick={handleNotification}
              />
            </div>
          </div>
          <div className="form-group mb-0">
            <div className="form-check form-switch ps-0 justify-content-between d-flex align-items-center mb-0">
              <label
                htmlFor="bookingSwitch"
                className="mb-0 ms-0 font-rg text-200"
              >
                {t("text.settings.allOthers")}
              </label>
              <input
                className="form-check-input mb-0"
                type="checkbox"
                role="switch"
                id="bookingSwitch"
                name="allNotification"
                checked={allNotification}
                onClick={handleNotification}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProviderSettings;
