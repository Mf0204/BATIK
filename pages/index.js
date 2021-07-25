import React from 'react'
import { useState } from 'react'

export default function login() {
  const [id_user, setId] = useState('')
  const [nama_user, setNama] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  const clearInput = () => {
    setId('')
    setNama('')
    setUsername('')
    setPassword('')
    setEmail('')
  }

  async function submitHandler(e) {
    // setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/input-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           nama_user, username, password, email
        }),
      })
      // setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      // Router.push('/')
      alert("Penambahan Data Sukses")
      clearInput()
    } catch (e) {
      throw Error(e.message)
    }
  }
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
        <form onSubmit={submitHandler}>
          <div className="row">
            {/* First Name */}
            <div className="input-group col-lg-6 mb-4">
              <input             
              value = {nama_user} 
              onChange = {(e) => setNama(e.target.value)}
              type="text" placeholder="Nama" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Username */}
            <div className="input-group col-lg-6 mb-4">
              <input 
              value = {username} 
              onChange = {(e) => setUsername(e.target.value)}
              type="text" placeholder="Username" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Pasword */}
            <div className="input-group col-lg-6 mb-4">
            <input 
            value = {password} 
            onChange = {(e) => setPassword(e.target.value)}
            type="password" placeholder="Password" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Email Address */}
            <div className="input-group col-lg-12 mb-4">
              <input 
              value = {email} 
              onChange = {(e) => setEmail(e.target.value)}
              type="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
            </div>
            {/* Submit Button */}
            <center>
            <div className="form-group col-lg-12 mx-auto mb-0">
              <a  >
                <button className="btn btn-primary btn-block py-2" type="submit">Create your account</button>
              </a>
            </div></center>
            {/* Already Registered */}
            <p/>
            <div className="text-center w-100">
              <p className="text-muted font-weight-bold">Already Registered? <a href="in" className="text-primary ml-2">Login</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
    )}