import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthServices } from "../../../services";
import { ResetPasswordForm } from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";
import { logger, modalNotification } from "../../../utils";
import {
  forgetPassword,
  forgetPasswordData,
} from "../../../redux/AuthSlice/index.slice";

function ResetPassword() {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const getData = useSelector(forgetPasswordData);
  useEffect(() => {
    if (!getData?.token && !getData.email) {
      navigate(routesMap?.LOGIN.path);
    }
  }, [getData]);
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      let bodyData = { ...values };
      bodyData.email = getData.email;
      bodyData.token = getData.token;
      const res = await AuthServices.resetPasswordService(bodyData);
      const { data } = res;
      if (data) {
        if (data === true) {
          dispatch(forgetPassword(""));
          modalNotification({
            type: "success",
            message: "Password updated successfully!",
          });
          navigate(routesMap?.LOGIN.path);
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
      <div className="authPage_box mx-auto">
        <div className="text-center authPage_box_head">
          <h1 className="authPage_box_title">
            {t("text.resetPassword.resetNewPassword")}
          </h1>
          <p className="mb-0">{t("text.resetPassword.pleaseEnter")}</p>
        </div>

        <ResetPasswordForm onSubmit={onSubmit} loading={loading} t={t} />
      </div>
    </>
  );
}

export default ResetPassword;
