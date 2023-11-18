import { Form, Formik } from "formik";
import validation from "./validation";
import { BackButton, CommonButton, ImageElement } from "../../../UiElement";
import { Input as TextInput, AntSelect as Select } from "../../../Antd";
import { totalNumber } from "./stepData";

function StepThree({ onSubmit, handleNextForm, t }) {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={validation()}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <div className="profileCard_inner aptPage">
              <fieldset>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group form-apt">
                      <label className="form-label">
                        {t("text.createAppointment.selectTypeAppointment")}
                      </label>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <TextInput
                            className="form-check-input"
                            name="appointment"
                            disabled={false}
                            type="radio"
                            setFieldValue={props.handleChange}
                            id="inPerson"
                            value="inPerson"
                            validation={false}
                          />
                          <label
                            className="form-check-label mb-0  text-800"
                            htmlFor="inPerson"
                          >
                            {t("text.createAppointment.inPerson")}
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <TextInput
                            className="form-check-input"
                            name="appointment"
                            disabled={false}
                            type="radio"
                            setFieldValue={props.handleChange}
                            id="online"
                            value="online"
                            validation={false}
                          />
                          <label
                            className="form-check-label mb-0 text-800"
                            htmlFor="online"
                          >
                            {t("text.createAppointment.online")}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">
                        {t(
                          "text.createAppointment.totalNumberGiniPigsRequired"
                        )}
                      </label>
                      <Select
                        className="form-select"
                        name="totalNumberGiniPigs"
                        defaultValue="01"
                        setFieldValue={props.handleChange}
                        showSearch
                        options={totalNumber}
                      />
                    </div>
                  </div>
                </div>
                <div className="aptInperson">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-label" htmlFor="location">
                          {t(
                            "text.createAppointment.useProfileLocationTreatment"
                          )}
                        </label>
                        <TextInput
                          className="form-control"
                          name="profileLocation"
                          disabled={false}
                          type="text"
                          setFieldValue={props.handleChange}
                          id="profileLocation"
                          placeholder={t(
                            "text.createAppointment.enterProfileLocation"
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-auto">
                      <span className="profileCard_inner_or h-100 d-flex justify-content-center">
                        {t("text.common.or")}
                      </span>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="postcode">
                          {t("text.createAppointment.enterNewPostcode")}
                        </label>
                        <TextInput
                          className="form-control"
                          name="postcode"
                          disabled={false}
                          type="text"
                          setFieldValue={props.handleChange}
                          id="postcode"
                          placeholder={t(
                            "text.createAppointment.enterNewPostcode"
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group form-apt">
                    <label className="form-label">
                      {t("text.createAppointment.readyCreateAppointment")}
                    </label>
                    <div className="d-md-flex">
                      <div className="form-check form-check-inline">
                        <TextInput
                          className="form-check-input"
                          name="multipleDates"
                          disabled={false}
                          type="radio"
                          setFieldValue={props.handleChange}
                          id="multipleDates"
                          value="multiple dates"
                          validation={false}
                        />
                        <label
                          className="form-check-label mb-0  text-800"
                          htmlFor="multipleDates"
                        >
                          {t(
                            "text.createAppointment.iHaveMultipleDatesTimeAvailable"
                          )}
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <TextInput
                          className="form-check-input"
                          name="multipleDates"
                          disabled={false}
                          type="radio"
                          setFieldValue={props.handleChange}
                          id="specificDate"
                          value="specific date"
                          validation={false}
                        />
                        <label
                          className="form-check-label mb-0 text-800"
                          htmlFor="specificDate"
                        >
                          {t(
                            "text.createAppointment.iHaveSpecificDateTimeAvailable"
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="cnt-multiIN">
                    <div className="form-group form-apt">
                      <label className="form-label">
                        {t("text.createAppointment.selectDateTime")} (
                        {t("text.createAppointment.upToMonthsAdvance")})
                      </label>
                      <div className="row">
                        <div className="col-xxl-4 col-md-6">
                          <div className="datepicker-inline" />
                        </div>
                        <div className="col-xxl-6 col-md-6 ms-xxl-3">
                          <div className="profilePage_contentTime overflow-hidden">
                            <div className="timeSlot">
                              <div className="d-flex align-items-center day">
                                <ImageElement
                                  source="morning-img.svg"
                                  alt="morning"
                                  className="svg img-fluid"
                                />
                                <h4 className="day_name mb-0 ms-1">Morning</h4>
                                <div className="form-group ms-auto mb-0">
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="selectMrnIN"
                                    />
                                    <label
                                      className="form-check-label mb-0"
                                      htmlFor="selectMrnIN"
                                    >
                                      Select All
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="row g-2 row-cols-auto">
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN1"
                                    className="position-absolute checkBoxMrng"
                                    id="mrng-multiIN1"
                                  />
                                  <label htmlFor="mrng-multiIN1">07:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN1"
                                    className="position-absolute checkBoxMrng"
                                    id="mrng-multiIN2"
                                    disabled
                                  />
                                  <label htmlFor="mrng-multiIN2">07:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN1"
                                    className="position-absolute checkBoxMrng"
                                    id="mrng-multiIN3"
                                  />
                                  <label htmlFor="mrng-multiIN3">08:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN1"
                                    className="position-absolute checkBoxMrng"
                                    id="mrng-multiIN4"
                                  />
                                  <label htmlFor="mrng-multiIN4">08:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN1"
                                    className="position-absolute checkBoxMrng"
                                    id="mrng-multiIN5"
                                    checked
                                  />
                                  <label htmlFor="mrng-multiIN5">09:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN1"
                                    className="position-absolute checkBoxMrng"
                                    id="mrng-multiIN6"
                                  />
                                  <label htmlFor="mrng-multiIN6">09:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN1"
                                    className="position-absolute checkBoxMrng"
                                    id="mrng-multiIN7"
                                  />
                                  <label htmlFor="mrng-multiIN7">10:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN1"
                                    className="position-absolute checkBoxMrng"
                                    id="mrng-multiIN8"
                                    checked
                                  />
                                  <label htmlFor="mrng-multiIN8">10:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN1"
                                    className="position-absolute checkBoxMrng"
                                    id="mrng-multiIN9"
                                    disabled
                                  />
                                  <label htmlFor="mrng-multiIN9">11:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN1"
                                    className="position-absolute checkBoxMrng"
                                    id="mrng-multiIN10"
                                  />
                                  <label htmlFor="mrng-multiIN10">11:30</label>
                                </div>
                              </div>
                            </div>
                            <div className="timeSlot">
                              <div className="d-flex align-items-center day">
                                <img
                                  src="/afternoon-img.svg"
                                  alt="afternoon"
                                  className="svg img-fluid"
                                />
                                <h4 className="day_name mb-0 ms-1">
                                  Afternoon
                                </h4>
                                <div className="form-group ms-auto mb-0">
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="selectNoonIN"
                                    />
                                    <label
                                      className="form-check-label mb-0"
                                      htmlFor="selectNoonIN"
                                    >
                                      Select All
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="row g-2 row-cols-auto">
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN2"
                                    className="position-absolute checkBoxNoon"
                                    id="noon-multiIN1"
                                    checked
                                  />
                                  <label htmlFor="noon-multiIN1">12:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN2"
                                    className="position-absolute checkBoxNoon"
                                    id="noon-multiIN2"
                                  />
                                  <label htmlFor="noon-multiIN2">12:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN2"
                                    className="position-absolute checkBoxNoon"
                                    id="noon-multiIN3"
                                    disabled
                                  />
                                  <label htmlFor="noon-multiIN3">13:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN2"
                                    className="position-absolute checkBoxNoon"
                                    id="noon-multiIN4"
                                  />
                                  <label htmlFor="noon-multiIN4">13:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN2"
                                    className="position-absolute checkBoxNoon"
                                    id="noon-multiIN5"
                                  />
                                  <label htmlFor="noon-multiIN5">14:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN2"
                                    className="position-absolute checkBoxNoon"
                                    id="noon-multiIN6"
                                  />
                                  <label htmlFor="noon-multiIN6">14:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN2"
                                    className="position-absolute checkBoxNoon"
                                    id="noon-multiIN7"
                                    checked
                                  />
                                  <label htmlFor="noon-multiIN7">15:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN2"
                                    className="position-absolute checkBoxNoon"
                                    id="noon-multiIN8"
                                  />
                                  <label htmlFor="noon-multiIN8">15:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN2"
                                    className="position-absolute checkBoxNoon"
                                    id="noon-multiIN9"
                                    disabled
                                  />
                                  <label htmlFor="noon-multiIN9">16:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN2"
                                    className="position-absolute checkBoxNoon"
                                    id="noon-multiIN10"
                                  />
                                  <label htmlFor="noon-multiIN10">16:30</label>
                                </div>
                              </div>
                            </div>
                            <div className="timeSlot">
                              <div className="d-flex align-items-center day">
                                <img
                                  src="/night-img.svg"
                                  alt="night"
                                  className="svg img-fluid"
                                />
                                <h4 className="day_name mb-0 ms-1">Night</h4>
                                <div className="form-group ms-auto mb-0">
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="selectNightIN"
                                    />
                                    <label
                                      className="form-check-label mb-0"
                                      htmlFor="selectNightIN"
                                    >
                                      Select All
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="row g-2 row-cols-auto">
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN3"
                                    className="position-absolute checkBoxNight"
                                    id="night-multiIN1"
                                  />
                                  <label htmlFor="night-multiIN1">17:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN3"
                                    className="position-absolute checkBoxNight"
                                    id="night-multiIN2"
                                    checked
                                  />
                                  <label htmlFor="night-multiIN2">17:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN3"
                                    className="position-absolute checkBoxNight"
                                    id="night-multiIN3"
                                  />
                                  <label htmlFor="night-multiIN3">18:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN3"
                                    className="position-absolute checkBoxNight"
                                    id="night-multiIN4"
                                    disabled
                                  />
                                  <label htmlFor="night-multiIN4">18:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN3"
                                    className="position-absolute checkBoxNight"
                                    id="night-multiIN5"
                                  />
                                  <label htmlFor="night-multiIN5">19:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN3"
                                    className="position-absolute checkBoxNight"
                                    id="night-multiIN6"
                                    disabled
                                  />
                                  <label htmlFor="night-multiIN6">19:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN3"
                                    className="position-absolute checkBoxNight"
                                    id="night-multiIN7"
                                  />
                                  <label htmlFor="night-multiIN7">20:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN3"
                                    className="position-absolute checkBoxNight"
                                    id="night-multiIN8"
                                  />
                                  <label htmlFor="night-multiIN8">20:30</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN3"
                                    className="position-absolute checkBoxNight"
                                    id="night-multiIN9"
                                    checked
                                  />
                                  <label htmlFor="night-multiIN9">21:00</label>
                                </div>
                                <div className="col">
                                  <input
                                    type="checkbox"
                                    name="timeslot-multiIN3"
                                    className="position-absolute checkBoxNight"
                                    id="night-multiIN10"
                                  />
                                  <label htmlFor="night-multiIN10">21:30</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="selectedDate">
                      <h2 className="selectedDate_subtitle">
                        Selected dates and times
                      </h2>
                      <ul
                        className="nav nav-tabs d-flex align-items-end selectedDate_tabsTime border-0 mb-xl-3"
                        id="nav-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <button
                            className="nav-link active p-0"
                            id="tabs-julyIN-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#tabs-julyIN"
                            type="button"
                            role="tab"
                            aria-controls="tabs-julyIN"
                            aria-selected="true"
                          >
                            JULY
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link p-0"
                            id="tabs-augustIN-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#tabs-augustIN"
                            type="button"
                            role="tab"
                            aria-controls="tabs-augustIN"
                            aria-selected="true"
                          >
                            AUGUST
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link p-0"
                            id="tabs-september-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#tabs-september"
                            type="button"
                            role="tab"
                            aria-controls="tabs-september"
                            aria-selected="true"
                          >
                            SEPTEMBER
                          </button>
                        </li>
                      </ul>

                      <div className="tab-content" id="tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="tabs-julyIN"
                          role="tabpanel"
                          aria-labelledby="julyIN-tab"
                        >
                          <div className="row ">
                            <div className="col-md-6">
                              <div className="selectedDate_card">
                                <div className="selectedDate_card_head">
                                  <h4 className="selectedDate_card_date mb-0">
                                    08 July 2022
                                  </h4>
                                </div>
                                <div className="selectedDate_card_body">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/morning-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Morning
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                        </p>
                                      </div>
                                    </li>
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/afternoon-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Afternoon
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                          <span>17:00</span>
                                        </p>
                                      </div>
                                    </li>
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/night-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Evening
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                        </p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="selectedDate_card">
                                <div className="selectedDate_card_head">
                                  <h4 className="selectedDate_card_date mb-0">
                                    13 July 2022
                                  </h4>
                                </div>
                                <div className="selectedDate_card_body">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/morning-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Morning
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                        </p>
                                      </div>
                                    </li>
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/afternoon-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Afternoon
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                          <span>17:00</span>
                                        </p>
                                      </div>
                                    </li>
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/night-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Evening
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                        </p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tabs-augustIN"
                          aria-labelledby="augustIN-tab"
                        >
                          <div className="row ">
                            <div className="col-md-6">
                              <div className="selectedDate_card">
                                <div className="selectedDate_card_head">
                                  <h4 className="selectedDate_card_date mb-0">
                                    08 July 2022
                                  </h4>
                                </div>
                                <div className="selectedDate_card_body">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/morning-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Morning
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                        </p>
                                      </div>
                                    </li>
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/afternoon-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Afternoon
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                          <span>17:00</span>
                                        </p>
                                      </div>
                                    </li>
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/night-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Evening
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                        </p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="selectedDate_card">
                                <div className="selectedDate_card_head">
                                  <h4 className="selectedDate_card_date mb-0">
                                    13 July 2022
                                  </h4>
                                </div>
                                <div className="selectedDate_card_body">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/morning-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Morning
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                        </p>
                                      </div>
                                    </li>
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/afternoon-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Afternoon
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                          <span>17:00</span>
                                        </p>
                                      </div>
                                    </li>
                                    <li className="d-flex align-items-xl-center">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="/night-img.svg"
                                          alt="morning"
                                          className="svg img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="flex-grow-1 mb-1">
                                          Evening
                                        </h4>
                                        <p className="mb-0 d-flex flex-wrap">
                                          <span>12:00</span>
                                          <span>14:00</span>
                                          <span>14:30</span>
                                          <span>15:30</span>
                                          <span>16:00</span>
                                          <span>16:30</span>
                                        </p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="cnt-specIN">
                                                <div class="form-group form-apt">
                                                    <label class="form-label">Select Date & Time</label>
                                                    <div class="row">
                                                        <div class="col-xxl-4 col-md-6">
                                                            <div class="datepicker-inline"></div>
                                                        </div>
                                                        <div class="col-xxl-6 col-md-6 ms-xxl-3">
                                                            <div class="profilePage_contentTime">
                                                                <div class="timeSlot">
                                                                    <div class="d-flex align-items-center day">
                                                                        <img src="<?php echo IMAGES_URL?>/morning-img.svg"
                                                                            alt="morning" class="svg img-fluid">
                                                                        <h4 class="day_name mb-0 ms-1">Morning</h4>
                                                                    </div>
                                                                    <div class="row g-2 row-cols-auto">
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN1"
                                                                                class="position-absolute"
                                                                                id="mrng-specIN1">
                                                                            <label for="mrng-specIN1">07:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN1"
                                                                                class="position-absolute"
                                                                                id="mrng-specIN2">
                                                                            <label for="mrng-specIN2">07:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN1"
                                                                                class="position-absolute"
                                                                                id="mrng-specIN3">
                                                                            <label for="mrng-specIN3">08:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN1"
                                                                                class="position-absolute"
                                                                                id="mrng-specIN4">
                                                                            <label for="mrng-specIN4">08:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN1"
                                                                                class="position-absolute"
                                                                                id="mrng-specIN5" checked>
                                                                            <label for="mrng-specIN5">09:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN1"
                                                                                class="position-absolute"
                                                                                id="mrng-specIN6">
                                                                            <label for="mrng-specIN6">09:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN1"
                                                                                class="position-absolute"
                                                                                id="mrng-specIN7">
                                                                            <label for="mrng-specIN7">10:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN1"
                                                                                class="position-absolute"
                                                                                id="mrng-specIN8">
                                                                            <label for="mrng-specIN8">10:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN1"
                                                                                class="position-absolute"
                                                                                id="mrng-specIN9" disabled>
                                                                            <label for="mrng-specIN9">11:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN1"
                                                                                class="position-absolute"
                                                                                id="mrng-specIN10">
                                                                            <label for="mrng-specIN10">11:30</label>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div class="timeSlot">
                                                                    <div class="d-flex align-items-center day">
                                                                        <img src="<?php echo IMAGES_URL?>/afternoon-img.svg"
                                                                            alt="afternoon" class="svg img-fluid">
                                                                        <h4 class="day_name mb-0 ms-1">Afternoon</h4>
                                                                    </div>
                                                                    <div class="row g-2 row-cols-auto">
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN2"
                                                                                class="position-absolute"
                                                                                id="noon-specIN1">
                                                                            <label for="noon-specIN1">12:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN2"
                                                                                class="position-absolute"
                                                                                id="noon-specIN2">
                                                                            <label for="noon-specIN2">12:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN2"
                                                                                class="position-absolute"
                                                                                id="noon-specIN3">
                                                                            <label for="noon-specIN3">13:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN2"
                                                                                class="position-absolute"
                                                                                id="noon-specIN4">
                                                                            <label for="noon-specIN4">13:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN2"
                                                                                class="position-absolute"
                                                                                id="noon-specIN5">
                                                                            <label for="noon-specIN5">14:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN2"
                                                                                class="position-absolute"
                                                                                id="noon-specIN6">
                                                                            <label for="noon-specIN6">14:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN2"
                                                                                class="position-absolute"
                                                                                id="noon-specIN7">
                                                                            <label for="noon-specIN7">15:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN2"
                                                                                class="position-absolute"
                                                                                id="noon-specIN8">
                                                                            <label for="noon-specIN8">15:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN2"
                                                                                class="position-absolute"
                                                                                id="noon-specIN9">
                                                                            <label for="noon-specIN9">16:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN2"
                                                                                class="position-absolute"
                                                                                id="noon-specIN10">
                                                                            <label for="noon-specIN10">16:30</label>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div class="timeSlot">
                                                                    <div class="d-flex align-items-center day">
                                                                        <img src="<?php echo IMAGES_URL?>/night-img.svg"
                                                                            alt="night" class="svg img-fluid">
                                                                        <h4 class="day_name mb-0 ms-1">Night</h4>
                                                                    </div>
                                                                    <div class="row g-2 row-cols-auto">
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN3"
                                                                                class="position-absolute"
                                                                                id="night-specIN1">
                                                                            <label for="night-specIN1">17:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN3"
                                                                                class="position-absolute"
                                                                                id="night-specIN2">
                                                                            <label for="night-specIN2">17:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN3"
                                                                                class="position-absolute"
                                                                                id="night-specIN3">
                                                                            <label for="night-specIN3">18:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN3"
                                                                                class="position-absolute"
                                                                                id="night-specIN4">
                                                                            <label for="night-specIN4">18:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN3"
                                                                                class="position-absolute"
                                                                                id="night-specIN5">
                                                                            <label for="night-specIN5">19:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN3"
                                                                                class="position-absolute"
                                                                                id="night-specIN6">
                                                                            <label for="night-specIN6">19:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN3"
                                                                                class="position-absolute"
                                                                                id="night-specIN7">
                                                                            <label for="night-specIN7">20:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN3"
                                                                                class="position-absolute"
                                                                                id="night-specIN8">
                                                                            <label for="night-specIN8">20:30</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN3"
                                                                                class="position-absolute"
                                                                                id="night-specIN9">
                                                                            <label for="night-specIN9">21:00</label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <input type="checkbox"
                                                                                name="timeslot-specIN3"
                                                                                class="position-absolute"
                                                                                id="night-specIN10">
                                                                            <label for="night-specIN10">21:30</label>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Selected dates and times -->
                                                <div class="selectedDate">
                                                    <h2 class="selectedDate_subtitle">Selected dates and times</h2>
                                                    <div class="row ">
                                                        <div class="col-md-3">
                                                            <div class="selectedDate_card">
                                                                <div class="selectedDate_card_head">

                                                                    <h4 class="selectedDate_card_date mb-0">08 July 2022
                                                                    </h4>
                                                                </div>
                                                                <div class="selectedDate_card_body">
                                                                    <ul class="list-unstyled mb-0">
                                                                        <li class="d-flex align-items-xl-center">
                                                                            <div class="flex-shrink-0">
                                                                                <img src="<?php echo IMAGES_URL?>/morning-img.svg"
                                                                                    alt="morning" class="svg img-fluid">
                                                                            </div>
                                                                            <div>
                                                                                <h4 class="flex-grow-1 mb-1">
                                                                                    Morning
                                                                                </h4>
                                                                                <p class="mb-0 d-flex flex-wrap">
                                                                                    <span>9:00</span>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                </div>

                <div className="stepbtn d-flex justify-content-between align-items-center">
                  <div>
                    <BackButton
                      path=""
                      linkAction={() => handleNextForm("stepTwo", "stepThree")}
                    >
                      <em className="icon-arrow-back" /> {t("text.common.back")}
                    </BackButton>
                  </div>
                  <CommonButton
                    extraClassName="btn-lg btn-shadow ripple-effect-dark"
                    variant="primary"
                    type="submit"
                  >
                    {t("text.common.next")}
                  </CommonButton>
                </div>
              </fieldset>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default StepThree;
