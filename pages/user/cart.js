//@ts-check
import React from 'react'
import CartProduk from '../../componen/user/cartProduk'
// import useSWR from 'swr'
// import { useState } from 'react'
// async function fetcher(url) {
//   const res = await fetch(url);
//   return res.json();
// }
export default function footer() {
  // const [deleting, setDeleting] = useState(false)
  // const url = 'http://localhost:3000/api/top';
  // const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
  // if (error) {
  //     return <div>error......</div>
  //   }
  //   if (!data) {
  //     return <div>loading......</div>
  //   }
    return (
        <div>   
       
                <CartProduk />
                
             

</div>
    )}