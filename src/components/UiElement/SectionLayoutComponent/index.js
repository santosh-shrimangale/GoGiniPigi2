import React from "react";

function SectionLayoutComponent({ extraClassName, children }) {
  return (
    <section className={`${extraClassName}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export default SectionLayoutComponent;
