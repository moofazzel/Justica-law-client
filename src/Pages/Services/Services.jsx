import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/UseTitle";

const Services = () => {

  useTitle("Services")


  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://justica-law-server.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="">
      <div className="service-header text-white text-center h-[250px] flex flex-col justify-center items-center">
        <h1>Practice Areas</h1>
        <span className="block w-56 my-2 mx-auto border-[#ffb43a] border-b-4"></span>
        <p>Reputation. Respect. Result.</p>
      </div>
      <div className=" my-12 text-center">
        <Link
          to={"/add_services"}
          className="inline-flex items-center py-[10px] px-5 text-sm font-medium text-center text-white bg-[#eaa636] rounded-[3px] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-[#eaa636] uppercase no-underline transition-all"
        >
          Add service
        </Link>
      </div>
      <div className="my-16 w-5/6 mx-auto ">
        <div className="flex flex-wrap gap-4 justify-center">
          {service.map((ser) => (
            <div
              key={ser._id}
              className="md:w-[48%] lg:w-[30%] bg-[#f5f5f5] rounded-[3px] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 "
            >
              <div className="no-underline relative" href="#">
                <div className="flex justify-center">
                  <PhotoProvider>
                    <PhotoView src={ser?.image}>
                      <img
                        src={ser?.image}
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
                <span className="absolute top-3 left-2 bg-[#eaa636] text-white font-bold px-2 py-1 rounded-[3px]  ">
                  {ser?.price}
                </span>
              </div>
              <Link to={ser?._id} className="no-underline">
                <div className="px-5 py-4 service-info transition-all hover:bg-[#eaa636] hover:text-white">
                  <small className="text-[#eaa636] ">Justica Law Firm</small>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white no-underline">
                    {ser?.serviceName}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                    {ser?.description?.slice(0, 60)}...
                  </p>

                  <button
                    to={ser?._id}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 rounded-[3px] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-[#eaa636] uppercase no-underline"
                  >
                    Read more
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Add services  */}
    </div>
  );
};

export default Services;
