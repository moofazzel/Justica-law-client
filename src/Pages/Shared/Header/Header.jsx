import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center bg-slate-800 text-white">
       <div className="navbar w-5/6">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Item 1</Link>
              </li>
              <li tabIndex={0}>
                <Link className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link to={'/'}>
            <img src={logo} className="w-full" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            
            <li tabIndex={0}>
              <Link>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
            <li>
              <Link to={'login'}>Login</Link>
            </li>
            <li>
              <Link>My reviews</Link>
            </li>
            <li>
              <Link>Add service</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
