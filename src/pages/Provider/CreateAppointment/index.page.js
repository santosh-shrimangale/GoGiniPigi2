import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  MetaTags,
  ProviderAppointmentStep,
  ProviderAppointmentFormOne,
  ProviderAppointmentFormTwo,
  ProviderAppointmentFormThree,
} from "../../../components";

function CreateAppointment() {
  const { t } = useTranslation();
  // For formS
  let tabSteps = {
    stepTwo: false,
    stepThree: false,
  };
  const [stepTab, setStepTab] = useState(tabSteps);
  // For formS
  let formSteps = {
    stepOne: true,
    stepTwo: false,
    stepThree: false,
  };
  const [stepForm, setStepForm] = useState(formSteps);

  const [loading, setLoading] = useState(false);
  const onSubmit = (values) => {
    setLoading(true);
    try {
      if (values) {
        console.log(values, loading);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleNextForm = (formStep, type) => {
    Object.keys(formSteps).forEach((key) => {
      if (formStep === key) formSteps[key] = true;
      else formSteps[key] = false;
    });
    setStepForm(formSteps);
    //  For tabs
    if (type === "next") setStepTab({ ...stepTab, [formStep]: true });
    else setStepTab({ ...stepTab, [type]: false });
  };

  return (
    <>
      <MetaTags title={t("text.createAppointment.pageTitle")} />
      <div className="profileCard_heading profileCard_heading-border d-lg-flex justify-content-between mb-0">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="profileCard_heading_title">
            {t("text.createAppointment.createAppointment")}
          </h1>
          <button
            className="btn btn-primary d-lg-none sidebarMenu mb-3"
            type="button"
          >
            <em className="icon-user" />
          </button>
        </div>
        <ProviderAppointmentStep stepTab={stepTab} t={t} />
      </div>
      {/* Step Form */}
      {stepForm?.stepOne ? (
        <ProviderAppointmentFormOne
          t={t}
          onSubmit={onSubmit}
          handleNextForm={handleNextForm}
        />
      ) : null}
      {stepForm?.stepTwo ? (
        <ProviderAppointmentFormTwo
          t={t}
          onSubmit={onSubmit}
          handleNextForm={handleNextForm}
        />
      ) : null}
      {stepForm?.stepThree ? (
        <ProviderAppointmentFormThree
          t={t}
          onSubmit={onSubmit}
          handleNextForm={handleNextForm}
        />
      ) : null}
    </>
  );
}

export default CreateAppointment;
