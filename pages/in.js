import React from 'react'
export default function login(){
    return (
        <section className="page-section" id="contact">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
              <a className="navbar-brand" href="http://localhost:3000/">Suruh Temurose</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a></li>                      <li className="nav-item"><a className="nav-link" href="produk">All Product</a></li>
             </ul>
            </div>
            </div>
          </nav>
        <div className="container">
          {/* Contact Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0"> Login</h2>
          {/* Icon Divider*/}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
            <div className="divider-custom-line" />
          </div>
          {/* Contact Section Form*/}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              {/* * * * * * * * * * * * * * * **/}
              {/* * * SB Forms Contact Form * **/}
              {/* * * * * * * * * * * * * * * **/}
              {/* This form is pre-integrated with SB Forms.*/}
              {/* To make this form functional, sign up at*/}
              {/* https://startbootstrap.com/solution/contact-forms*/}
              {/* to get an API token!*/}
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* Email address input*/}
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                  <label htmlFor="email">Email address</label>
                  <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                {/* Phone number input*/}
                <div className="form-floating mb-3">
                  <input className="form-control" id="phone" type="tel" placeholder="" data-sb-validations="required" />
                  <label htmlFor="phone">Password</label>
                  <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>
                {/* has successfully submitted*/}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                  </div>
                </div>
                {/* Submit error message*/}
                {/**/}
                {/* This is what your users will see when there is*/}
                {/* an error submitting the form*/}
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                {/* Submit Button*/}
                <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">LOGIN</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}