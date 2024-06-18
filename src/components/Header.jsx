import React from "react";
import { navRoutes, zIndex } from "../constants";

const Header = () => {
  return (
    <nav className={`relative bg-gray-950 flex z-3 z-${zIndex.header}`}>
      <div className="w-full px-5 md:px-3 lg:px-10 xl:px-15 flex flex-wrap items-center justify-between mx-auto py-2">
        <div className="flex items-center justify-start py-2">
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Portfolio Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white pl-2">
              Portfolio
            </span>
          </a>
        </div>
        <div className="py-2"></div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:flex md:w-auto md:justify-end"
          id="navbar-default"
        >
          {/* <ul className="font-medium flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
          <ul className="font-medium flex flex-col md:flex-row rounded-lg bg-gray-950 md:justify-end">
            {navRoutes.map((nav) => (
              <li key={nav.id}>
                <a
                  href={nav.path}
                  className="flex p-2 mx-[2px] my-1 text-white bg-blue-700 md:bg-gray-950 md:hover:bg-blue-700 rounded md:rounded-full md:px-2 md:py-2 shadow-sm hover:
hover:shadow-white"
                  //   aria-current="page"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
