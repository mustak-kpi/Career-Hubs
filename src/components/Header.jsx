import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-slate-100 w-full h-40">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
      
      <Link to='/'> <p className="text-3xl not-italic font-extrabold  text-black font-mono tracking-wide">
            CareerHub
          </p></Link>
          <ul className="flex space-x-6 text-xl  font-normal not-italic mt-4">
            <Link to='/chart' className="my-titles">Statistics</Link>
            <Link to='/applayall' className="my-titles">Applied Jobs</Link>
            <li className="my-titles">Blog</li>
          </ul>
        <Link to='/ApplayNow'>
        <p className="btn-titles mt-4">
            Star Applying
          </p>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
