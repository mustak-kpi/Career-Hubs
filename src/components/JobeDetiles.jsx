import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faBriefcase,
  faDollarSign,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { addtodata } from "./utlites.js/facedb";


const JobeDetiles = () => {
  const data = useLoaderData();
  const {
    categorytitle,
    description,
    educationalRequirements,
    email,
    responsibility,
    exprience,
    phone,
    address,
    salary,
    id,
  } = data;

  // back 1 step 
  const back1step = useNavigate();
  const goback = () => {
    back1step(-1);
  };

  const Applaynow = (id) =>{
  addtodata(id)

  }
  return (
    <div className="container mx-auto">
      <h3 className="text-center text-4xl font-extrabold font-serif -mt-16">
        Jobs Details
      </h3>
      <div className="flex gap-10 mt-14 mb-16">
        <div className="p-12">
          <h2 className="text-xl font-extrabold font-serif">
            jobs Description:
            <span className="text-base font-normal font-serif">
              {" "}
              {description}
            </span>
          </h2>
          <h2 className="text-xl font-extrabold font-serif mt-4">
            jobs Responsibility:
            <span className="text-base font-normal font-serif">
              {responsibility}
            </span>
          </h2>
          <h2 className="text-xl font-extrabold font-serif mt-4">
            Educational Requirements:
            <div>
              <span className="text-base font-normal font-serif mt-4">
                {educationalRequirements}
              </span>
            </div>
          </h2>
          <h2 className="text-xl font-extrabold font-serif mt-4">
            Experiences:
            <div>
              <span className="text-base font-normal font-serif">
                {exprience}
              </span>
            </div>
          </h2>
             <div className="text-center">
              <button onClick={goback} className="text-xl font-bold not-italic py-2 px-8 hover:bg-indigo-500 rounded-lg">  <FontAwesomeIcon
                icon={faChevronCircleLeft}
              /> Back</button>
             </div>
        </div>
        <div className="bg-indigo-200 w-3/5 h-96  p-12">
          <div className="">
            <h6 className="text-xl font-bold not-italic mb-4">jobes titles:</h6>
            <hr />
            <p className="text-xl font-bold  not-italic mt-4">
              <FontAwesomeIcon
                className="text-indigo-600 pr-2"
                icon={faDollarSign}
              />
              salary:
              <span className="text-base font-normal not-italic">
                {salary} (Per Month)
              </span>
            </p>

            <p className="text-xl font-bold  not-italic">
              <FontAwesomeIcon
                className="text-indigo-600 pr-2"
                icon={faBriefcase}
              />
              jobs Title{" "}
              <span className="text-base font-normal not-italic">
                {categorytitle}
              </span>
            </p>

            <h6 className="text-xl font-bold not-italic mt-4 mb-4">
              Contact Information
            </h6>
            <hr />
            <p className="text-xl font-bold  not-italic mt-4">
              {" "}
              <FontAwesomeIcon
                className="text-indigo-600 pr-2"
                icon={faPhone}
              />{" "}
              Phone:
              <span className="text-base font-normal not-italic">{phone}</span>
            </p>
            <p className="text-xl font-bold not-italic">
              <FontAwesomeIcon
                className="text-indigo-600 pr-2"
                icon={faEnvelope}
              />{" "}
              Email:
              <span className="text-bese font-normal not-italic">{email}</span>
            </p>
            <p className="text-xl font-bold not-italic">
              {" "}
              <FontAwesomeIcon
                className="text-indigo-600 pr-2"
                icon={faLocationDot}
              />
              Address:
              <span className="text-bese font-normal ont-italic">
                {address}
              </span>
            </p>
          </div>         
        <div  className="text-center">
          <button onClick={()=>Applaynow(id)} className="text-xl font-bold not-italic py-2 px-8 mt-12 bg-indigo-500 rounded-lg">apply now</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default JobeDetiles;
