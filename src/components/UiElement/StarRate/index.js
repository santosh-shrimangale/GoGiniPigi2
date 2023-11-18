import React from "react";

function StarRate({
  rate,
  containerExtraClassname = "flex-wrap",
  liClassName = "d-inline",
  children,
}) {
  const rating = (i) => {
    if (i + 1 <= rate) {
      return (
        <li className={liClassName}>
          <span className="icon-star-fill" />
        </li>
      );
    } else if (rate % 1 > 0 && i + 1 <= Math.ceil(rate)) {
      return (
        <li className={liClassName}>
          <span className="icon-star-fill" />
        </li>
      );
    } else {
      return (
        <li className={liClassName}>
          <span className="icon-star" />
        </li>
      );
    }
  };

  return (
    <>
      <div className={`d-flex  ${containerExtraClassname}`}>
        <ul className="list-unstyled mb-0 d-flex">
          {[...new Array(5)].map((item, i) => {
            return rating(i);
          })}
        </ul>
        {children}
      </div>
    </>
  );
}

export default StarRate;
