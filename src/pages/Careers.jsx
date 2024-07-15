import truck from "../assets/truck.jpg";
import ship from "../assets/ship.jpg";
import plane from "../assets/plane.jpg";
import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import customs from "../assets/customs.jpg";
import warehouse from "../assets/warehouse.jpg";
import pack from "../assets/package.jpg";
import { IoCheckbox } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
import Accordion2 from "../components/Accordion2/Accordion2";

const Careers = () => {
  return (
    <>
      <div className="backgroundImage1  -z-10 bg-cover bg-center relative  ">
        <div className=" -z-20  overlay" />
        <div className="pb-[10rem] pt-[5rem]    ">
          <div className=" w-3/4 h-72 mx-auto flex flex-col items-center pt-24 text-center  ">
            <h1 className=" pb-10 text-white text-[2.7rem] z-50 font-bold  w-100 h-16 text-6xl mt-4">
              Why Psyred
            </h1>

            <p className=" text-white max-w-2xl text-left text-xl lg:text-2xl font-light font-roboto mt-4">
              We are a team of Stanford engineers, DARPA Grand Challenge
              winners, IDEO and Volkswagen alums, NASA roboticists, 3D printer
              designers, and pioneering software developers.
            </p>
          </div>
        </div>
      </div>

      {/* header text  */}

      <div className=" w-full   ">
        <div className="md:flex font-roboto justify-center lg:px-[5rem] px-[2rem] pt-[1rem] pb-[4rem] bg-slate-100 space-y-10 lg:space-y-0        ">
          <div className="    ">
            <p className="font-light    lg:text-md max-w-3xl     text-lg ">
              We’re also ardent kite surfers, mountain bikers, professional rock
              climbers, competitive dancers, surfers, and award winning pilots.
              If you have a track record of achievement, innovation, initiative,
              and a demonstrated passion for what we do, we’d love to get to
              know you. You can expect the unusual experience of working on a
              product that pushes that limits of what’s possible and contributes
              to national security, working with a team who will push you to go
              beyond your previous standards of excellence, and sharing in a
              culture with a fast pace, zero politics, and mutual respect. We
              are an equal opportunity employer who seeks to build a diverse
              team with a respect for all backgrounds, races, creeds, and
              orientations
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full   ">
        <div className="md:flex flex-col font-roboto justify-start lg:px-[18rem] px-[4rem] pt-[2rem] pb-[4rem] bg-white space-y-10 lg:space-y-0  mb-[3rem]      ">
          <h2 className="font-bold lg:text-md max-w-3xl      text-3xl ">
            Current open Position
          </h2>
          <div className="pt-[5rem]">
            <Accordion2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
