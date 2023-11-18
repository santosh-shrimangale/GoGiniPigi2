import React from "react";
import { Button } from "react-bootstrap";

function CommonMoreButton({ children, loading, variant = "none", ...rest }) {
  return (
    <div>
      <Button
        disabled={loading}
        variant={variant}
        className="readmore d-flex align-items-center justify-content-center position-relative readmore-left border-0"
        {...rest}
      >
        <span>{children}</span> <em className="icon-arrow-right" />
      </Button>
    </div>
  );
}

export default CommonMoreButton;
