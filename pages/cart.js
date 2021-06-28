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
          <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div>
          <div className="col">
            <div className="row text-muted">Shirt</div>
            <div className="row">Cotton T-shirt</div>
          </div>
          <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div>
          <div className="col">€ 44.00 <span className="close">✕</span></div>
        </div>
      </div>
      <div className="row">
        <div className="row main align-items-center">
          <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg" /></div>
          <div className="col">
            <div className="row text-muted">Shirt</div>
            <div className="row">Cotton T-shirt</div>
          </div>
          <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div>
          <div className="col">€ 44.00 <span className="close">✕</span></div>
        </div>
      </div>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg" /></div>
          <div className="col">
            <div className="row text-muted">Shirt</div>
            <div className="row">Cotton T-shirt</div>
          </div>
          <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div>
          <div className="col">€ 44.00 <span className="close">✕</span></div>
        </div>
      </div>
      <div className="back-to-shop"><a href="#">←</a><span className="text-muted">Back to shop</span></div>
    </div>
    <div className="col-md-4 summary">
      <div>
        <h5><b>Summary</b></h5>
      </div>
      <hr />
      <div className="row">
        <div className="col" style={{paddingLeft: 0}}>ITEMS 3</div>
        <div className="col text-right">€ 132.00</div>
      </div>
      <form>
        <p>SHIPPING</p> <select>
          <option className="text-muted">Standard-Delivery- €5.00</option>
        </select>
        <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" />
      </form>
      <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
        <div className="col">TOTAL PRICE</div>
        <div className="col text-right">€ 137.00</div>
      </div> <button className="btn">CHECKOUT</button>
    </div>
  </div>
</div>

</div>
    )}