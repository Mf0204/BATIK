
//@ts-check
import { query } from '../../lib/db'

const handler = async (req, res) => {
  const { nama,nama_produk,harga,alamat,telepon} = req.body
  try {
    if  (!nama||!nama_produk ||!harga ||!alamat ||!telepon  ) {
      return res
        .status(400)
        .json({ message: 'input harus di isi semua' })
    }

    const results = await query(
      `
      INSERT INTO pesanan ( nama,nama_produk,harga,alamat,telepon)
      VALUES (?,?,?,?,?)`,[ nama,nama_produk,harga,alamat,telepon]
    );
    // await query.end;

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
