//@ts-check
import { query } from '../../lib/db'

const handler = async (req, res) => {
  const {  nama_user, username, password, email} = req.body
  try {
    if  ( !nama_user || !username || !password || !email ) {
      return res
        .status(400)
        .json({ message: 'input harus di isi semua' })
    }

    const results = await query(
      `
      INSERT INTO user ( nama_user, username, password, email)
      VALUES (?,?,?,?)`,[ nama_user, username, password, email]
    );
    // await query.end;

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
