import React from "react";
import careerimage from "../assets/images/P3OLGJ1 copy 1.png";

const HomePage = () => {
  return (
    <div>
      <section className=" bg-slate-100 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <h2  className="text-7xl not-italic font-extrabold text-black font-serif tracking-wide">
                One Step <br /> Closer To Your 
                <span className="text-indigo-500"> Dream Job</span>
              </h2>
              <p className="text-base text-black  mt-4 font-medium font-serif leading-6">
                Explore thousands of job opportunities with all the <br />
                information you need. Its your future. Come find it.
                <br /> Manage all your job application from start to finish.
              </p>
              <button className="btn-titles mt-8">Get Started</button>
            </div>
            <div>
              <img src={careerimage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
