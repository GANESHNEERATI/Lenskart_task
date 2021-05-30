import React from "react";
import "./Help.css";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/Phone";

function Help() {
  return (
    <div className="help">
      <div className="help_top">
        <h2>Looking for Help</h2>
        <div className="help_line"></div>
      </div>
      <div className="help_bottom">
        <div className="bottom_left">
          <p>We are available from Monday to Sunday from 9AM to 8PM.</p>
          <p>please feel free to call us if you have any queries.</p>
        </div>
        <div className="bottom_right">
          <div className="email">
            <div className="email_left">
              <EmailOutlinedIcon fontSize="large" />
            </div>
            <div className="email_right">
              <p>Email Us</p>
              <p>Support@lenskart.com</p>
            </div>
          </div>
          <div className="phone">
            <div className="phone_left">
              <PhoneIcon fontSize="large" />
            </div>
            <div className="phone_right">
              <p>Call Us</p>
              <p>99998 99998</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
