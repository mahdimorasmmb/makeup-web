import React from "react";
import { CartIcon } from "../../Icon/CartIcon";
import HeartIcon from "../../Icon/HeartIcon";
import { SearchIcon } from "../../Icon/SearchIcon";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="  container  mx-auto flex justify-between py-3 text-2xl">
      <a className="navbar__brand " href="#">
        Welly
      </a>

      <div className="flex items-end lowercase ">
        <a className="mr-8 text-xl" href="/home">
          Home
        </a>

        <a className="mr-8 text-xl" href="/search">
          Search
        </a>

        <a className="mr-8 text-xl" href="/about">
          About
        </a>

        <div className="flex">
          <HeartIcon className="mr-4 h-5 w-5" />

          <CartIcon className="mr-4 h-5 w-5" />

          <SearchIcon className="mr-4 h-5 w-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
