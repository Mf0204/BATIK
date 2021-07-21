//@ts-check
import React from 'react'
import Tableproduk from '../../componen/admin/tabelproduk'
import { useState } from 'react'

export default function admin() {
  const [id_produk, setId] = useState('')
  const [nama_produk, setProduk] = useState('')
  const [gambar, setGambar] = useState(null)
  const [harga, setHarga] = useState('')
  const [keterangan, setKet] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [file, setFile] = useState('')
  
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
  const clearInput = () => {
    setId('')
    setProduk('')
    setGambar('')
    setHarga('')
    setKet('')
    setSelectedFile('')
    setFile('')
  }

  async function submitHandler(e) {
    // setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/input-produk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_produk,nama_produk,gambar,harga,keterangan
        }),
      })
      // setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      // Router.push('/')
      alert("Penambahan Data Sukses")
      clearInput()
    } catch (e) {
      throw Error(e.message)
    }
  }
    return (
      <div className="container ">
      <div className="d-flex flex-column" >
    <div id="page-content-wrapper">
      <div>
        <h1>Tambah Produk</h1>
        <form onSubmit={submitHandler}>
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
        <thead>
          <tr>
           <th>ID Produk</th>
           <th>Nama Produk</th>
           <th>Gambar</th>
           <th>Harga</th>
           <th>Keterangan</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><input type="text" className="form-control" placeholder="id_produk..." 
            value = {id_produk} 
            onChange = {(e) => setId(e.target.value)}
            /></td>
            <td><input type="text" className="form-control" placeholder="nama_produk..." 
            value = {nama_produk} 
            onChange = {(e) => setProduk(e.target.value)}
            /></td>
            <td><input
            className='form-control'
            id="uploadGambar"
            type="file"
            onChange={onSelectImage}
            /></td>
            <td><input type="text" className="form-control" placeholder="harga..." 
            value = {harga} 
            onChange = {(e) => setHarga(e.target.value)}
            /></td>
            <td><input type="text" className="form-control" placeholder="keterangan..." 
            value = {keterangan} 
            onChange = {(e) => setKet(e.target.value)}
            /></td>
          </tr>
          <tr>
            <td>
            <button type="submit">Tambah</button>
            </td>
          </tr>
          </tbody> 
        </table>
        </form>
        <h1 className="h3 mb-2 text-gray-800">Tabel Produk</h1>
        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
          For more information about DataTables, please visit the <a target="_blank" >official DataTables documentation</a>.</p>
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
            <Tableproduk/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <title>Admin Page</title>

    </div>

    )}