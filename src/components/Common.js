import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="commonSection">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12 align-self-center">
              <h1 className="h1">{ props.title }</h1>
              <strong className="text-primary">Our Website</strong>
              <p className="fs-5">{ props.description }</p>
              <NavLink to={ props.visit } className="btn btn-outline-primary rounded-pill">{ props.btnname }</NavLink>
            </div>
            <div className="col-md-7 col-12 align-self-center text-end">
              <img src={props.imgsrc} className="img-fluid animated" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
