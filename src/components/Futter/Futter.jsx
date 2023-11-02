import React from "react";
import logo from "../../assets/images/logo/Group 9969.png";
import { Link } from "react-router-dom";
const Futter = () => {
  return (
    <footer>
      <div className="bg-black h-96">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 pt-16 pb-10">
            <div className=" justify-center"> 
              <p className="text-3xl not-italic font-extrabold  text-white  font-mono tracking-wide">
                CareerHub
              </p>
              <p className="text-base  font-normal not-italic text-gray-50 mt-6">
                There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
              </p>
              <img className="w-auto h-auto mt-6 " src={logo} alt="" />
            </div>
            <div className="jobs-titles">
              <p className="comenaction">Company</p>
                    <Link className="linkStyle">About us</Link>
                    <Link className="linkStyle">worke</Link>
                    <Link className="linkStyle">Latest News</Link>
                    <Link className="linkStyle">Careers</Link>
                  
            </div>
            <div className="jobs-titles">
              <p className="comenaction">Product</p>
       
             <Link className="linkStyle">Prototype</Link>
              <Link className="linkStyle ">Plans & Pricing</Link>
              <Link className="linkStyle">Customers</Link>
              <Link className="linkStyle">Integrations</Link>
        
          
      
            </div>
            <div className="jobs-titles">
              <p className="comenaction">Support</p>
                  <Link className="linkStyle">Help Desk</Link>
                  <Link className="linkStyle">Selse</Link>
                  <Link className="linkStyle">Become a Partner</Link>
                  <Link className="linkStyle">Help Desk</Link>
            </div>
            <div className="text-white grid justify-center mb-4">
              <p className="comenaction">Contact</p>
              <Link className="linkStyle">01902419809</Link>
              <Link className="linkStyle">mustakkpi7@gmail.com</Link>
            </div>
          </div>
          <hr />
          <div className="text-cyan-50  mt-14 mb-20 flex justify-between">
            <p>@2023 Mr.Career All Rights Reserved</p>
            <p>@2023 Mr.Career All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Futter;
