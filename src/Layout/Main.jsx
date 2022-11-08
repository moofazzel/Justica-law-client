import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from 'react-router-dom';


const Main = () => {
  return (
    <div>
          <Header />
          <Outlet></Outlet>
          <Footer/>
    </div>
  );
};

export default Main;
