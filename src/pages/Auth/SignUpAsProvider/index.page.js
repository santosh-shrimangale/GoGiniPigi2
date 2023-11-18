import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Media } from "../../../apiEndPoints";
import { MetaTags, SignUpAsProviderForm } from "../../../components";
import { updateProviderData } from "../../../redux/AuthSlice/index.slice";
import providerRouteMap from "../../../routeControl/providerRouteMap";
import { AuthServices } from "../../../services";
import { logger, modalNotification } from "../../../utils";

function SignUpAsProvider() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      let bodyData = {
        first_name: values.firstName,
        last_name: values.lastName,
        company_name: values.companyName,
        email: values.email,
        working_from: values.working,
        password: values.password,
        confirm_password: values.confirmPassword,
        profile_image: values.image,
        user_type: "provider",
      };
      let res = await AuthServices.providerRegisterService(bodyData);
      if (res.success) {
        modalNotification({
          type: "success",
          message: res?.message,
        });
        dispatch(updateProviderData(res.data));
      }

      navigate(providerRouteMap.PROVIDER_PROFILE.path);
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };
  return (
    <>
      <MetaTags title={t("text.signUpAsProvider.pageTitle")} />
      <div className="authPage_box authPage_box-pad mx-auto servpd">
        <div className="text-center authPage_box_head mb-0">
          <h1 className="authPage_box_title mb-0">
            {t("text.signUpAsProvider.title")}
          </h1>
          <p className="mb-0">{t("text.signUpAsProvider.tellUs")}</p>
        </div>

        <SignUpAsProviderForm
          onSubmit={onSubmit}
          loading={loading}
          t={t}
          apiEndPoints={Media.profileImage}
        />
      </div>
    </>
  );
}

export default SignUpAsProvider;
