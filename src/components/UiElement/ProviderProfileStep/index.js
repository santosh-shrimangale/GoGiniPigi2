import ImageElement from "../ImageElement";

function ProviderProfileStep({ t, stepTab }) {
  return (
    <div className="authPage_stepForm">
      <div className="authPage_stepNum w-100 d-flex text-center">
        <div
          className={`authPage_stepNum_items position-relative active ${
            stepTab.stepTwo ? "is-done" : null
          }`}
        >
          <span>{t("text.profileProvider.one")}</span>
          <span className="authPage_stepNum_complete position-absolute d-flex align-items-center justify-content-center">
            <ImageElement
              source="/step-complete.svg"
              className="svg"
              alt="step-complete"
            />
          </span>
          <h2>{t("text.profileProvider.myDetails")}</h2>
        </div>
        <div
          className={`authPage_stepNum_items ${
            stepTab.stepTwo ? "active" : null
          } ${stepTab.stepThree ? "is-done" : null}`}
        >
          <span>{t("text.profileProvider.two")}</span>
          <span className="authPage_stepNum_complete position-absolute d-flex align-items-center justify-content-center">
            <ImageElement
              source="/step-complete.svg"
              className="svg"
              alt="step-complete"
            />
          </span>
          <h2>{t("text.profileProvider.selectServices")}</h2>
        </div>
        <div
          className={`authPage_stepNum_items ${
            stepTab.stepThree ? "active" : null
          }`}
        >
          <span>{t("text.profileProvider.three")}</span>
          <span className="authPage_stepNum_complete position-absolute d-flex align-items-center justify-content-center">
            <ImageElement
              source="/step-complete.svg"
              className="svg"
              alt="step-complete"
            />
          </span>
          <h2>{t("text.profileProvider.about")}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProviderProfileStep;
