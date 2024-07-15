import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ handletoggle }) => {
  return (
    <>
      <div className="absolute font-roboto lg:hidden z-50 items-start pl-4 pt-4 pb-4  inset-5 top-[4rem] bottom-[20rem]      flex flex-col bg-slate-100 bg-gradient-to-b from-white   text-blue-400 space-y-6">
        <Link to="about" onClick={handletoggle}>
          About Us
        </Link>

        <Link to="service" onClick={handletoggle}>
          Our services
        </Link>
        <Link to="gallery" onClick={handletoggle}>
          Gallery
        </Link>

        <Link to="contact" onClick={handletoggle}>
          Contact us
        </Link>
      </div>
    </>
  );
};

export default Modal;
