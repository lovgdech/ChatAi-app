import React from "react";
import classnames from "classnames/bind";

import style from "./WrapperBox.module.scss";
const cx = classnames.bind(style);

function WrapperBox({ classname, onClick, children }) {
  return <div className={`${cx("wrapper")} ${classname}`}>{children}</div>;
}

export default WrapperBox;
