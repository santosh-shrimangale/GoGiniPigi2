import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import routesMap from "../../../routeControl/userRouteMap";
import { AuthServices } from "../../../services";
import { MetaTags, ForgetPasswordForm } from "../../../components";
import { logger, modalNotification } from "../../../utils";
import { forgetPassword } from "../../../redux/AuthSlice/index.slice";

function ForgetPassword() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      let bodyData = { ...values };
      bodyData.type = ["reset-password"];

      const res = await AuthServices.forgetPasswordService(bodyData);
      const { data } = res;
      if (data) {
        if (res.success) {
          dispatch(forgetPassword(data));
          modalNotification({
            type: "success",
            message:
              "We have sent you an e-mail for your password reset OTP!, Please check your Email for details to reset the password.",
          });
          navigate(routesMap?.VERIFICATION.path);
        } else {
          modalNotification({
            type: "error",
            message: "Something went wrong",
          });
        }
      }
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };
  return (
    <>
      <MetaTags title={t("text.forgotPassword.title")} />

      <div className="authPage_box mx-auto">
        <div className="text-center authPage_box_head">
          <h1 className="authPage_box_title">
            {t("text.forgotPassword.forgetPasswordHeadLine")}
          </h1>
          <p className="mb-0">
            {t("text.forgotPassword.wellSend")}
            <br className="d-none d-md-block" />
            {t("text.forgotPassword.yourpassword")}
          </p>
        </div>
        <ForgetPasswordForm onSubmit={onSubmit} loading={loading} t={t} />
      </div>
    </>
  );
}

export default ForgetPassword;
