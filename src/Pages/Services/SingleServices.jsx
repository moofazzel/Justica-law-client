import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import image1 from "../../assets/images/homeCarousel/image1.jpg";

const SingleServices = ({ ser }) => {
  const { _id, description, image, price, serviceName } = ser;

  return (
    <>
      <div className="w-[30%] bg-[#f5f5f5] rounded-[3px] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div className="no-underline relative" href="#">
          <PhotoProvider>
            <PhotoView src={image}>
              <img src={image} style={{ objectFit: "cover" }} alt="" />
            </PhotoView>
          </PhotoProvider>
          <span className="absolute top-3 left-2 bg-[#eaa636] text-white font-bold px-2 py-1 rounded-[3px]  ">
            {price}
          </span>
        </div>
        <Link to={`services/${_id}`} className="no-underline">
          <div className="px-5 py-4 service-info transition-all hover:bg-[#eaa636] hover:text-white">
            <small className="text-[#eaa636] ">Justica Law Firm</small>
            
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white no-underline">
                {serviceName}
              </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
              {description.slice(0,60)}...
            </p>
          
            <button
              to={`services/${_id}`}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 rounded-[3px] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-[#eaa636] uppercase no-underline"
            >
              Read more
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleServices;
