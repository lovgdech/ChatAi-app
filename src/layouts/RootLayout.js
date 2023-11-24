import React from "react";
import { Outlet } from "react-router-dom";
import classnames from "classnames/bind";

import style from "./styles.module.scss";
import MainNavigation from "../components/root/MainNavigation";
import Footer from "../components/root/Footer";
const cx = classnames.bind(style);

function RootLayout() {
  return (
    <div className={cx("wrapper")}>
      <MainNavigation />
      <main className={cx("content")}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
