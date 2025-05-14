import React from "react";
import HeroSection from "./component/Herosection";
import About from "./component/About";
import Service from "./component/Service";
import Callaction from "./component/Callaction";
import SuccessStory from "./component/Testimonails";
import TeamSection from "./component/Teamsection";
import ClientSuccessSlider from "./component/Clinetstory";
import FaqSection from "./component/Faq";
import Assists from "./component/Assits";
import Blog from "./component/Blog";
import Industries from "./component/Industries";
import Form from "./component/Form";
import InnerForm from "./component/InnerForm";


const page = () => {
  return (
    <>

      <HeroSection />
               <InnerForm cancel={false} className="  bg-[#010101cf] rounded-none md:hidden " titletop='Quick Query'/> 
      
      <About  readmore={true}/>
      <Service />
      <Industries />
      <Callaction />
      <Assists />
      <ClientSuccessSlider />
      <FaqSection />
      <SuccessStory />
      <Blog />
      <Form />
    </>
  );
};

export default page;
