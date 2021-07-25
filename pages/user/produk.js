//@ts-check
import Head from 'next/head' 
import Header from '../../componen/user/header'
import Body from '../../componen/user/body'
import Kolomproduk from '../../componen/user/kolomproduk'
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
      <div className='row '>
      
          <Kolomproduk />
     

      </div>
    </div>
  )
}