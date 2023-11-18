function ProviderAppointmentStep({ t, stepTab }) {
  return (
    <div className="profileCard_stepNum d-sm-flex justify-content-lg-end mb-2 mb-lg-4">
      <div className="profileCard_stepNum_items d-flex align-items-center active">
        <span>{t("text.createAppointment.one")}</span>
        <h2 className="mb-0">
          {t("text.createAppointment.treatment")} /
          <br className="d-none d-sm-block" />
          {t("text.createAppointment.services")}
        </h2>
      </div>
      <div
        className={`profileCard_stepNum_items align-items-center d-flex ${
          stepTab.stepTwo ? "active" : null
        }`}
      >
        <span>{t("text.createAppointment.two")}</span>
        <h2 className="mb-0">
          {t("text.createAppointment.add")}
          <br className="d-none d-sm-block" />
          {t("text.createAppointment.treatmentSkills")}
        </h2>
      </div>
      <div
        className={`profileCard_stepNum_items align-items-center d-flex ${
          stepTab.stepThree ? "active" : null
        }`}
      >
        <span>{t("text.createAppointment.three")}</span>
        <h2 className="mb-0">
          {t("text.createAppointment.pageTitle")}
          <br className="d-none d-sm-block" />{" "}
          {t("text.createAppointment.availability")}
        </h2>
      </div>
    </div>
  );
}

export default ProviderAppointmentStep;
