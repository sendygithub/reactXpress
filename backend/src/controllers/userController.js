const pool = require("../db/db");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const { nama, nohp, alamat, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (nama, nohp, alamat, password) VALUES ($1,$2,$3,$4) RETURNING *",
      [nama, nohp, alamat, hashedPassword],
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error database" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch {
    res.status(500).json({ message: "Error database" });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.json({ message: "Data berhasil dihapus" });
  } catch {
    res.status(500).json({ message: "Error database" });
  }
};
