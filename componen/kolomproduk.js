export default function Kolomproduk(props){
    return(
        <div className="col mb-5">
            <center>
            {/* <div className="badge bg-dark text-white position-relative" style={{top: '0.5rem', right: '0.5rem'}}>sale</div> */}
            <img src={props.Imgurl} height={250} width={200} />
            <h5>{props.NamaProduk}</h5>
            <span className="text-muted text-decoration-line-through">{props.Price}</span>&nbsp;
            {props.Price2}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="outerdetail">View Detail</a></div>
            </div>
            </center>
        </div>
    )
}