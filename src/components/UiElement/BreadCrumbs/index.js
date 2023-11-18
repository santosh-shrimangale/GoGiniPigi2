import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ breadcrumb }) {
  return (
    <>
      {breadcrumb && (
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            {breadcrumb.map((item, key) => {
              return item.path !== "#" ? (
                <li className="breadcrumb-item" key={key}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ) : (
                <li className="breadcrumb-item active" key={key}>
                  {item.name}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
}
