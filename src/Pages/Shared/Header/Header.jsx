import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { AuthContext } from "../../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogout = () => {
    logOut()
      .then(() => {})
      .then((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center bg-slate-800 text-white">
      <div className="navbar w-5/6">
        <div className="">
          <div className="dropdown">
            <button tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-w-8 w-8 lg:hidden mr-3"
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
              <li tabIndex={0}>
                <Link to={'/'} className="no-underline">Home</Link>
              </li>
              <li>
                <Link to={'blog'} className="no-underline">Blogs</Link>
              </li>
              <li>
                <Link className="no-underline" to={"login"}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <Link  to={"/"}>
            <img src={logo} className="w-[70%] sm:w-full" alt="" />
          </Link>
        </div>
        <div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li tabIndex={0}>
                <Link to={'/'} className="no-underline">Home</Link>
              </li>
              <li>
                <Link to={'blog'} className="no-underline">Blogs</Link>
              </li>
              {user ? undefined : (
                <li>
                  <Link className="no-underline" to={"login"}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {user && (
            <div>
              <ul className="menu menu-horizontal p-0">
                <li className="hidden md:block">
                  <Link to={'reviews'} className="no-underline">My reviews</Link>
                </li>
                <li className="hidden md:block">
                  <Link to={'add_services'} className="no-underline">Add service</Link>
                </li>
              </ul>

              <div className="dropdown dropdown-bottom dropdown-end">
                <img
                  style={{ borderRadius: "50%" }}
                  className="w-1h-14 h-14 btn m-1"
                  tabIndex={0}
                  src={user?.photoURL}
                  alt=""
                />
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="block md:hidden">
                    <Link className="no-underline">My reviews</Link>
                  </li>
                  <li className="block md:hidden">
                    <Link to={'add_services'} className="no-underline">Add service</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout} className="no-underline">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
