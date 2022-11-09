import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import image1 from "../../assets/images/homeCarousel/image1.jpg";
import image2 from "../../assets/images/homeCarousel/image2.jpg";
import exp from "../../assets/images/exp.jpg";
import Exp from "../../components/Exp";
import Teams from "../../components/Teams";
import Carousel from "react-bootstrap/Carousel";
import SingleServices from "../Services/SingleServices";

const Home = () => {
  const allData = useLoaderData();

  return (
    <div>
      {/* Carasoul start  */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Carasoul end  */}

      <div className="bg-yellow-400 text-white py-9">
        <div className="w-5/6 mx-auto lg:flex text-center justify-between items-center ">
          <h3 className="text-2xl font-semibold mb-6 lg:mb-0">
            Now! Get a Free Consultation for Your Case.
          </h3>
          <Link
            className="text-xs font-bold text-white no-underline bg-[#111] tracking-widest uppercase py-3 px-8"
            href="#"
          >
            Make Appointment
          </Link>
        </div>
      </div>

      {/* service */}

      <div className="bg-[#111111] py-20 pb-36">
        <div className=" w-5/6 mx-auto md:flex md:gap-10 lg:gap-36 ">
          <div className="">
            <span className="text-yellow-400 uppercase text-xl md:text-xs font-bold">
              Welcome
            </span>
            <br />
            <h2 className="text-white text-4xl font-semibold">
              Reputation. <br /> Respect. Result.
            </h2>
            <hr className="w-2/4 my-4 md:my-5 border-yellow-400 border-2" />
          </div>
          <div className=" text-white md:w-[55%] ">
            <p>
              Consequat occaecat ullamco amet non eiusmod nostrud dolore irure
              incididunt est duis anim sunt officia. Fugiat velit proident
              aliquip nisi incididunt nostrud exercitation proident est nisi.
              Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud
              sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim
              anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu
              exercitation irure Lorem incididunt nostrud.
            </p>
          </div>
        </div>
      </div>

      {/* Main services  */}
      <div className="w-4/5 mx-auto -mt-32 mb-12 flex gap-4 flex-wrap justify-center">
        {allData.map((ser) => (
          <SingleServices key={ser._id} ser={ser} />
        ))}
      </div>

      <div className=" mb-12 text-center">
        <Link
          to={"services"}
          className="inline-flex items-center py-[10px] px-5 text-sm font-medium text-center text-white bg-[#eaa636] rounded-[3px] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-[#eaa636] uppercase no-underline transition-all"
        >
          Find More
        </Link>
      </div>

      {/* service End */}

      {/* Experience  */}
      <div className="flex items-center bg-[#111] ">
        <div className="bg-exp hidden lg:block lg:w-[50%] h-[450px]">
          {/* bg image  */}
        </div>
        <div className="p-16 lg:w-[50%] ">
          <span className="text-yellow-400 uppercase text-xs font-bold">
            EXPERIENCES
          </span>
          <br />
          <h2 className="text-white text-4xl font-semibold mt-3">
            Let Our Experience <br /> be Your Guide
          </h2>
          <div className="py-3">
            <Exp />
          </div>
        </div>
      </div>

      {/* Experience End */}

      {/* Teams */}
      <Teams />
      {/* Teams End */}
    </div>
  );
};

export default Home;
