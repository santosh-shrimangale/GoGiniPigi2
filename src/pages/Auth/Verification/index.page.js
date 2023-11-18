import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MetaTags, VerificationForm } from "../../../components";
import { logger, modalNotification } from "../../../utils";
import { AuthServices } from "../../../services";
import {
  forgetPassword,
  forgetPasswordData,
} from "../../../redux/AuthSlice/index.slice";
import routesMap from "../../../routeControl/userRouteMap";

function Verification() {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  let getData = useSelector(forgetPasswordData);
  useEffect(() => {
    if (!getData?.email) {
      navigate(routesMap?.LOGIN.path);
    } else if (getData?.token) {
      navigate(routesMap?.RESET_PASSWORD.path);
    }
  }, [getData]);
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      let bodyData = { ...values };
      bodyData.email = getData.email;
      bodyData.device_type = "web";
      const res = await AuthServices.veryfyOtpService(bodyData);
      const { data } = res;
      if (data) {
        if (data.token) {
          dispatch(forgetPassword(data));
          modalNotification({
            type: "success",
            message: t("text.verification.otpSuccess"),
          });
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
      <MetaTags title={t("text.verification.pageTitle")} />

      <div className="authPage_box mx-auto">
        <div className="text-center authPage_box_head">
          <h1 className="authPage_box_title">
            {t("text.verification.enterCode")}
          </h1>
          <p className="mb-0">
            {t("text.verification.aDigital")}
            <br className="d-none d-md-block" />
            {t("text.verification.yourEmail")}
          </p>
        </div>
        <VerificationForm onSubmit={onSubmit} loading={loading} t={t} />
      </div>
    </>
  );
}

export default Verification;
