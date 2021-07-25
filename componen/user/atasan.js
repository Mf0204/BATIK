import Link from "next/link"

export default function Atasan(props){
    return(
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="http://localhost:3000/">Suruh Temurose</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a></li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1" />
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                    </div>
                </div>
                </nav>
        <section className="col mb-5">
        <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
            <div id="mdb-lightbox-ui" />
            <div className="mdb-lightbox">
                <div className="row product-gallery mx-1">
                <div className="col-12 mb-0">
                    <figure className="view overlay rounded z-depth-1 main-img">
                    <a href="" data-size="710x823">
                        <img src="Atasan.png" className="img-fluid z-depth-1" />
                    </a>
                    </figure>
                </div>
                </div>
            </div>
            </div>
        <div className="col mb-20">
        <h5>Kemeja Batik Wanita</h5>
        <p/>
        <p>
        <span className="text-muted text-decoration-line-through">{props.Price}</span>&nbsp;
          <strong>{props.Price2}</strong>
        </p>
        {/* <p className="pt-1">Outer Motif liris </p> */}
        <div className="table-responsive">
          <table className="table table-sm table-borderless mb-0">
            <tbody>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Bahan </strong></th>
                <td>{props.Bahan}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Berat</strong></th>
                <td>{props.Berat}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
                <td>{props.Delivery}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <div className="table-responsive mb-2">
          <table className="table table-sm table-borderless">
            <tbody>
              <tr>
                <td className="pb-0">Detail Produk</td>
              </tr>
              <tr>
                <td>
                <p className="pt-10">{props.DetailProduk}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link href="/cart">
        <button type="button" className="btn btn-primary btn-md mr-1 mb-2" >Buy now</button></Link>
        <button type="button" className="btn btn-light btn-md mr-1 mb-2"><i className="fas fa-shopping-cart pr-2" />Add to cart</button>
      </div>
      </div>
      </section>
      </div>
    )
}