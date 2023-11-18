import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { CommonButton } from "../../UiElement";
import { Input as TextInput } from "../../Antd";

function TextMessage({ onSubmit, loading }) {
  const initialValues = {
    textMsg: "",
  };
  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {() => {
        return (
          <>
            <Form>
              <div className="form-group mb-0 position-relative">
                <TextInput
                  className="form-control"
                  type="text"
                  name="textMsg"
                />
              </div>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="#">
                    <em className="icon-smile" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <em className="icon-audio" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <CommonButton
                    type="submit"
                    className="btn btn-primary ripple-effect"
                    loading={loading}
                  >
                    <em className="icon-send-message" />
                  </CommonButton>
                </li>
              </ul>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}
export default TextMessage;
