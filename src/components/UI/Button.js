import React from "react";
import classnames from "classnames/bind";

import style from "./Button.module.scss";
const cx = classnames.bind(style);

function Button({ onClick, classname, children }) {
  return (
    <button onClick={onClick} className={`${cx("button")} ${classname}`}>
      {children}
    </button>
  );
}

export default Button;
