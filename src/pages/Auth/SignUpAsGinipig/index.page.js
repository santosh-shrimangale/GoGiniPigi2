import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Media } from "../../../apiEndPoints";
import { MetaTags, SignUpAsGinipigForm } from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";
import { AuthServices } from "../../../services";
import { logger, modalNotification } from "../../../utils";

function SignUpAsGinipig() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      let bodyData = {
        first_name: values.firstName,
        last_name: values.lastName,
        user_type: "user",
        phone_number: `${values.phoneNumber}`,
        email: values.email,
        password: values.password,
        profile_image: values.image,
        confirm_password: values.confirmPassword,
      };
      let res = await AuthServices.userRegisterService(bodyData);
      if (res.success) {
        modalNotification({
          type: "success",
          message: res?.message,
        });
      }
      navigate(routesMap.LOGIN.path);
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };
  return (
    <>
      <MetaTags title="Registration" />
      <div className="authPage_box authPage_box-pad mx-auto">
        <div className="text-center authPage_box_head mb-0">
          <h1 className="authPage_box_title mb-0">
            {t("text.signUpAsGinipig.title")}
          </h1>
          <p className="mb-0">{t("text.signUpAsGinipig.getReady")}</p>
        </div>

        <SignUpAsGinipigForm
          onSubmit={onSubmit}
          loading={loading}
          t={t}
          apiEndPoints={Media.profileImage}
        />
      </div>
    </>
  );
}

export default SignUpAsGinipig;
