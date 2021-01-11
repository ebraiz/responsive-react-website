import React from "react";
import Card from './components/Card';
import ServiceData from './ServiceData';
import Common from './components/Common';

const Services = () => {
  return (
    <>
      <section className="serviceSection">
        <Common
          heading="Our Services"
        />
        <div className="container my-5">
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
