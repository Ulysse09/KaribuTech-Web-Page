import React from "react";
import ship2 from "../assets/ship2.jpg";
import air from "../assets/air.jpg";
import trucks from "../assets/trucks.jpg";
import PhotoAlbum from "react-photo-album";
import RoadRender from "../assets/RoadRender.png";
import { FaRoad } from "react-icons/fa";
const Gallery = () => {
  const photos = [
    {
      width: 500,
      src: trucks,
      height: 500,
    },
    {
      width: 500,
      src: air,
      height: 500,
    },
     
    {
      width: 500,
      src: RoadRender,
      height: 500,
    },
  ];
  return (
    <>
      {/* header image */}
      <div className="backgroundImage2 -z-10 bg-cover bg-top relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="lg:pt-52 pt-34  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold  w-100 h-16 text-6xl mt-4">
                Gallery
              </h1>
            </span>
            <span>
              <p className=" text-white text-xl lg:text-2xl font-light font-roboto mt-4">
                Connecting Continents, Fast-tracking Success
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <PhotoAlbum photos={photos} layout="columns" columns={3} />
      </div>
    </>
  );
};

export default Gallery;
