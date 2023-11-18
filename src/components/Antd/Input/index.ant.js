import { Form } from "antd";
import { useField } from "formik";

function Input({
  name,
  icon,
  setFieldValue,
  validation = true,
  formItemClass = "",
  ...rest
}) {
  const [field, meta] = useField(name);
  const config = { ...field, ...rest };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return (
    <>
      {validation ? (
        <Form.Item
          className={formItemClass || null}
          help={meta.error && meta?.error && meta?.touched ? meta.error : ""}
          validateStatus={config.error ? "error" : "success"}
        >
          {icon}
          <input {...field} {...rest} />
        </Form.Item>
      ) : (
        <>
          {icon}
          <input type="text" {...field} {...rest} />
        </>
      )}
    </>
  );
}

export default Input;
