import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CommonButton,
  MetaTags,
  ChangePasswordForm,
} from "../../../components";

import { logger } from "../../../utils";

function ChangePassword() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    try {
      // setLoading(false)
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };

  return (
    <>
      <MetaTags title={t("text.changePassword.title")} />
      <main className="main-content profilePage">
        <div className="profileCard_heading d-flex align-items-center justify-content-between">
          {/* <section className="py-70 bg-55"> */}
          <div className="container">
            <div className="d-lg-flex">
              <div className="profileCard card card-body border-0">
                <div className="profileCard_heading d-flex align-items-center justify-content-between">
                  <h1 className="profileCard_heading_title mb-0">
                    {t("text.changePassword.title")}
                  </h1>
                  <CommonButton
                    className="btn btn-primary d-lg-none sidebarMenu mb-3"
                    type="button"
                  >
                    <em className="icon-user" />
                  </CommonButton>
                </div>
                <div>
                  <ChangePasswordForm
                    onSubmit={onSubmit}
                    loading={loading}
                    t={t}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ChangePassword;
