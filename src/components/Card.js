import React from "react";
import { NavLink } from 'react-router-dom';
//import web from '../images/serviceimg.jpg';

const Card = (props) => {
  return (
    <>
        <div className="col-md-4 col-12">
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <NavLink to={props.btnlink} className="btn btn-primary">{props.btnname}</NavLink>
                </div>
            </div>
        </div>
    </>
  );
}

export default Card;
