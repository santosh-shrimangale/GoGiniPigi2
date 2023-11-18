import React, { useState } from "react";

function CustomChecked({ label, handleClick, onChange }) {
  const [isChecked, setIsChecked] = useState(true);

  const onHandleChange = (e) => {
    setIsChecked(!isChecked);
    handleClick(e.target.name);
  };

  return (
    <>
      <input
        // name={label}
        className="form-check-input"
        id="check06"
        type="checkbox"
        onChange={onHandleChange || onChange}
        value={isChecked || ""}
      />
      <label htmlFor="check01" className="form-check-label mb-0" value>
        {label}
      </label>
    </>
  );
}

export default CustomChecked;
