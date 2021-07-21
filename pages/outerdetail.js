import React from 'react'
import Outerbatik from '../componen/outerbatik'

export default function footer() {
  const Isi=[
    {imgurl:'blarak.jpg',namaproduk:'Blarak Sempal', price2: 'Rp 699.000', bahan: 'Cotton', berat: '220gr' , delivery: 'Banyuwangi, Jawa Timur', detailproduk: 'LIMITED EDISION Ready stock brownies amanda'},
    // {imgurl:'Atasan.png',namaproduk:'Kemeja Batik Wanita', price: 'Rp 249.000', price2: 'Rp 150.000', bahan: 'Cotton', berat: '220gr' , delivery: 'Banyuwangi, Jawa Timur', detailproduk: 'LIMITED EDISION Ready stock brownies amanda'},
    // {imgurl:'dres.png',namaproduk:'Outer Batik', price: 'Rp 299.000', price2: 'Rp 199.000', bahan: 'Cotton', berat: '220gr' , delivery: 'Banyuwangi, Jawa Timur', detailproduk: 'LIMITED EDISION Ready stock brownies amanda'},
    // {imgurl:'bawahan.png',namaproduk:'Rok Batik', price2: 'Rp 99.000', bahan: 'Cotton', berat: '220gr' , delivery: 'Banyuwangi, Jawa Timur', detailproduk: 'LIMITED EDISION Ready stock brownies amanda'}
  ]
    return (
        <div> 
      <div className='row'>
      {Isi.map((kolom)=>(
        <Outerbatik Imgurl={kolom.imgurl} NamaProduk={kolom.namaproduk} Price={kolom.price} Price2={kolom.price2} Bahan={kolom.bahan} Berat={kolom.berat} Delivery={kolom.delivery} DetailProduk={kolom.detailproduk} />
      ))
    }
    </div>
</div>
    )}