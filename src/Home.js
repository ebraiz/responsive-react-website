import React from "react";
import { NavLink } from 'react-router-dom';
import homeimg from '../src/images/homeimg.jpg';

const Home = () => {
  return (
    <>
      <section className="homeSection">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12 align-self-center">
              <h1 className="h1">Unlimited Transactions</h1>
              <strong className="text-primary">Our Website</strong>
              <p className="fs-5">Get access to our exclusive diamond ard that allows you to send unlimited transactions without getting charged any fees.</p>
              <NavLink to="/contact" className="btn btn-outline-primary rounded-pill">Getting Started</NavLink>
            </div>
            <div className="col-md-7 col-12 align-self-center text-end">
              <img src={homeimg} className="img-fluid animated" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
