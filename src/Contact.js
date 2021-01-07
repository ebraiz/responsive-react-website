import { React, useState } from "react";

const Contact = () => {
  const [data, setData ] = useState({
    validationCustom01: "",
    validationCustom02: "",
    validationCustom03: "",
    validationCustom04: "",
    validationCustom05: "",
    invalidCheck: "",
    validationCustomUsername: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My Name is ${data.validationCustom01}, ${data.validationCustom02}, ${data.validationCustom03}, ${data.validationCustom04}, ${data.validationCustom05}, ${data.invalidCheck}, ${data.validationCustomUsername}.`);
  };
  return (
    <>
      <section className="serviceSection">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-3 text-center mb-5">Contact Us</h1>
            </div>  
          </div>
          <div className="row">
            <div className="col">
            <form className="row g-3 needs-validation" noValidate onSubmit={formSubmit}>
              <div className="col-md-4 col-12">
                <label htmlFor="validationCustom01" className="form-label">First name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="validationCustom01" 
                  name="validationCustom01"
                  value={data.validationCustom01}
                  onChange={InputEvent}
                  required
                />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-md-4 col-12">
                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="validationCustom02" 
                  name="validationCustom02"
                  value={data.validationCustom02}
                  onChange={InputEvent} 
                  required 
                />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-md-4 col-12">
                <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">@</span>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="validationCustomUsername" 
                    aria-describedby="inputGroupPrepend"
                    name="validationCustomUsername"
                    value={data.validationCustomUsername}
                    onChange={InputEvent} 
                    required 
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <label htmlFor="validationCustom03" className="form-label">City</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="validationCustom03" 
                  name="validationCustom03"
                  value={data.validationCustom03}
                  onChange={InputEvent} 
                  required 
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 col-12">
                <label htmlFor="validationCustom04" className="form-label">State</label>
                <select 
                  className="form-select" 
                  id="validationCustom04" 
                  name="validationCustom04"
                  value={data.validationCustom04}
                  onChange={InputEvent} 
                  required
                >
                  <option selected disabled value="">Choose...</option>
                  <option>...</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div className="col-md-3 col-12">
                <label htmlFor="validationCustom05" className="form-label">Zip</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="validationCustom05" 
                  name="validationCustom05"
                  value={data.validationCustom05}
                  onChange={InputEvent} 
                  required 
                />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              <div className="col-12 col-12">
                <div className="form-check">
                  <input 
                    className="form-check-input"
                    type="checkbox" 
                    name="invalidCheck"
                    value={data.invalidCheck}
                    onChange={InputEvent} 
                    id="invalidCheck" 
                    required 
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12 col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
