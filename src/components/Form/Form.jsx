import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (name && email && text && subject) {
      axios
        .post("https://blu-channel-backend.onrender.com/send-email", {
          email,
          name,
          subject,
          text,
        })
        .then(() => {
          toast.success("Email sent succesfully");
          console.log("Email sent succesfully");
          setEmail("");
          setName("");
          setSubject("");
          setText("");
        })
        .catch((error) => {
          console.error("Error sending email", error);
          toast.error("Error sending email");
        });
    } else return toast.error("Fill in the fields correctly");
  };

  return (
    <>
      <ToastContainer />
      <div className=" relative flex justify-center ">
        <div className=" bg-white rounded-xl  flex flex-col md:flex-row absolute lg:w-[75%] md:w-[75%] w-[90%] mt-[-52rem] top-[40rem]    lg:top-[42rem] mx-auto md:top-[55rem] py-[2rem] md:pb-[rem] pb-[3rem] item-center">
          <form className="flex flex-col items-center px-8 py-0  w-full space-y-10  ">
            <h2 className=" text-3xl font-semibold font-roboto   text-center">
              Join our Newsletter
            </h2>
            <p className="lg:max-w-xl text-center max-w-sm ">
              Many desktop publishing packages and web editors now use their
              default model text, many web in their infancy various versions.
            </p>

            <div className="flex   lg:w-[430px]  ">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                className=" outline-none border-2 border-sky-900 border-r-0 rounded-l-md    w-full transition-colors duration-300  p-4    px-3 py-3  "
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <button
                onClick={(e) => handleSubmit(e)}
                className="  bg-[#055589] border border-sky-900 w-[150px] py-3 hover:bg-black transition-colors duration-300  text-sm focus:bg-black   text-white font-semibold"
              >
                <p className="text-md ">
                  {isLoading ? "Sending mail..." : "Subscribe"}
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
