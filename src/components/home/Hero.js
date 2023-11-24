import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

import style from "./Hero.module.scss";
import WrapperBox from "../UI/WrapperBox";
import ChatAi from "./ChatAi";
const cx = classnames.bind(style);

const titleArray = ["amazing", "simple", "stunning", "beautiful"];

function Hero() {
  const [title, setTitle] = useState("beautiful");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < titleArray.length) {
        setTitle(titleArray[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setTitle(titleArray[0]);
        setIndex(1);
      }
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <div className={cx("wrapper")}>
      <WrapperBox classname={cx("content")}>
        <div className={cx("title")}>
          <p>
            Introducing generative ai presentation software for the workplace
          </p>
          <h3>
            It's <span>{title}</span> what you can do <br /> with a little
            <span> ai </span>.
          </h3>

          <button>
            <Link to="/register">Sign up now</Link>
          </button>
        </div>
        <ChatAi />
        <div className={cx("bottom")}>
          <h3>Ready to transform your presentations?</h3>
          <button>
            <Link to="/pricing">Get started</Link>
          </button>
        </div>
      </WrapperBox>
    </div>
  );
}

export default Hero;
