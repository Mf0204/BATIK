//@ts-check
import Link from "next/link"
import React from 'react'
import { useState } from 'react'
import{ useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
 
export default function Outerbatik(props){
  const router = useRouter()
  const {id_produk} = router.query
  const url = `http://localhost:3000/api/cariproduk/tes?id_produk=${id_produk}`;
  const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
  if (error) {
      return <div>error......</div>
    }
    if (!data) {
      return <div>loading......</div>
    }
  
    // const kolom = data

 
 
    return(
        <div>
          
        <section className="col mb-5">
        <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
            <div id="mdb-lightbox-ui" />
            <div className="mdb-lightbox">
                <div className="row product-gallery mx-1">
                <div className="col-12 mb-0">
                    <figure className="view overlay rounded z-depth-1 main-img">
                    <a href="" data-size="710x823">
                        <img  src={data[0].gambar}className="img-fluid z-depth-1" />
                    </a>
                    </figure>
                </div>
                </div>
            </div>
            </div>
            
        <div className="col mb-20">
        <h5>{data[0].nama_produk}</h5>
        <p/>
        <p>

          <strong>{data[0].harga} </strong>
        </p>
        {/* <p className="pt-1">Outer Motif liris </p> */}
        <div className="table-responsive">
          <table className="table table-sm table-borderless mb-0">
            <tbody>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Bahan </strong></th>
                <td>{data[0].bahan}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Berat </strong></th>
                <td>{data[0].berat}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Keterangan </strong></th>
                <td>{data[0].keterangan}</td>
              </tr>
              <tr>
              
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
        <Link href={`/user/cart?id_produk=${data[0].id_produk}&gambar=${data[0].gambar}&nama_produk=${data[0].nama_produk}&harga=${data[0].harga}`}>
        <button type="button" className="btn btn-primary btn-md mr-1 mb-2" >Buy now</button></Link>
      </div>
      </div>
      </section>
      </div>
    )
}