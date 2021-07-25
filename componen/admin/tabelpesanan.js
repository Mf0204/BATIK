//@ts-check
import useSWR from 'swr'
import { mutate } from 'swr'
import { useState } from 'react'
// import Moment from 'react-moment'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
export default function Tableproduk() {
    const [deleting, setDeleting] = useState(false)
    const url = 'http://localhost:3000/api/pesanan';
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
    if (error) {
        return <div>error......</div>
      }
      if (!data) {
        return <div>loading......</div>
      }
      

  async function deleteEntry(value) {
    setDeleting(true)
    let res = await fetch(`http://localhost:3000/api/delet-pesanan?id=${value}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    alert("Data telah dihapus  " )
    mutate('http://localhost:3000/api/pesanan')
    setDeleting(false)
  }
    return(
        <>
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>nama</th>
                    <th>nama_produk</th>
                    <th>harga</th>
                    <th>alamat</th>
                    <th>telepon</th>
                    <th>Up & del</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((Produk,index)=>
                  <tr>
                    <td>{index+1}</td>
                    <td>{Produk.nama}</td>
                    <td>{Produk.nama_produk}</td>
                    <td>{Produk.harga}</td>
                    <td>{Produk.alamat}</td>
                    <td>{Produk.telepon}</td>
      
                    <td>
                    
                        <button type="button" className="btn btn-danger btn-sm "
                        disabled={deleting} 
                        value = {Produk.id}
                        onClick={e => deleteEntry(e.target.value)}     
                        >{deleting ? '' : ' ' }
                        delet
                        </button>
                    </td>                  
                </tr>
                )}
                </tbody>
              </table>
            </>
    )
}