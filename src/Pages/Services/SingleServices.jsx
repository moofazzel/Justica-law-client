import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import image1 from "../../assets/images/homeCarousel/image1.jpg";

const SingleServices = () => {
  return (
    <div>
      <div className="max-w-sm bg-[#f5f5f5] rounded-[3px] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <Link href="#">
          <PhotoProvider>
            <PhotoView src={image1}>
              <img src={image1} style={{ objectFit: "cover" }} alt="" />
            </PhotoView>
          </PhotoProvider>
        </Link>
        <div className="px-5 py-4 service-info transition-all hover:bg-[#eaa636] hover:text-white">
          <span className="text-[#eaa636] ">Justica Law Firm</span>
          <Link className="no-underline" href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white no-underline">
              Noteworthy technology acquisitions 2021
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>

          {/* <i className="icofont-worker font-icofont"></i> */}

          {/* <img src={worker} alt="" /> */}

          <Link
            href="#"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 rounded-[3px] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-[#eaa636] uppercase no-underline"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
