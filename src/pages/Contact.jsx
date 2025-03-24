import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Form from "../components/Form2/Form2";

const Contact = () => {
  return (
    <>
 

      {/* contact form  */}
      <Form />

      {/* embedded map  */}
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15949.846923851153!2d30.107238399999996!3d-1.9693568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1722002073419!5m2!1sen!2srw"
          width="w-full"
          height="450"
          className="w-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>  
      </div>
    </>
  );
};

export default Contact;
