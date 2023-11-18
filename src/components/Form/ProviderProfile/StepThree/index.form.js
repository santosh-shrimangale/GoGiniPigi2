import { Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import validation from "./validation";
import { BackButton, CommonButton } from "../../../UiElement";
import {
  Input as TextInput,
  AntTextArea as TextArea,
  MultiUpload,
} from "../../../Antd";
import { Auth, Media } from "../../../../apiEndPoints";
import { getCharLeft } from "../../../../utils";

function StepThree({
  onSubmit,
  handleNextForm,
  t,
  formData,
  storageKey,
  userId,
  mediaUrl,
  imageArray = [],
  removeImage,
}) {
  const initialValues = {
    display_name: formData?.display_name || "Beauty Salon",
    bio: formData?.bio || "",
    user_id: userId,
    profile_stage: 3,
    image: "",
  };

  let productImagesArray = [];
  if (imageArray.length > 0) {
    imageArray.map((item) => {
      productImagesArray.push(item.image);
    });
  }
  const [readOnly, setReadOnly] = useState(true);
  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={validation()}
      onSubmit={(values) => {
        onSubmit(
          {
            ...values,
            provider_portfollio: productImagesArray,
            apiEndPoint: Auth.providerProfileStepThree,
          },
          storageKey
        );
      }}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <fieldset>
              <div className="form-group">
                <label className="form-label">
                  {t("text.profileProvider.profileDisplayName")}
                </label>
                <div className="position-relative">
                  <TextInput
                    className="form-control"
                    disabled={false}
                    variant="standard"
                    type="text"
                    setFieldValue={props.handleChange}
                    name="display_name"
                    placeholder={t("text.profileProvider.profileDisplayName")}
                    readOnly={readOnly}
                  />
                  <span
                    className="editfield"
                    onClick={() => setReadOnly(!readOnly)}
                  >
                    {readOnly ? t("text.common.edit") : t("text.common.done")}
                  </span>
                </div>
              </div>
              <div className="form-group">
                <div className="d-sm-flex justify-content-between">
                  <label htmlFor="bio" className="form-label">
                    {t("text.profileProvider.writeShortBioYourProfile")}
                  </label>
                </div>
                <TextArea
                  className="form-control textarea"
                  name="bio"
                  setFieldValue={props.handleChange}
                  id="bio"
                  maxLength="500"
                  minLength="25"
                  placeholder={`${t("text.common.writeHere")}...`}
                />
                <span className="text-end errormsg">
                  {getCharLeft(props.values?.bio, 500)}/500
                </span>
              </div>
              <div className="uploadStuff form-group">
                <label className="form-label">
                  {t("text.profileProvider.addYourOwnPhotos")}
                  <span className="font-sm d-block text-400">
                    {t("text.profileProvider.logoAllowed")}
                  </span>
                </label>
                <ul className="uploadStuff_multi d-flex flex-wrap flex-wrap list-unstyled">
                  <li>
                    <MultiUpload
                      name="image"
                      apiEndPoints={Media.treatment_Image}
                      type="file"
                      id="uploadId"
                      setFieldValue={props.handleChange}
                      mediaUrl={mediaUrl}
                    />
                  </li>
                  {imageArray.map((item, index) => {
                    if (item.fileType === "image") {
                      return (
                        <li key={item.imageId}>
                          <div className="uploadStuff_img position-relative">
                            <Link
                              to="#"
                              onClick={() =>
                                removeImage(props.setFieldValue, index)
                              }
                              className="position-absolute d-flex justify-content-center align-items-center"
                            >
                              <em className="icon-delete" />
                            </Link>
                            <img src={item.url} alt="Product" />
                          </div>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </fieldset>

            <div className="authPage_stepbtn d-flex justify-content-between align-items-center">
              <BackButton
                path=""
                linkAction={() => handleNextForm("stepTwo", "stepThree")}
              >
                <em className="icon-arrow-back" /> {t("text.common.back")}
              </BackButton>
              <CommonButton
                extraClassName="btn-lg btn-shadow ripple-effect-dark"
                variant="primary"
                type="submit"
              >
                {t("text.common.finish")}
              </CommonButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default StepThree;
