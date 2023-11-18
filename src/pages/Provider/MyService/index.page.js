import React from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { MetaTags, MyServiceForm } from "../../../components";

function MyService() {
  return (
    <>
      <MetaTags title={t("text.myService.title")} />
      <main className="main-content profilePage">
        <div className="d-lg-flex">
          <div className="profileCard card card-body border-0">
            <div className="d-lg-flex justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <h1 className="profileCard_heading_title">
                  {t("text.myService.title")}
                </h1>
                <button
                  className="btn btn-primary d-lg-none sidebarMenu mb-3"
                  type="button"
                >
                  <em className="icon-user" />
                </button>
              </div>
            </div>
            <div className="profilePage_services">
              <MyServiceForm />
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="btn btn-primary next btn-lg btn-shadow ripple-effect-dark"
              >
                {t("text.myService.update")}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default MyService;
