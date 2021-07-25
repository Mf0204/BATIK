
import Link from "next/link"
import useSWR from 'swr'
import { useState } from 'react'

async function fetcher(url) {
    const res = await fetch(url);
    return res.json();
  }
export default function Kolomproduk(props){
    const [deleting, setDeleting] = useState(false)
    const url = 'http://localhost:3000/api/produk';
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
    if (error) {
        return <div>error......</div>
      }
      if (!data) {
        return <div>loading......</div>
      }
      
    return(
        <div className='row'>
        {data.map((kolom,index)=>(
        <div className="col mb-5">
                
           <center>
            {/* <div className="badge bg-dark text-white position-relative" style={{top: '0.5rem', right: '0.5rem'}}>sale</div> */}
            <img src={kolom.gambar} height={250} width={200} />
            <h5>{kolom.nama_produk}</h5>
            <span className="text-muted text-decoration-line-through">{kolom.price}</span>&nbsp;
            {kolom.harga}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                <a 
                className="btn btn-outline-dark mt-auto" 
                href={`/user/outerdetail/?id_produk=${kolom.id_produk}`}
                >View Detail
                </a>
                </div>
            </div>
            </center>
     </div> 
               ))
            } 
        </div>
    )
}