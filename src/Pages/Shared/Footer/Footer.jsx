import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.png";



const footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <img src={logo} alt="" />
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title text-yellow-400 ">Services</span> 
    <Link className=" no-underline text-white">Branding</Link> 
    <Link className=" no-underline text-white">Design</Link> 
    <Link className=" no-underline text-white">Marketing</Link> 
    <Link className=" no-underline text-white">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title text-yellow-400 ">Company</span> 
    <Link className=" no-underline text-white">About us</Link> 
    <Link className=" no-underline text-white">Contact</Link> 
    <Link className=" no-underline text-white">Jobs</Link> 
    <Link className=" no-underline text-white">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title text-yellow-400 ">Legal</span> 
    <Link className=" no-underline text-white">Terms of use</Link> 
    <Link className=" no-underline text-white">Privacy policy</Link> 
    <Link className=" no-underline text-white">Cookie policy</Link>
  </div>
</footer>
    );
};

export default footer;