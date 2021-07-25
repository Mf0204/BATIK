import { query } from '../../../lib/db';

const handler = async (req, res) => {
    const {id_produk}= req.query
    try {
      const results = await query(`
        SELECT * FROM produk
        where id_produk =?
    `,[id_produk]); await query.end
  
      return res.json(results)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  }
  
  export default handler