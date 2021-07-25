//@ts-check
import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'
import { useState } from 'react'


export default function CartProduk() {


    const [id, setId] = useState('')
    const [_nama_produk, setProduk] = useState('')
    const [total_harga, setHarga] = useState('')
    const [alamat, setAlamat] = useState('')
    const [telepon, setTelepon] = useState('')
    const [nama, setNama] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const { id_produk, nama_produk,harga} = router.query

    useEffect(() => {
        if (typeof id_produk == 'string') {
            setId(id_produk)
        }
        if (typeof nama_produk == 'string') {
            setProduk(nama_produk)
        }
        // if (typeof gambar == 'string') {
        //   setGambar(gambar)
        // }
        if (typeof harga == 'string') {
            setHarga(harga)
        }
        // if (typeof bahan == 'string') {
        //   setBahan(bahan)
        // }
        // if (typeof berat == 'string') {
        //   setBerat(berat)
        // }
        // if (typeof keterangan == 'string') {
        //   setKet(keterangan)
        // }

    }, [id_produk, nama_produk, harga])
    async function submitHandler(e) {
        e.preventDefault()
        setSubmitting(true)
        try {
            const res = await fetch('http://localhost:3000/api/input-pesanan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_produk: id,
                    nama_produk: _nama_produk,
                    harga: total_harga, nama, alamat, telepon
                }),
            })
            const json = await res.json()
            setSubmitting(false)
            if (!res.ok) throw Error(json.message)

            alert("pesanan anda sedang di proses")
              Router.push('/user/home')
        } catch (e) {
            throw Error(e.message)
        }
    }
    return (

        <>
        <form  onSubmit={submitHandler}>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <center><h4><b>Shopping Cart</b></h4></center>
                            {/* <div className="row">
                    <div className="col">
                    </div>
                    <div className="col align-self-center text-right text-muted">3 items</div>
                  </div> */}
                        </div>
                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2"><img className="img-fluid" /></div>
                                <div className="col">
                                    <div className="row text-muted"
                                        // value = {_nama_produk}
                                        onChange={(e) => setProduk(e.target.value)}
                                    >{nama_produk}</div>
                                    <div className="row">{ }</div>
                                </div>
                                <div className="col">{harga} <span className="close">✕</span></div>
                            </div>
                        </div>
                        <button className="btn btn-light btn-block py-2" type="submit">Back</button>
                    </div>
                    <div className="col-md-4 summary">
                        <div>
                            <h5><b>SHIPPING</b></h5>
                        </div>
                        <hr />
                        <div className="row">
                            {/* <div className="col" style={{paddingLeft: 0}}>ITEMS 3</div>
                  <div className="col text-right">€ 132.00</div> */}
                        </div>
                        <form>
                            <p>Namaproduk</p>
                            <div className="input-group col-lg-12 mb-4">
                                <input
                                    type="text" placeholder="Masukkan Alamat" className="form-control bg-white border-left-0 border-md"
                                    value = {nama_produk} 
                                    onChange = {(e) => setProduk(e.target.value)} />
                            </div>
                        </form>
                        <form>
                            <p>harga</p>
                            <div className="input-group col-lg-12 mb-4">
                                <input
                                    type="text" placeholder="Masukkan Alamat" className="form-control bg-white border-left-0 border-md"
                                    value = {harga} 
                                    onChange = {(e) => setHarga(e.target.value)} />
                            </div>
                        </form>
                        <form>
                            <p>Nama</p>
                            <div className="input-group col-lg-12 mb-4">
                                <input
                                    type="text" placeholder="Masukkan Alamat" className="form-control bg-white border-left-0 border-md"
                                    value = {nama} 
                                    onChange = {(e) => setNama(e.target.value)} />
                            </div>
                        </form>
                        <form>
                            <p>Alamat Pengiriman</p>
                            <div className="input-group col-lg-12 mb-4">
                                <input
                                    type="text" placeholder="Masukkan Alamat" className="form-control bg-white border-left-0 border-md"
                                    value = {alamat} 
                                    onChange = {(e) => setAlamat(e.target.value)} />
                            </div>
                        </form>
                        <form>
                            <p>Telepon</p>
                            <div className="input-group col-lg-12 mb-4">
                                <input
                                    type="text" placeholder="Masukkan Telepon" className="form-control bg-white border-left-0 border-md" 
                                    value = {telepon} 
                                    onChange = {(e) => setTelepon(e.target.value)}/>
                            </div>
                        </form>
                        <br />
                        <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right"
                                //   value = {harga} 
                                  onChange = {(e) => setHarga(e.target.value)}>{total_harga}</div>
                        </div>
                        <a>
                            <button className="btn btn-primary btn-block py-2" type="submit">CheckOut</button>
                        </a>
                    </div>
                </div>
            </div>
            </form>

        </>
    )
}
