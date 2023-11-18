import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MetaTags, LoginForm } from "../../../components";
import { login } from "../../../redux/AuthSlice/index.slice";
import providerRouteMap from "../../../routeControl/providerRouteMap";
import routesMap from "../../../routeControl/userRouteMap";
import { AuthServices } from "../../../services";
import {
  logger,
  modalNotification,
  setLocalStorageToken,
  setSessionStorage,
} from "../../../utils";

function Login() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      let bodyData = { ...values };
      bodyData.device_type = "web";
      const res = await AuthServices.loginService(bodyData);
      const { data } = res;
      if (data) {
        console.log(data);
        if (data?.user_type !== "admin") {
          dispatch(login(data));
          modalNotification({
            type: "success",
            message: "Login Successful",
          });

          if (data?.user_type === "provider") {
            if (
              data?.profile_stage === 0 ||
              data?.profile_stage === 1 ||
              data?.profile_stage === 2
            ) {
              navigate(providerRouteMap?.PROVIDER_PROFILE.path);
              setSessionStorage("providerProfile", data.userAddress);

              // For tabs
              let tabSteps = {
                tepOne: data?.profile_stage === 1,
                stepTwo: data?.profile_stage === 1 || data?.profile_stage === 2,
                stepThree: data?.profile_stage === 2,
              };
              setSessionStorage("stepTab", tabSteps);
              // For form step
              let formSteps = {
                stepOne: data?.profile_stage === 0,
                stepTwo: data?.profile_stage === 1,
                stepThree: data?.profile_stage === 2,
              };
              setSessionStorage("stepForm", formSteps);
            } else {
              navigate(providerRouteMap?.PROFILE.path);
              setLocalStorageToken(data?.token);
            }
          } else if (data?.user_type === "user") {
            setLocalStorageToken(data?.token);
            navigate(routesMap?.HOME.path);
          }
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
      <MetaTags title={t("text.login.pageTitle")} />
      <div className="authPage_box mx-auto">
        <div className="text-center authPage_box_head">
          <h1 className="authPage_box_title">{t("text.login.weAreHappy")}</h1>
          <p className="mb-0">{t("text.login.weKnewItWouldntBe")}</p>
        </div>
        <LoginForm onSubmit={onSubmit} loading={loading} t={t} />
      </div>
    </>
  );
}

export default Login;
