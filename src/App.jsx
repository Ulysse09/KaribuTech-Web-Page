import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./assets/tai.png";
import yellow from "./assets/10001.jpeg";
import black from "./assets/10002.jpeg";
import red from "./assets/10004.jpeg";
import truck from "./assets/truck.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import plane from "./assets/plane.jpg";
import ship from "./assets/ship.jpg";
import ship2 from "./assets/ship2.jpg";
import air from "./assets/air.jpg";
import trucks from "./assets/trucks.jpg";
import Nav from "./components/Navbar/Nav";
import customs from "./assets/customs.jpg";
import warehouse from "./assets/warehouse.jpg";
import pack from "./assets/package.jpg";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import { Link } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import drone from "./assets/drone.mp4";
import ydrone from "./assets/ydrone.png";
import robot from "./assets/robot.jpg";
import gen from "./assets/gen.png";

import { FaPlus } from "react-icons/fa";
// import Accordion from "./components/Accordion/Accordion";
import Accordion from "./components/Accordion/Accordion";
import roboy from "./assets/roboy.png";
import arm from "./assets/arm.png";

// import { l } from "vite/dist/node/types.d-FdqQ54oU";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleMouseEnter = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };
  const handleMouseEnterLeave = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  const slide = [
    {
      text: "Beyond Automation, The Art and Science of Robotic Arms",
      pic: air,
    },
    {
      text: "Exploring the Latest in Robotic Arm Technology",
      pic: trucks,
    },

    {
      text: "From Assembly Lines to Precision Partners",
      pic: ship2,
    },
  ];

  return (
    <>
      <div className="relative     ">
        <div
          className="lg:h-[100vh]    "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseEnterLeave}
        >
          <video
            id="myVideo"
            className="object-cover brightness-50  w-full lg:h-[100vh] h-[70vh]"
            autoplay={isPlaying}
            loop
            muted
            ref={videoRef}
          >
            <source src={drone} type="video/mp4" />
          </video>

          <div className="md:flex font-roboto lg:top-[28rem] top-10 fadeInDown text-white absolute lg:px-[5rem] px-[2rem] space-y-10 lg:space-y-0  lg:mb-[7rem] justify-between items-center    ">
            <div className=" lg:w-1/2 space-y-[1rem] lg:space-y-[0rem]   ">
              <p className="font-semibold border-l-4 border-l-blue-800 pl-2 lg:text-4xl     text-3xl ">
                THE MOST ADVANCED MULTI-APPLICATION SOLUTION
              </p>

              <p className="mt-[1.2rem] lg:max-w-lg max-w-sm text-xl">
                Blue Channel Logistics is Rwanda's world leading logistic
                service company and transporting Solution.
              </p>
            </div>
            <div className="lg:w-1/2    ">
              <p className="max-w-2xl ">
                Cargo Hub is the world’ s leading logistic service company, We
                have a wide experience in overland industry specific logistic
                solutions like pharmaceutical logistics, retail and automotive
                logistics by train or road. We bring your goods safely to
                worldwide destinations with our great sea fright services.We
                offer LLC and FLC shipments that are fast and effective with no
                delays.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About us */}
      <div className="  flex justify-center lg:items-center flex-col         lg:space-y-0   space-y-[3rem]    ">
        <div className=" bg-sky-100 hover:border-blue-300 hover:border-2 hover:transition-colors duration-300  rounded-2xl my-[4rem] lg:my-[8rem] lg:h-[80vh]  shadow-md">
          <div className="flex lg:flex-row  flex-col space-y-20 lg:items-center px-[2rem]  lg:space-x-[5rem] lg:container lg:mx-auto">
            <div className="lg:w-[40vw] md:w-[80vw]  lg:p-[5rem]   lg:space-y-4  ">
              <img src={robot} className="rounded-lg" alt="" />
              <p className="font-semibold text-[#3A3A3A]  lg:text-left md:text-right text-center py-4 lg:py-0">
                Rwanda's trusted logistic partner{" "}
              </p>
            </div>
            <div className="space-y-3  flex-col flex lg:items-start items-center   ">
              <div className="flex flex-col mb-14 mt-0  lg:items-start items-center space-y-8">
                <h2 className="text-5xl text-black lg:text-left text-center font-semibold font-roboto ">
                  Who Are We?
                </h2>
                <p className=" lg:max-w-md max-w-xl text-center md:text-left font-roboto font-light  ">
                  <span className="text-sky-900 font-bold">
                    Blue Channel Logistics
                  </span>{" "}
                  is your trusted partner for efficient and reliable cargo
                  transportation solutions across Rwanda and beyond. Based in
                  Kigali, we offer a comprehensive range of logistics services
                  to empower businesses of all sizes to achieve their goals.
                </p>
                <div className="lg:pb-20 flex justify-center  md:pb-20 pb-6">
                  <Link
                    to={"about"}
                    className=" px-10 py-3 md border-2 border-[#03396C]  hover:text-white transition text-[#03396C] hover:bg-[#03396C]  rounded-full "
                  >
                    Know more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our services */}
      <div className=" w-full pt-[4rem] bg-slate-200 bg-gradient-to-br from-white">
        <div className=" text-center flex-col items-center flex space-y-4">
          <h1 className="text-2xl">Our services</h1>
          <h2 className="text-4xl font-bold">
            Peak performance system services
          </h2>
          <h3 className="max-w-lg ">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor aenean mass.
          </h3>
        </div>

        <div className="md:flex justify-evenly  lg:px-[0rem] px-[0.5rem] space-y-4 lg:space-y-0 mt-[4rem]   md:h-[18rem]">
          <div className=" font-roboto  flex flex-col-reverse md:flex-row  justify-between md:w-[55vw] text-white border border-slate-50 bg-gradient-to-br  from-black bg-sky-900 rounded-xl pl-6 md:h-[20rem]">
            <div className="lg:w-[35vw]  ">
              <h1 className="lg:mt-[2rem] text-center  text-white text-3xl font-bold">
                Robotic arm intergration
              </h1>
              <p className="mt-[1.2rem] pb-[2rem] max-w-lg text-lg text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus optio hic vel reiciendis deserunt veniam recusandae
                facilis aliquid, culpa animi facere dolore quasi illo, ex
                doloremque, minima fuga sequi voluptatem!
              </p>
            </div>
            <div className="mt-8">
              <img src={roboy} className="h-[20rem]" alt="" />
            </div>
          </div>
          <div className=" font-roboto   lg:flex-row  flex-col flex items-center lg:items-start pt-8    md:w-[35vw] text-white border border-slate-50  bg-gradient-to-br from-black bg-sky-900 rounded-xl pl-6 md:h-[20rem]">
            <div className="lg:w-[18vw]   ">
              <h1 className="  text-white text-3xl font-bold">
                Robotic resources
              </h1>
              <p className="mt-[1.2rem] max-w-sm text-lg text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <img
              src={ydrone}
              className="lg:h-[18rem] lg:w-[10rem]  pt-4    "
              alt=""
            />
          </div>
        </div>

        <div className="md:flex justify-evenly lg:px-[2rem] px-[0.5rem] space-y-[2rem] lg:space-y-0  mt-[4rem] flex-row-reverse  md:h-[20rem]">
          <div className=" lg:flex relative  font-roboto justify-between md:w-[55vw] text-white border border-slate-50 bg-gradient-to-br from-black bg-sky-900 rounded-xl pl-6 md:h-[20rem]">
            <div className="lg:w-[35vw] ">
              <h1 className="mt-[2rem]  text-white text-3xl font-bold">
                Robotic arm intergration
              </h1>
              <p className="mt-[1.2rem] max-w-lg text-lg text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus optio hic vel reiciendis deserunt veniam recusandae
                facilis aliquid, culpa animi facere dolore quasi illo, ex
                doloremque, minima fuga sequi voluptatem!
              </p>
            </div>

            <div className="lg:mt-24 lg:absolute lg:left-[30rem] lg:top-[-4rem] ">
              <img src={arm} className=" h-[18rem]" alt="" />
            </div>
          </div>
          <div className="relative font-roboto md:w-[35vw] text-white border border-slate-50 bg-gradient-to-br from-black bg-sky-900 rounded-xl pl-6 md:h-[20rem]">
            <div className="lg:w-[35vw] ">
              <h1 className="mt-[2rem]   text-white text-3xl font-bold">
                Robotic resources
              </h1>
              <p className="mt-[1.2rem] max-w-sm text-lg text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <img
              src={gen}
              className="lg:h-[13rem]  lg:absolute lg:left-[10rem]"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-200 bg-gradient-to-b from-white  text-black">
        {/* Why choose us */}
        <h1 className="font-roboto text-center text-4xl    font-bold pt-[10rem]">
          Why choose us
        </h1>
        <div className="md:flex font-roboto  xl:justify-evenly h-full w-full gap-2 p-5 xl:pr- xl:pl-20 transition duration-500">
          <div className="group p-5 md:w-[70rem]    hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
            <div className="bg-sky-900 hover:bg-black transition-colors duration-300   w-24 h-24 rounded-full flex items-center justify-center mt-6  ml-auto mr-auto ">
              <IoIosTimer className="text-white text-5xl    transition-colors duration-500 delay-150 " />
            </div>
            <h2 className="-200 mt-5 flex justify-center font-semibold text-xl">
              24 Hour Support
            </h2>
            <p className=" mt-14 ml-2">
              Avoid confined spaces entry and work at height during visual
              inspections.
            </p>
          </div>
          <div className=" group p-5 md:w-[70rem]    border-gray-400 rounded-lg     mt-3 transition-colors duration-500 delay-200">
            <div className="bg-sky-900    hover:bg-black w-24 h-24 transition-colors duration-300  rounded-full flex items-center justify-center ml-auto mr-auto mt-6">
              <RiGlobalLine className="text-white text-5xl  delay-200" />
            </div>
            <h2 className=" mt-5 flex justify-center font-semibold text-xl">
              Global supply chain
            </h2>
            <p className=" mt-14 ml-2">
              To be a well-established digital fabrication company in Rwanda
              that is able to meet customers needs and deliver on time.
            </p>
          </div>
          <div className="group p-5 md:w-[70rem]   border-gray-400 rounded-lg    mt-3 transition-colors duration-500 delay-200">
            <div className="hover:bg-black bg-sky-900 transition-colors duration-300    flex items-center justify-center w-24 h-24 rounded-full ml-auto mr-auto mt-6">
              <MdDeliveryDining className="text-white text-5xl  transition-colors duration-500 delay-200" />
            </div>
            <h2 className=" mt-5 flex justify-center font-semibold text-xl">
              Time on Delivery
            </h2>
            <p className=" mt-14 ml-2">
              Turn days of asset downtime into hours.
            </p>
          </div>
        </div>

        <div className="lg:pb-20 flex justify-center  md:pb-20 pb-6">
          <Link
            to={"about"}
            className=" px-10 py-3 md border-2 border-[#03396C]  hover:text-white transition text-[#03396C] hover:bg-[#03396C]  rounded-full "
          >
            Know more
          </Link>
        </div>
      </div>

      {/* faq */}
      <div className="flex lg:flex-row flex-col mb-10  items-center ">
        <div className="flex  lg:w-1/2   text-center pt-[2rem] lg:text-left  lg:p-[8rem]">
          <div className="space-y-4 lg:pb-[8rem]">
            <h2 className="text-5xl font-bold">FAQ</h2>
            <p className="font-light text-3xl lg:max-w-lg">
              Answers to some questions you might have.{" "}
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 px-14 mt-[3rem]">
          <Accordion />
        </div>
      </div>

      {/* News & insight */}
      <div className="bg-black bg-gradient-to-b  from-slate-50 pt-[4rem] pb-[16rem]   ">
        <div className="mx-auto text-3xl font-bold text-center  ">
          News & Insight
        </div>
        <h1 className="font-roboto text-center lg:text-4xl text-2xl mx-auto lg:max-w-2xl max-w-xl  font-bold my-[4rem]">
          The latest news and insights in the field of Ai Robotic
        </h1>
        <div className="md:flex font-roboto xl:justify-evenly h-full w-full gap-2 p-5 xl:pr- xl:pl-20 transition duration-500">
          {slide.map((item, index) => {
            return (
              <div
                key={index}
                className="group bg-gradient-to-br  from-black bg-sky-900 text-white p-5 md:w-[70rem] border border-gray-400 rounded-3xl  hover:border-2 hover:border-blue-900   mt-3 transition-colors duration-500 delay-200"
              >
                <div className="  bg-contain    h-[40vh] rounded-3xl flex items-center justify-center mt-6 mx-auto  ">
                  <img src={item.pic} alt="" className="rounded-lg" />
                </div>
                <h2 className=" mt-2 max-w-xs  flex justify-start font-bold text-2xl">
                  {item.text}
                </h2>
                <p className=" mt-14  flex  space-x-4 font-semibold">
                  <div>
                    by <span className="text-sky-100">John doe</span>
                  </div>
                  <div>Jan 28 2024</div>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* contact form  */}
      <Form />
    </>
  );
}

export default App;
