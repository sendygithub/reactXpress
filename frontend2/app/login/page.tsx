/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // state form login
  const [form, setForm] = useState({
    nama: "",
    password: "",
  });
  const router = useRouter(); // init router
  const [message, setMessage] = useState(""); // pesan response

  // handle input
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // submit login
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ " + data.message);
      } else {
        setMessage("✅ " + data.message);

        setTimeout(() => {
          router.push("/admin");
        }, 1000); // delay biar user lihat pesan dulu
        console.log("User:", data.user);
      }
    } catch (err) {
      setMessage("❌ Gagal koneksi ke server");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-3 w-[300px]">
        <h1 className="text-xl font-bold">Login</h1>

        <input
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama"
          className="border p-2 w-full"
        />

        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
        />

        <button className="bg-black text-white p-2 w-full">Login</button>

        {/* tampilkan pesan */}
        {message && <p className="text-center">{message}</p>}
      </form>
    </div>
  );
}
