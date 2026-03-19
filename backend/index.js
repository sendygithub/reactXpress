const express = require("express"); // import express untuk membuat server
const { Pool } = require("pg"); // import PostgreSQL client
require("dotenv").config(); // membaca file .env

const app = express(); // inisialisasi express app

app.use(express.json()); // agar server bisa menerima JSON dari request

// koneksi ke PostgreSQL menggunakan DATABASE_URL dari .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // koneksi database
  ssl: { rejectUnauthorized: false }, // untuk database online
});

// endpoint untuk menyimpan data user
app.post("/users", async (req, res) => {
  const { nama, noHp, alamat, password } = req.body; // ambil data dari body

  try {
    const result = await pool.query(
      "INSERT INTO users (nama, no_hp, alamat, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [nama, noHp, alamat, password], // data yang dimasukkan
    );

    res.json(result.rows[0]); // kirim data hasil insert
  } catch (err) {
    res.status(500).json({ message: "Error database" }); // jika error
  }
});

// endpoint untuk mengambil semua data user
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users"); // ambil semua data
    res.json(result.rows); // kirim data ke client
  } catch (err) {
    res.status(500).json({ message: "Error database" }); // jika error
  }
});

// endpoint untuk menghapus user berdasarkan id
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params; // ambil id dari URL

  try {
    await pool.query(
      "DELETE FROM users WHERE id = $1", // query hapus data
      [id], // id yang akan dihapus
    );

    res.json({ message: "Data berhasil dihapus" }); // respon sukses
  } catch (err) {
    res.status(500).json({ message: "Error database" }); // jika error
  }
});

// jalankan server di port 5000
app.listen(5000, () => {
  console.log("Server jalan di http://localhost:5000"); // info server berjalan
});
