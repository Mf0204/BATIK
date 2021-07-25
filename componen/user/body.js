import React from 'react'

export default function body() {
    return (
        <div>
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-5">
                    <div className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top" src="blarak.jpg" height={300} width={450}  alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">Blarak Sempal</h5>
                        {/* Product price*/}
                        Rp. 699.000
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View Detail</a></div>
                    </div>
                    </div>
                </div>
                <div className="col mb-5">
                    <div className="card h-100">
                    {/* Sale badge*/}
                    <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                    {/* Product image*/}
                    <img className="card-img-top" src="Atasan.png" height={300} width={450} alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">Kemeja Batik Wanita</h5>
                        {/* Product reviews*/}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                        </div>
                        {/* Product price*/}
                        <span className="text-muted text-decoration-line-through">Rp. 249.000</span>
                        Rp. 150.000
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="detail">View Detail</a></div>
                    </div>
                    </div>
                </div>
                <div className="col mb-5">
                    <div className="card h-100">
                    {/* Sale badge*/}
                    <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                    {/* Product image*/}
                    <img className="card-img-top" src="dres.png" height={300} width={450} alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">Outer Batik</h5>
                        {/* Product price*/}
                        <span className="text-muted text-decoration-line-through">Rp. 299.000</span>
                        Rp. 199.000
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="outerdetail">View Detail</a></div>
                    </div>
                    </div>
                </div>
                <div className="col mb-5">
                    <div className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top" src="bawahan.png" height={300} width={450}  alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">Rok Batik</h5>
                        {/* Product reviews*/}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                        </div>
                        {/* Product price*/}
                        Rp. 99.000
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View Detail</a></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

        </div>
    )}