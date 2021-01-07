import React from "react";
import Card from './components/Card';
import ServiceData from './ServiceData';

const Services = () => {
  return (
    <>
      <section className="serviceSection">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-3 text-center mb-5">Our Services</h1>
            </div>  
          </div>
          <div className="row gy-4">
            {
              ServiceData.map((val, ind) => {
                return <Card
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  description={val.description}
                  btnname={val.btnname}
                  btnlink={val.btnlink}
                />
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
