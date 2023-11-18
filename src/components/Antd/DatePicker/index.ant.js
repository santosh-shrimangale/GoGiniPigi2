import React from "react";
import { DatePicker as AntDatePicker } from "antd";
import { useField } from "formik";
import { dateFormatter } from "../../../utils";

function DatePicker({
  name,
  icon,
  setFieldValue,
  onSelectChange,
  extraClassName,
  placeholder,
  requiredDateTimeFormat,
  allowClear = false,
  dateFormate = "MM/DD/YYYY",
  ...rest
}) {
  const [field, meta, helpers] = useField(name);

  const config = { ...field, ...rest };
  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  const handleChangeDate = (value) => {
    helpers.setValue(dateFormatter(value, requiredDateTimeFormat));
    helpers.setError("");
    helpers.setTouched(false);
  };

  return (
    <>
      <AntDatePicker
        format={dateFormate}
        allowClear={allowClear}
        {...rest}
        placeholder={placeholder}
        onChange={handleChangeDate}
        suffixIcon={null}
      />
    </>
  );
}

export default DatePicker;
