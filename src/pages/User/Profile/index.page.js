import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { MetaTags, ProfileForm } from "../../../components";
import {
  selectUserData,
  updateUserData,
} from "../../../redux/AuthSlice/index.slice";
import { userProfileService } from "../../../services";
import { logger, modalNotification } from "../../../utils";

function Profile() {
  const { t } = useTranslation();
  const [disabledField, setDisabledField] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);

  const editProfileHandler = () => {
    setDisabledField(false);
  };

  const saveProfile = () => {
    setDisabledField(true);
  };

  const onSubmit = async (value) => {
    setLoading(true);
    setDisabledField(false);
    try {
      let bodyData = { ...value };
      bodyData.email = userData?.email;
      const response = await userProfileService.updateProfileService(bodyData);
      const { success, message } = response;
      if (success) {
        modalNotification({
          type: "success",
          message,
        });
        setLoading(false);
        setDisabledField(true);
        dispatch(updateUserData(response?.data));
      }
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };
  const options = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
    { name: "Other", value: "other" },
  ];
  return (
    <>
      <MetaTags title="My Profile" />
      <ProfileForm
        t={t}
        onSubmit={onSubmit}
        editProfileHandler={editProfileHandler}
        disabledField={disabledField}
        saveProfile={saveProfile}
        options={options}
        userData={userData}
        loading={loading}
      />
    </>
  );
}

export default Profile;
