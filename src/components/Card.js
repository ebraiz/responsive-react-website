import { NavLink } from 'react-router-dom';
import web from '../../src/images/serviceimg.jpg';

const Card = () => {
  return (
    <>
    <div className="col-md-4 col-12">
        <div className="card" style={{width: "18rem"}}>
        <img src={web} className="card-img-top" alt="img" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/" className="btn btn-primary">Learn More</NavLink>
        </div>
        </div>
    </div>
    <div className="col-md-4 col-12">
        <div className="card" style={{width: "18rem"}}>
        <img src={web} className="card-img-top" alt="img" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/" className="btn btn-primary">Learn More</NavLink>
        </div>
        </div>
    </div>
    <div className="col-md-4 col-12">
        <div className="card" style={{width: "18rem"}}>
        <img src={web} className="card-img-top" alt="img" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/" className="btn btn-primary">Learn More</NavLink>
        </div>
        </div>
    </div>
    <div className="col-md-4 col-12">
        <div className="card" style={{width: "18rem"}}>
        <img src={web} className="card-img-top" alt="img" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/" className="btn btn-primary">Learn More</NavLink>
        </div>
        </div>
    </div>
    <div className="col-md-4 col-12">
        <div className="card" style={{width: "18rem"}}>
        <img src={web} className="card-img-top" alt="img" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/" className="btn btn-primary">Learn More</NavLink>
        </div>
        </div>
    </div>
    <div className="col-md-4 col-12">
        <div className="card" style={{width: "18rem"}}>
        <img src={web} className="card-img-top" alt="img" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/" className="btn btn-primary">Learn More</NavLink>
        </div>
        </div>
    </div>
    </>
  );
}

export default Card;
