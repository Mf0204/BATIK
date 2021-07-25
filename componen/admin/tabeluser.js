//@ts-check
import useSWR from 'swr'
import { mutate } from 'swr'
import { useState } from 'react'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
export default function Tableuser() {
    const [deleting, setDeleting] = useState(false)
    const url = 'http://localhost:3000/api/user';
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
    if (error) {
        return <div>error......</div>
      }
      if (!data) {
        return <div>loading......</div>
      }
      async function deleteEntry(value) {
        setDeleting(true)
        let res = await fetch(`http://localhost:3000/api/delet-user?id_user=${value}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        alert("Data telah dihapus  " )
        mutate('http://localhost:3000/api/user')
        setDeleting(false)
      }
    return(
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                  <th>no</th>
                  <th>Nama</th>
                  <th>username</th>
                  <th>pasword</th>
                  <th>Email</th>
                  <th>Up & del</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((User,index)=>
                  <tr>
                    <td>{index+1}</td>
                    <td>{User.nama_user}</td>
                    <td>{User.username}</td>
                    <td>{User.password}</td>
                    <td>{User.email}</td>
                    <td>
                        <a href={`/admin/updateproduk/?id_produk=${User.id_user}&nama_produk=${User.nama_user}&harga=${User.username}&keterangan=${User.password}&email=${User.Email}`}>
                        <button type="button" className="btn btn-primary btn-sm ">update
                        </button></a>
                        <button type="button" className="btn btn-danger btn-sm "
                        disabled={deleting} 
                        value = {User.id_user}
                        onClick={e => deleteEntry(e.target.value)}     
                        >{deleting ? '' : ' ' }
                        delet
                        </button>
                    </td> 
                  </tr>
                  )}
                </tbody>
              </table>
    )
}