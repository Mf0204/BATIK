//@ts-check
import { query } from '../../lib/db'

const handler = async (req, res) => {
  const { id_produk,nama_produk,gambar,harga,bahan,berat,keterangan} = req.body
  try {
    if  (!id_produk ||!nama_produk ||!gambar ||!harga ||!bahan ||!berat ||!keterangan  ) {
      return res
        .status(400)
        .json({ message: 'input harus di isi semua' })
    }

    const results = await query(
      `
      INSERT INTO produk (id_produk,nama_produk,gambar,harga,bahan,berat,keterangan)
      VALUES (?,?,?,?,?,?,?)`,[id_produk,nama_produk,gambar,harga,bahan,berat,keterangan]
    );
    // await query.end;

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
