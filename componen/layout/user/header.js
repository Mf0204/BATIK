import React from 'react'
import Link from "next/link"
export default function navigation() {
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Suruh Temurose</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="produk">All Product</a></li>
                    </ul>
                    <form className="d-flex">
                        <Link href="/cart">
                        <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1" />
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button></Link>
                    </form>  &nbsp;
                    {/* <li className="nav-item"><a className="nav-link" href="detail">Log In</a></li> */}
                    <form className="d-flex">
                        <Link href="/login">
                        <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1" />
                        Log In
                       </button>
                        </Link>
                    </form>
                    </div>
                </div>
                </nav>

        </div>

    )}