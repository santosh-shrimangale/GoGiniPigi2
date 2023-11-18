import React from "react";
import { Checkbox as AntCheckbox, Form } from "antd";
import { useField } from "formik";

function CheckboxGroup({
  Children,
  options = [],
  label = "",
  name,
  defaultValue,
  setFieldValue,
  ...rest
}) {
  const [field, meta, helpers] = useField(name);
  const config = { ...field, ...rest };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  const onChange = (value) => {
    helpers.setValue(value);
  };

  return (
    <Form.Item
      className="selectComponent"
      label={label}
      help={meta.error && meta?.error && meta?.touched ? meta.error : ""}
      validateStatus={config.error ? "error" : "success"}
    >
      <AntCheckbox.Group
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        {...field}
        {...rest}
      />
    </Form.Item>
  );
}

export default CheckboxGroup;
