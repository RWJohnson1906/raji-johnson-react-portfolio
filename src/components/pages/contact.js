import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/contact/project_contact_image.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-mobile-screen" bounce />
            </div>

            <div className="text">704-402-6316</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-envelopes-bulk" bounce />
            </div>

            <div className="text">rjohnson1906@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="city" bounce />
            </div>

            <div className="text">Jacksonville, FL</div>
          </div>
        </div>
      </div>
    </div>
  );
}