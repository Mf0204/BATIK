import React from 'react'
export default function footer() {
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
<div className="card">
  <div className="row">
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h4><b>Shopping Cart</b></h4>
          </div>
          <div className="col align-self-center text-right text-muted">3 items</div>
        </div>
      </div>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2"><img className="img-fluid" src="blarak.jpg" /></div>
          <div className="col">
            <div className="row text-muted">Kain</div>
            <div className="row">Blarak Sempal</div>
          </div>
          {/* <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div> */}
          <div className="col">Rp. 699.000 </div>
        </div>
      </div>
      <div className="row">
        <div className="row main align-items-center">
          <div className="col-2"><img className="img-fluid" src="atasan.png" /></div>
          <div className="col">
            <div className="row text-muted">Kemeja</div>
            <div className="row">Kemeja Batik Wanita</div>
          </div>
          {/* <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div> */}
          <div className="col">Rp 150.000</div>
        </div>
      </div>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2"><img className="img-fluid" src="dres.png" /></div>
          <div className="col">
            <div className="row text-muted">Outer</div>
            <div className="row">Outer Batik</div>
          </div>
          {/* <div className="col"> <a href="">-</a><a href="#" className="border">1</a><a href="">+</a> </div> */}
          <div className="col">Rp. 199.000</div>
        </div>
      </div>
      <div className="back-to-shop"><a href="http://localhost:3000/user/home">←</a><span className="text-muted">Back To Home</span></div>
    </div>
    <div className="col-md-4 summary">
      <div>
        <h5><b>Summary</b></h5>
      </div>
      <hr />
      <div className="row">
        <div className="col" style={{paddingLeft: 0}}>ITEMS 3</div>
        <div className="col text-right">Rp. 250.000</div>
      </div>
      <form>
        <p>SHIPPING</p> <select>
          <option className="text-muted">Reguler 30.000</option>
          <option className="text-muted">Hemat 20.000</option>
          <option className="text-muted">Kargo 50.000</option>
        </select>
        {/* <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" /> */}
      </form>
      <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
        <div className="col">TOTAL PRICE</div>
        <div className="col text-right">Rp. 250.000</div>
      </div> <button className="btn">CHECKOUT</button>
    </div>
  </div>
</div>

</div>
    )}