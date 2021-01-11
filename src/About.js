import React from "react";
import Common from './components/Common';
import rightimg from '../src/images/rightimg.jpg';

const About = () => {
  return (
    <>
      <Common
        heading="About Us"
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 col-12">
            <p className="fs-5 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-12 p-4">
            <h3 className="display-6">Our Mission</h3>
            <p className="fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="col-md-6 col-12 p-4">
            <img src={rightimg} className="img-fluid" alt="img" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-12 p-4">
            <img src={rightimg} className="img-fluid" alt="img" />
          </div>
          <div className="col-md-6 col-12 p-4">
            <h3 className="display-6">Our Vision</h3>
            <p className="fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default About;
