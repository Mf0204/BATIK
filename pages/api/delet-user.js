import { query } from '../../lib/db'

const handler = async (req, res) => {
  const { id_user } = req.query
  try {
    if (!id_user) {
      return res.status(400).json({ message: '`id_user` required' })
    }
    if (typeof parseInt(id_user.toString()) !== 'number') {
      return res.status(400).json({ message: '`id_user` must be a number' })
    }
    const results = await query(
      `DELETE FROM user
      WHERE id_user = ?`, id_user
    )
    res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
