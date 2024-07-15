import logo from "../../assets/Blue1.png";
import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const Nav = () => {
  //change nav color when scrolling
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const handletoggle = () => {
    return setOpenModal(!openModal);
  };

  return (
    <>
      <nav
        className={
          isScrolled
            ? `nav-scrolled flex    items-center p-2 w-full lg:fixed   text-white z-10  lg:px-[10rem] justify-between`
            : `flex   items-center p-2 w-full lg:fixed   text-white z-10  lg:px-[10rem] justify-between`
        }
      >
        <Link to={"/"}>
          <img src={logo} alt="" className="h-[8vh]    rounded-full" />
        </Link>
        <div className="lg:flex hidden  items-center space-x-4 justify-between   ">
          <ul className="flex font-roboto font-semibold space-x-4 ">
            <Link
              to={"/"}
              className="hover:border-2 border-b-blue-500 p-2 transition-all duration-100"
            >
              Home
            </Link>
            <Link
              to={"about"}
              className="hover:border-2 border-b-blue-500 p-2 transition-all duration-100"
            >
              About
            </Link>
            <Link
              to={"careers"}
              className="hover:border-2 border-b-blue-500 p-2 transition-all duration-100"
            >
              Careers
            </Link>
            <Link
              to={"gallery"}
              className="hover:border-2 border-b-blue-500 p-2 transition-all duration-100"
            >
              Gallery
            </Link>
            <Link
              to={"contact"}
              className="hover:border-2 border-b-blue-500 p-2 transition-all duration-100"
            >
              Contact
            </Link>
          </ul>
        </div>

        <div className="space-x-4 items-center lg:flex hidden">
          <p className="px-4 py-2 bg-blue-400 text-white font-roboto  ">
            Contact us
          </p>
        </div>

        <div className="lg:hidden text-4xl text-black " onClick={handletoggle}>
          {openModal ? <IoMdClose /> : <BiMenuAltRight />}
        </div>

        {/* navigation modal */}

        {openModal && <Modal handletoggle={handletoggle} />}
      </nav>
    </>
  );
};
export default Nav;
