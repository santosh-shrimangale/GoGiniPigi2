import React from "react";
import { Button } from "react-bootstrap";

function CommonButton({
  extraClassName,
  children,
  variant = "none",
  loading,
  ...rest
}) {
  return (
    <Button
      disabled={loading}
      variant={variant}
      className={`${extraClassName}`}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default CommonButton;
