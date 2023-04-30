import React from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const home = `< HOME`;
  return (
    <div className="errorDiv">
      <Link to={"/"}>
        <button className="backList">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{home}
        </button>
      </Link>
      <div className="errorGlitch">
        <p className="errorGlitch__ERROR" >ERROR</p>
        <p className="errorGlitch__404" >404</p>
        <p className="errorGlitch__NOTFOUND" >PAGE NOT FOUND</p>
      </div>
    </div>
  );
};

export default ErrorPage;
