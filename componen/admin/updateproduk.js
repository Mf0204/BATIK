//@ts-check
import React from 'react'
import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function admin() {


  const [_id_produk, setId] = useState('')
  const [_nama_produk, setProduk] = useState('')
  const [_gambar, setGambar] = useState(null)
  const [_harga, setHarga] = useState('')
  const [_bahan, setBahan] = useState('')
  const [_berat, setBerat] = useState('')
  const [_keterangan, setKet] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [file, setFile] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { id_produk,nama_produk,gambar,harga,bahan, berat, keterangan } = router.query

  const onSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    const _file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = function () {
      setFile(_file);
      setGambar(reader.result);
    }
    reader.readAsDataURL(_file)
  }
  useEffect(() => {
    if (typeof id_produk == 'string') {
      setId(id_produk)
    }
    if (typeof nama_produk == 'string') {
      setProduk(nama_produk)
    }
    if (typeof gambar == 'string') {
      setGambar(gambar)
    }
    if (typeof harga == 'string') {
      setHarga(harga)
    }
    if (typeof bahan == 'string') {
      setBahan(bahan)
    }
    if (typeof berat == 'string') {
      setBerat(berat)
    }
    if (typeof keterangan == 'string') {
      setKet(keterangan)
    }

  }, [id_produk,nama_produk,gambar,harga,bahan,berat,keterangan])

  async function submitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('http://localhost:3000/api/update-produk', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_produk : _id_produk,
          nama_produk: _nama_produk,
          gambar: _gambar,
          harga: _harga,
          bahan: _bahan,
          berat: _berat,
          keterangan: _keterangan
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)

      alert("Update data suskses" )
      Router.push('/admin/home')
    } catch (e) {
      throw Error(e.message)
    }
  }
  
    return (
      <div className="container ">
      <div className="d-flex flex-column" >
    <div id="page-content-wrapper">
      <div>
        {/* <h1>Tambah Produk</h1> */}
        <form onSubmit={submitHandler}>
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
        <thead>
          <tr>
           <th>ID Produk</th>
           <th>Nama Produk</th>
           <th>Gambar</th>
           <th>Harga</th>
           <th>Bahan</th>
           <th>Berat</th>
           <th>Keterangan</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><input type="text" className="form-control" placeholder="id_produk..." 
            value = {_id_produk} 
            onChange = {(e) => setId(e.target.value)}
            /></td>
            <td><input type="text" className="form-control" placeholder="nama_produk..." 
            value = {_nama_produk} 
            onChange = {(e) => setProduk(e.target.value)}
            /></td>
            <td><input
            className='form-control'
            id="uploadGambar"
            type="file"
            onChange={onSelectImage}
            /></td>
            <td><input type="text" className="form-control" placeholder="harga..." 
            value = {_harga} 
            onChange = {(e) => setHarga(e.target.value)}
            /></td>
            <td><input type="text" className="form-control" placeholder="bahan..." 
            value = {_bahan} 
            onChange = {(e) => setBahan(e.target.value)}
            /></td>
            <td><input type="text" className="form-control" placeholder="berat..." 
            value = {_berat} 
            onChange = {(e) => setBerat(e.target.value)}
            /></td>
            <td><input type="text" className="form-control" placeholder="keterangan..." 
            value = {_keterangan} 
            onChange = {(e) => setKet(e.target.value)}
            /></td>
          </tr>
          <tr>
            <td>
            <button type="submit">Update</button>
            </td>
          </tr>
          </tbody> 
        </table>
        </form>
      </div>
    </div>
    </div>
    <title>Admin Page</title>

    </div>

    )}