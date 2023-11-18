import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  MetaTags,
  ProviderProfileStep,
  ProviderProfileFormOne,
  ProviderProfileFormTwo,
  ProviderProfileFormThree,
} from "../../../components";
import { providerProfile } from "../../../redux/AuthSlice/index.slice";
import routesMap from "../../../routeControl/userRouteMap";
import { AuthServices } from "../../../services/Auth/index.services";
import { CommonServices } from "../../../services/Common/index.services";
import {
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  logger,
  modalNotification,
} from "../../../utils";

function ProfileProvider() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id } = useSelector((state) => state.auth.providerProfileData);

  const [imageArray, setImageArray] = useState([]);

  const [categoryList, setCategoryList] = useState([]);
  // For form tabs
  let tabSteps = {
    stepTwo: getSessionStorage("stepTab")?.stepTwo || false,
    stepThree: getSessionStorage("stepTab")?.stepThree || false,
  };
  const [stepTab, setStepTab] = useState(tabSteps);

  // For form step
  let formSteps = {
    stepOne: getSessionStorage("stepForm")
      ? !!getSessionStorage("stepForm").stepOne
      : true,
    stepTwo: getSessionStorage("stepForm")?.stepTwo || false,
    stepThree: getSessionStorage("stepForm")?.stepThree || false,
  };
  const [stepForm, setStepForm] = useState(formSteps);
  // For get Data
  const [formData, setFormData] = useState({});
  useEffect(() => {
    setFormData({ ...getSessionStorage("providerProfile") });
  }, [stepForm]);

  const [loading, setLoading] = useState(false);
  const onSubmit = async (values, keyName) => {
    setLoading(true);
    // Store For session storage
    if (values && keyName === "storageRemove") {
      removeSessionStorage("stepForm");
      removeSessionStorage("stepTab");
      removeSessionStorage("providerProfile");
    } else
      setSessionStorage(keyName, {
        ...getSessionStorage(keyName),
        ...values,
      });
    // For Api
    try {
      let { apiEndPoint, ...bodyData } = values;
      const { data, message } = await AuthServices.profileProviderService(
        bodyData,
        apiEndPoint
      );
      if (data) {
        dispatch(providerProfile(data));
        if (data && keyName === "storageRemove") {
          modalNotification({
            type: "success",
            message,
          });
          navigate(routesMap?.LOGIN.path);
        }
      }
      logger(loading);
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };

  const handleNextForm = (formStep, type) => {
    Object.keys(formSteps).forEach((key) => {
      if (formStep === key) formSteps[key] = true;
      else formSteps[key] = false;
    });
    setStepForm(formSteps);
    setSessionStorage("stepForm", formSteps);
    //  For tabs
    if (type === "next") {
      setStepTab({ ...stepTab, [formStep]: true });
      setSessionStorage("stepTab", { ...stepTab, [formStep]: true });
    } else {
      setStepTab({ ...stepTab, [type]: false });
      setSessionStorage("stepTab", { ...stepTab, [type]: false });
    }
  };

  const mediaUrl = (data) => {
    let tempArray = imageArray;
    const { imageId, image, url } = data;
    tempArray.push({ imageId, image, url, fileType: "image" });
    setImageArray([...tempArray]);
  };

  const removeImage = (setFieldValue, index) => {
    let tempArray = imageArray;
    tempArray.splice(index, 1);
    if (tempArray.length === 0) {
      setFieldValue("profile_image", "");
    }
    setImageArray([...tempArray]);
  };

  const getCategoryList = async () => {
    try {
      let res = await CommonServices.CategoryListService();
      if (res?.success) {
        setCategoryList(res?.data);
      }
    } catch (error) {
      logger(error);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <>
      <MetaTags title={t("text.profileProvider.pageTitle")} />
      <div className="authPage_box authPage_box-width m-auto">
        <div className="text-center authPage_box_head mb-0">
          <h1 className="authPage_box_title mb-0">
            {t("text.profileProvider.title")}
          </h1>
          <p className="mb-0">{t("text.profileProvider.subTitle")}</p>
        </div>
        <ProviderProfileStep stepTab={stepTab} t={t} />
        {/* Step Form */}
        {/* {console.log(formData.postcode,"step form")} */}
        {stepForm?.stepOne ? (
          <ProviderProfileFormOne
            t={t}
            onSubmit={onSubmit}
            handleNextForm={handleNextForm}
            formData={formData}
            storageKey="providerProfile"
            userId={id}
          />
        ) : null}

        {stepForm?.stepTwo ? (
          <ProviderProfileFormTwo
            t={t}
            onSubmit={onSubmit}
            handleNextForm={handleNextForm}
            formData={formData}
            categoryList={categoryList}
            storageKey="providerProfile"
            userId={id}
          />
        ) : null}
        {stepForm?.stepThree ? (
          <ProviderProfileFormThree
            t={t}
            onSubmit={onSubmit}
            handleNextForm={handleNextForm}
            formData={formData}
            storageKey="storageRemove"
            userId={id}
            mediaUrl={mediaUrl}
            imageArray={imageArray}
            removeImage={removeImage}
          />
        ) : null}
      </div>
    </>
  );
}

export default ProfileProvider;
