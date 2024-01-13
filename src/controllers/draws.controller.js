import { pool } from "../db.js";

export const getDraws = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM draws");
  res.json(rows);
};

export const getDraw = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM draws WHERE id = ?", [
    req.params.id,
  ]);

  if (rows.length <= 0)
    return res.status(404).json({
      message: "Draw not found",
    });

  res.json(rows[0]);
};
