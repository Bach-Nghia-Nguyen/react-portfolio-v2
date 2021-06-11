import React from "react";

const ContactItem = ({ icon, text1, text2, title }) => {
  return (
    <div className="contact-item">
      <div className="contact">
        <img src={icon} alt="Contact icon" />
        <div className="right-items">
          <h6>{title}</h6>
          {title === "Email" ? (
            <p>
              {" "}
              <a className="email-address" href={`mailto:${text1}`}>
                {text1}
              </a>{" "}
            </p>
          ) : (
            <p>{text1}</p>
          )}

          <p>{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
