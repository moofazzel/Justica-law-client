import React from "react";
import image1 from "../../assets/images/homeCarousel/image1.jpg";
import image2 from "../../assets/images/homeCarousel/image2.jpg";

const Home = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
          <img src={image1} className="w-full" alt="" />

          



          <div>
            <p>sdfhiahisf</p>
</div>








          
        </div>
        <div id="item2" className="carousel-item w-full">
          {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
          <img src={image2} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div>
    </>
  );
};

export default Home;
