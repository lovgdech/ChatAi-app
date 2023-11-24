import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

import style from "./Section.module.scss";
import WrapperBox from "../UI/WrapperBox";
import Button from "../UI/Button";

const cx = classnames.bind(style);

function Section({
  title,
  paragraph,
  videoUrl,
  buttonContent,
  imageUrl,
  bgColor,
  color,
}) {
  return (
    <div
      className={cx("wrapper")}
      style={{
        backgroundColor: bgColor ? bgColor : "inherit",
        color: color ? color : "inherit",
      }}
    >
      <WrapperBox classname={cx("content")}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        {buttonContent && (
          <Button>
            <Link href="slide-teamplates">{buttonContent}</Link>
          </Button>
        )}
      </WrapperBox>
      <div className={cx("media")}>
        {videoUrl ? (
          <video autoPlay loop muted height="auto">
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img src={imageUrl} alt="" />
        )}
      </div>
    </div>
  );
}

export default Section;
