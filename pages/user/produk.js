//@ts-check
import Head from 'next/head' 
import Header from '../../componen/header'
import Body from '../../componen/body'
import Kolomproduk from '../../componen/kolomproduk'
import useSWR from 'swr'
import { useState } from 'react'
// import Moment from 'react-moment'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}

export default function Home() {
  const [deleting, setDeleting] = useState(false)
  const url = 'http://localhost:3000/api/produk';
  const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
  if (error) {
      return <div>error......</div>
    }
    if (!data) {
      return <div>loading......</div>
    }
    
  
  return (
    <div>
      <Head>
        <title>Batik</title>
      </Head>
      <Header/>
      <div className='row'>
        {data.map((kolom)=>(
          <Kolomproduk Imgurl={kolom.gambar} NamaProduk={kolom.nama_produk} Price={kolom.price} Price2={kolom.harga}/>
        ))
      }

      </div>
    </div>
  )
}