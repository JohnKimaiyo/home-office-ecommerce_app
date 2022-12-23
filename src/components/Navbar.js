import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbox">
      <div className="leftside">
        <img
          src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/11/23065530/ecommerce-1992280_960_720-300x225.png"
          alt=""
        />
      </div>
      <div className="rightside">
        <Link to="/signup">SIGN UP</Link>
        <Link to="/login" className="navlink">
          LOGIN
        </Link>
      </div>
      <h1>Navbar</h1>
    </div>
  );
};
