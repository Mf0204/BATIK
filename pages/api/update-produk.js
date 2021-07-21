//@ts-check
import { query } from '../../lib/db'

const handler = async (req, res) => {
    const { id_produk,nama_produk,gambar,harga,keterangan} = req.body
    try {
        if  (!id_produk ||!nama_produk ||!gambar ||!harga ||!keterangan ) {
            return res
        .status(400)
        .json({ message: 'input harus di isi semua' })
    }

    const results = await query(
      `
      UPDATE produk 
      SET  id_produk = ?,nama_produk = ?,gambar = ?,harga = ?,keterangan = ?
      WHERE id_produk = ?`, [id_produk,nama_produk,gambar,harga,keterangan,id_produk]
    );
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler