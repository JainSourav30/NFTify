import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { GiBarbedSpear } from "react-icons/gi";
import Avatar from "../Chatur/Avatar";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div>
      <nav className="relative w-screen border-gray-200 opacity-90 overflow-hidden py-2.5 bg-violet-700">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <GiBarbedSpear size={50} className="mr-3 text-white" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              NFTify
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <Link to={"/"}>
                <li className="p-4 text-white font-bold hover:scale-110 rounded-md hover:bg-violet-600 transition-all ease-linear ">
                  Home
                </li>
              </Link>
              <Link to={"/join-us"}>
                <li className="p-4 text-white font-extrabold hover:scale-110 rounded-md hover:bg-violet-600 transition-all ease-linear">
                  Join Us
                </li>
              </Link>
              <Link to={"/login"}>
                <li className="p-4 text-white font-bold hover:scale-110 rounded-md hover:bg-violet-600 transition-all ease-linear ">
                  Login
                </li>
              </Link>
              <Link to={"/verify"}>
                <li className="p-4 text-white font-bold hover:scale-110 rounded-md hover:bg-violet-600 transition-all ease-linear ">
                  Verify
                </li>
              </Link>
              <Avatar size={30} />
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;
