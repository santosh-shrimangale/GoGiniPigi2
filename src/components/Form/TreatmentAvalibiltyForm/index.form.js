import { Form, Formik, Field } from "formik";
import { Link } from "react-router-dom";
import { DatePicker, Input as TextInput } from "../../Antd";
import { CommonButton } from "../../UiElement";

function TreatmentAvalibiltyForm({ t, onSubmit }) {
  let timeSlot = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];
  const initialValues = {
    checked: new Array(timeSlot.length).fill(false),
    startdate: "",
    enddate: "",
    accept: false,
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <div className="row g-3 align-items-end detailCard_calender">
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label font-sm">
                    <em className="icon-calendar" />{" "}
                    {t("text.treatmentAvailability.date")}
                  </label>
                  <div className="input-group date">
                    <DatePicker
                      name="startdate"
                      id="startdate"
                      className="form-control datepicker"
                      placeholder="DD/MM/YY"
                      dateFormate="DD/MM/YY"
                    />
                    <span className="input-group-append">
                      <span className="input-group-icon">
                        <em className="icon-calendar" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeSlot">
              <label className="form-label font-sm">
                <em className="icon-timer" />{" "}
                {t("text.treatmentAvailability.time")}
              </label>
              <div className="row g-2 g-xxl-3 row-cols-auto">
                {timeSlot.map((time, index) => {
                  return (
                    <div className="col">
                      <TextInput
                        className="position-absolute"
                        id={`custom-checkbox-${index}`}
                        name={`checked[${index}]`}
                        value={time}
                        type="checkbox"
                        onChange={(event) => {
                          props.setFieldValue(
                            `checked[${index}]`,
                            event.target.checked
                          );
                        }}
                        validation={false}
                      />

                      <label htmlFor={`custom-checkbox-${index}`}>{time}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr className="divider" />
            <div className="detailCard_footer d-sm-flex align-items-center justify-content-between">
              <div className="form-group mb-0">
                <div className="form-check m-0">
                  <Field
                    type="checkbox"
                    name="accept"
                    className="form-check-input"
                  />
                  <label className="form-check-label mb-0 font-rg">
                    {t("text.treatmentAvailability.accept")}{" "}
                    <Link to="#" className="font-rg">
                      {" "}
                      {t("text.treatmentAvailability.booking")}
                    </Link>
                  </label>
                </div>
              </div>
              <div className="text-end">
                <CommonButton
                  extraClassName="btn btn-primary btn-shadow ripple-effect-dark save-btn next"
                  htmlType="submit"
                  type="submit"
                >
                  {t("text.common.next")}
                </CommonButton>
                <Link
                  to="#"
                  className="btn btn-primary btn-shadow ripple-effect-dark save-btn make_pmt d-none"
                >
                  {t("text.treatmentAvailability.payment")}
                </Link>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default TreatmentAvalibiltyForm;
