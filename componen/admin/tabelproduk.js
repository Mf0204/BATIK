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
    const url = 'http://localhost:3000/api/produk';
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
    if (error) {
        return <div>error......</div>
      }
      if (!data) {
        return <div>loading......</div>
      }
      

  async function deleteEntry(value) {
    setDeleting(true)
    let res = await fetch(`http://localhost:3000/api/delet-produk?id_produk=${value}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    alert("Data telah dihapus  " )
    mutate('http://localhost:3000/api/produk')
    setDeleting(false)
  }
    return(
        <>
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>id_produk</th>
                    <th>nama_produk</th>
                    <th>gambar</th>
                    <th>harga</th>
                    <th>keterangan</th>
                    <th>Up & del</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((Produk,index)=>
                  <tr>
                    <td>{index+1}</td>
                    <td>{Produk.id_produk}</td>
                    <td>{Produk.nama_produk}</td>
                    <td><img
                  className="rounded"
                  src={Produk.gambar}
                  alt="Sampul"
                  style={{ width: '70px', height: '70px' }}
                /></td>
                    <td>{Produk.harga}</td>
                    <td>{Produk.keterangan}</td>
                    <td>
                        <a href={`/admin/updateproduk/?id_produk=${Produk.id_produk}&nama_produk=${Produk.nama_produk}&harga=${Produk.harga}&keterangan=${Produk.keterangan}`}>
                        <button type="button" className="btn btn-primary btn-sm ">update
                        </button></a>
                        <button type="button" className="btn btn-danger btn-sm "
                        disabled={deleting} 
                        value = {Produk.id_produk}
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