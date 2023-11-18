import { Form, Formik } from "formik";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { DatePicker, Input as TextInput } from "../../Antd";
import { CommonButton } from "../Button";

function Search({ onSubmit }) {
  const { t } = useTranslation();
  const initialValues = {
    search: "",
    location: "",
    date: "",
  };
  const disabledFutureDate = (current) => {
    return current > moment();
  };
  return (
    <div className="searchMode_inner">
      <Formik
        initialValues={{ ...initialValues }}
        // validationSchema={validation()}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(props) => {
          const { values } = props;
          return (
            <Form>
              <ul className="list-unstyled mb-0 d-block d-md-flex align-items-center justify-content-between">
                <li>
                  <div className="form-group">
                    <label className="form-label font-md">
                      {t("text.common.search")}
                    </label>
                    <TextInput
                      type="text"
                      name="search"
                      placeholder={t("text.common.treatmentOrServices")}
                      setFieldValue={props.handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <label className="form-label font-md">
                      {t("text.common.location")}
                    </label>
                    <TextInput
                      type="text"
                      name="location"
                      placeholder={t("text.common.town")}
                      setFieldValue={props.handleChange}
                    />
                  </div>
                </li>
                <li className="border-0">
                  <div className="form-group">
                    <label className="form-label font-md">
                      {t("text.common.date")}
                    </label>
                    <div className="input-group date">
                      <DatePicker
                        name="date"
                        id="date"
                        className="datepicker"
                        placeholder="DD/MM/YY"
                        onChange={(_, dateString) =>
                          props.setFieldValue("date", dateString)
                        }
                        value={
                          values.registeredFrom !== ""
                            ? moment(values.registeredFrom)
                            : ""
                        }
                        disabledDate={disabledFutureDate}
                      />
                      {/* <span className="input-group-append">
                        <span className="input-group-icon">
                          <em className="icon-calendar" />
                        </span>
                      </span> */}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="text-end">
                    <CommonButton
                      type="submit"
                      extraClassName="submit btn btn-primary ripple-effect-dark"
                    >
                      <em className="icon-search" />
                      {t("text.common.search")}
                    </CommonButton>
                  </div>
                </li>
              </ul>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Search;
