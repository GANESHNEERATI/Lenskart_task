import React from "react";
import "./Banner.css";
import Logo from "../Assets/mirzapur_logo.png";

import Amazon from "../Assets/Prime_Video_Logo.png";

function Banner() {
  return (
    <div className="banner">
      <div className="bannerInfo1">
        <div className="bannerInfo1__left">
          <div className="bannerInfo__left__container">
            <h5 style={{ textAlign: "center" }}>PRIME ORIGINAL</h5>
            <img src={Logo} alt="logo" />
            <div className="bannerInfo__left__container_bottom">
              <p>
                STREAM <span className="now_span">NOW</span>
              </p>
              <div className="bannerInfo__left__container_bottom__line"></div>
              <img src={Amazon} alt="amazon_prime" />
            </div>
          </div>
        </div>
        <div className="bannerInfo1__middle"></div>
        <div className="bannerInfor__right">
          <p>MIRZAPUR INSPIRED SUNGLASSES</p>
          <img
            src="https://pngimg.com/uploads/sunglasses/sunglasses_PNG95.png"
            alt="glassess"
          ></img>
        </div>
      </div>
      <div className="bannerInfo2">
        <p>Shop the collection today and 20 lucky winners per day to win</p>
        <p style={{ textAlign: "center", marginTop: 3 }}>
          {" "}
          Amazon Fire TV Stick
        </p>
        <button> View Collection</button>
      </div>
    </div>
  );
}

export default Banner;
