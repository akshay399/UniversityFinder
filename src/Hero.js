import React from "react";
import "./Hero.css";
import SmallCard from "./Smallcard";
const Hero = (props) => {
  const { handleLogout } = props;
  return (
    <div>
      <div className="heroPage">
        <div className=" container buttonwala">
          <button className="heroButton" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className=" container linksForSwipe">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <SmallCard link="/register" line="Fill Form" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <SmallCard line="Check Out Colleges" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
