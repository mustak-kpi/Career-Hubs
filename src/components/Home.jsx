import React from "react";
import HomePage from "./HomePage";
import HomeJobCatagery from "./HomeJobCatagery";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";
import Futter from "./Futter/Futter";
const Home = () => {
  const jobcatagory = useLoaderData();
  // console.log( jobcatagory)
  return (
 <div>
  <HomePage></HomePage>
  <HomeJobCatagery
  jobcatagory ={jobcatagory}
  ></HomeJobCatagery>
  <FeaturedJobs></FeaturedJobs>
 </div>
  );
};

export default Home;
