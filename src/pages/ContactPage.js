import React from "react";
import ContactItem from "../components/ContactItem";
import Title from "../components/Title";
import phone from "../images/phone.svg";
import email from "../images/emailme.svg";
import location from "../images/location.svg";

const ContactPage = () => {
  return (
    <div>
      <div className="contact-title">
        <Title title={"Contact"} span={"Contact"} />
      </div>

      <div className="contact-page">
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10266.56531745918!2d105.84155879590429!3d21.00698312429367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1623380162055!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            tabIndex="0"
            title="Hanoi map"
          ></iframe>
        </div>

        <div className="contact-section">
          <ContactItem icon={phone} text1={"+84 34 205 1698"} title={"Phone"} />
          <ContactItem
            icon={email}
            text1={"bachnghianguyen@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"No. 4, Alley 354/7, Le Duan St, Dong Da District"}
            text2={"Hanoi, Vietnam"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
