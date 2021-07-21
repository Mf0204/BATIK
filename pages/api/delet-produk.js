import { query } from '../../lib/db'

const handler = async (req, res) => {
  const { id_produk } = req.query
  try {
    if (!id_produk) {
      return res.status(400).json({ message: '`id_produk` required' })
    }
    if (typeof parseInt(id_produk.toString()) !== 'number') {
      return res.status(400).json({ message: '`id_produk` must be a number' })
    }
    const results = await query(
      `DELETE FROM produk
      WHERE id_produk = ?`, id_produk
    )
    res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
