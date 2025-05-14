import React from "react";
import About from "../component/About";

import SuccessStory from "../component/Testimonails";
import Mission from "../component/Mission";
import Vision from "../component/Vision";
import Banner from "../component/Banner";

const page = () => {
  return (
    <>
    
     <Banner   bannerTitle='About' />
      
      <About />
      <Mission/>
      <Vision/>
      <SuccessStory/>
    </>
  );
};

export default page;
