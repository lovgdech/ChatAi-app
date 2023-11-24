import React from "react";
import classnames from "classnames/bind";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import style from "./MainNavigation.module.scss";
import WrapperBox from "../UI/WrapperBox";

const cx = classnames.bind(style);

function MainNavigation() {
  const links = [
    {
      path: "/product",
      title: "Product",
      data: [],
    },
    {
      path: "/solution",
      title: "Solution",
      data: [],
    },
    {
      path: "/template",
      title: "Template",
      data: [],
    },
    {
      path: "/pricing",
      title: "Pricing",
    },
    {
      path: "/enterprise",
      title: "Enterprise",
    },
    {
      path: "/resources",
      title: "Resources",
      data: [],
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <WrapperBox classname={cx("content")}>
        <Link to="/" className={cx("logo")}>
          <img
            src="https://assets-global.website-files.com/59deb588800ae30001ec19c9/5d0bc991c864410c5ad87931_logo-new.svg"
            alt=""
          />
        </Link>

        <nav className={cx("nav-list")}>
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? cx("active") : "")}
                  end
                >
                  <p>{link.title}</p>
                  {link.data && <FontAwesomeIcon icon={faChevronDown} />}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={cx("auth-btns")}>
          <button>
            <Link to="/login">Login</Link>
          </button>

          <button>
            <Link to="/pricing">Get Started</Link>
          </button>
        </div>
      </WrapperBox>
    </div>
  );
}

export default MainNavigation;
