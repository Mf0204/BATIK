import React from 'react'

export default function login() {
    return (
        <div>
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
    <div>
  <div className="container">
    <div className="row py-5 mt-4 align-items-center">
      {/* For Demo Purpose */}
      <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
        <img src="18.png" alt className="img-fluid mb-3 d-none d-md-block" />
        <h1>Create an Account</h1>
        <p className="font-italic text-muted mb-0">The Exclusive Batik of Banyuwangi ada disini!</p>
      </div>
      {/* Registeration Form */}
      <div className="col-md-7 col-lg-6 ml-auto">
        <form action="#">
          <div className="row">
            {/* First Name */}
            <div className="input-group col-lg-6 mb-4">
              <input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Last Name */}
            <div className="input-group col-lg-6 mb-4">
              <input id="lastName" type="text" name="lastname" placeholder="Last Name" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Email Address */}
            <div className="input-group col-lg-12 mb-4">
              <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Phone Number */}
            <div className="input-group col-lg-12 mb-4">
              <select id="countryCode" name="countryCode" style={{maxWidth: 80}} className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                <option value>+62</option>
                <option value>+60</option>
                <option value>+7</option>
                <option value>+66</option>
              </select>
              <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3" />
            </div>.
            {/* Job */}
            <div className="input-group col-lg-12 mb-4">
              <select id="job" name="jobtitle" className="form-control custom-select bg-white border-left-0 border-md">
                <option value>Choose your job</option>
                <option value>Mahasiswa</option>
                <option value>PNS</option>
                <option value>Wiraswasta</option>
                <option value>Lainnya</option>
              </select>
            </div>
            {/* Password */}
            <div className="input-group col-lg-6 mb-4">
              <input id="password" type="password" name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Password Confirmation */}
            <div className="input-group col-lg-6 mb-4">
              <input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Submit Button */}
            <center>
            <div className="form-group col-lg-12 mx-auto mb-0">
              <a href="#" className="btn btn-primary btn-block py-2">
                <span className="font-weight-bold">Create your account</span>
              </a>
            </div></center>
            {/* Divider Text */}
            <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
              <div className="border-bottom w-100 ml-5" />
              <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
              <div className="border-bottom w-100 mr-5" />
            </div>
            <center>
            {/* Social Login */}
            <div className="form-group col-lg-12 mx-auto">
              <a href="#" className="btn btn-primary btn-block py-2 btn-facebook">
                <i className="fa fa-facebook-f mr-2" />
                <span className="font-weight-bold">Continue with Facebook</span>
              </a> &nbsp;
              <a href="#" className="btn btn-primary btn-block py-2 btn-twitter">
                <i className="fa fa-twitter mr-2" />
                <span className="font-weight-bold">Continue with Twitter</span>
              </a>
            </div></center>
            {/* Already Registered */}
            <p/>
            <div className="text-center w-100">
              <p className="text-muted font-weight-bold">Already Registered? <a href="#" className="text-primary ml-2">Login</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
    )}