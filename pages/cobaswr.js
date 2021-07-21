import React from 'react'
import useSWR from 'swr'
async function fetcher(url){
 const res = await fetch(url);
 return res.json();
}
const Home = () => {
    const url = "http://localhost:3000/api/swr";
    //data dan error
    const {data, error} = useSWR(url, fetcher);
    if(error){
    return <div>error loading</div>
    }
    if(!data){
    return <div>Loading</div>
    }
    const {dtberita} = data; //dtberita harus sama dengan di objek api hello.js
    console.log(dtberita);
   
return(
<div>
</div>
)
}

// export default function Home() {
//     return (
//         <div className="row">
//             {dtberita.map((brt, idx) => (
//             <div className="col-lg-4">
//             <img src={brt.url} className="bd-placeholder-img rounded circle" width="140" height="140"/>
//             <h2>Heading</h2>
//                 <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
//             <p><a className="btn btn-secondary" href="#">View details »</a></p>
//         </div>
//         ))}
//         </div>
//     )}