import React from "react";
import web from '../src/images/homeimg.jpg';
import Common from './components/Common';

const About = () => {
  return (
    <>
      <Common 
        title="Welcome To About Us" 
        description="Get access to our exclusive diamond ard that allows you to send unlimited transactions without getting charged any fees." 
        imgsrc={web} 
        visit="/services"
        btnname="Our Services" 
      />
    </>
  );
}

export default About;
