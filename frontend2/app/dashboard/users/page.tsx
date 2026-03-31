/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Bell, PlusCircle, Search, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  UserPlus2,
  ShieldCheck,
} from "lucide-react";

// -- Dummy Data Pengguna --
const usersData = [
  {
    id: 1,
    nama: "Andi Pratama",
    email: "andi.p@email.com",
    nohp: "08123456789",
    alamat: "Jakarta",
    role: "Pasien",
  },
  {
    id: 2,
    nama: "Siti Rahmawati",
    email: "siti.r@email.com",
    nohp: "08569876543",
    alamat: "Bandung",
    role: "Pasien",
  },
  {
    id: 3,
    nama: "Budi Tjahjono",
    email: "budi.t@email.com",
    nohp: "08112233445",
    alamat: "Surabaya",
    role: "Admin",
  },
  {
    id: 4,
    nama: "Dewi Lestari",
    email: "dewi.l@email.com",
    nohp: "08775566778",
    alamat: "Yogyakarta",
    role: "Pasien",
  },
  {
    id: 5,
    nama: "Eko Prasetyo",
    email: "eko.p@email.com",
    nohp: "08134455667",
    alamat: "Medan",
    role: "Pasien",
  },
];

// -- Komponen Header (Kopi dari Dashboard, sesuaikan Judul) --
const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur border-b border-slate-200 py-4 px-8 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">
            Manajemen Data Pengguna
          </h1>
          <p className="text-sm text-slate-500">
            Lihat, tambah, edit, atau hapus data pengguna sistem.
          </p>
        </div>
      </div>
    </header>
  );
};

// -- Komponen Form Input (Dalam Dialog) --
const TambahUserForm = () => {
  const initialForm = {
    id: "",
    nama: "",
    email: "",
    nohp: "",
    alamat: "",
    role: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
    alert("data berhasil di simpan");
    setForm(initialForm);
  };
  return (
    <form
      className="grid grid-cols-2 gap-x-6 gap-y-5 pt-6"
      onSubmit={handleSubmit}
    >
      {/* Header Kecil di dalam Form */}
      <div className="col-span-2 mb-2 flex items-center gap-2 px-1">
        <div className="p-1.5 bg-emerald-100 rounded-lg">
          <UserPlus2 className="w-4 h-4 text-emerald-700" />
        </div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Informasi Personal
        </p>
      </div>

      {/* --- Nama Lengkap --- */}
      <div className="space-y-2 col-span-2">
        <Label htmlFor="nama" className="text-slate-600 font-bold ml-1">
          Nama Lengkap
        </Label>
        <div className="relative group">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
          <Input
            id="nama"
            name="nama"
            placeholder="Andi Pratama"
            onChange={handleChange}
            value={form.nama}
            className="h-12 pl-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm transition-all"
          />
        </div>
      </div>

      {/* --- Email --- */}
      <div className="space-y-2 col-span-2 md:col-span-1">
        <Label htmlFor="email" className="text-slate-600 font-bold ml-1">
          Email
        </Label>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="andi.p@email.com"
            onChange={handleChange}
            value={form.email}
            className="h-12 pl-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm transition-all"
          />
        </div>
      </div>

      {/* --- Nomor HP --- */}
      <div className="space-y-2 col-span-2 md:col-span-1">
        <Label htmlFor="nohp" className="text-slate-600 font-bold ml-1">
          Nomor Handphone
        </Label>
        <div className="relative group">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
          <Input
            id="nohp"
            name="nohp"
            placeholder="0812xxxx"
            onChange={handleChange}
            value={form.nohp}
            className="h-12 pl-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm transition-all"
          />
        </div>
      </div>

      {/* --- Alamat --- */}
      <div className="space-y-2 col-span-2">
        <Label htmlFor="alamat" className="text-slate-600 font-bold ml-1">
          Alamat Domisili
        </Label>
        <div className="relative group">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
          <Input
            id="alamat"
            name="alamat"
            placeholder="Jl. Merdeka No. 10, Jakarta"
            onChange={handleChange}
            value={form.alamat}
            className="h-12 pl-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm transition-all"
          />
        </div>
      </div>

      {/* --- Password --- */}
      <div className="space-y-2 col-span-2">
        <div className="flex justify-between items-center ml-1">
          <Label htmlFor="pass" className="text-slate-600 font-bold">
            Password Sementara
          </Label>
          <span className="text-[10px] text-slate-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Auto-encrypted
          </span>
        </div>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
          <Input
            id="pass"
            name="password"
            type="password"
            placeholder="******"
            onChange={handleChange}
            value={form.password}
            className="h-12 pl-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm transition-all"
          />
        </div>
      </div>

      {/* --- Footer / Buttons --- */}
      <DialogFooter className="col-span-2 pt-8 flex gap-3">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setOpen(false)} // Asumsi menggunakan state open dialog
          className="rounded-xl h-12 px-6 text-slate-500 hover:bg-slate-100"
        >
          Batal
        </Button>
        <Button
          type="submit"
          className="flex-1 md:flex-none h-12 bg-[#0f172a] hover:bg-emerald-700 text-white px-10 rounded-xl font-bold shadow-lg shadow-slate-200 transition-all active:scale-95"
        >
          Simpan Data Pengguna
        </Button>
      </DialogFooter>
    </form>
  );
};

// -- Halaman Utama Data Pengguna --
export default function UsersPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="flex-1">
        <Header />

        <main className="p-8 space-y-8">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div className="space-y-1">
                <CardTitle className="text-xl font-semibold">
                  Daftar Pengguna Aktif
                </CardTitle>
                <CardDescription>
                  Total {usersData.length} pengguna terdaftar.
                </CardDescription>
              </div>

              <div className="flex items-center gap-3">
                {/* Search Bar */}
                <div className="relative w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Cari nama atau email..."
                    className="pl-10 border-slate-200 bg-slate-50 focus-visible:ring-slate-300"
                  />
                </div>

                {/* Dialog/Modal Tambah User */}
                <Dialog>
                  <DialogTrigger>
                    <Button className="gap-2 bg-slate-900 hover:bg-slate-800">
                      <PlusCircle className="w-4 h-4" />
                      Tambah Pengguna
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Tambah Pengguna Baru</DialogTitle>
                      <DialogDescription>
                        Isi data di bawah untuk membuat akun pengguna baru.
                        Pastikan email aktif.
                      </DialogDescription>
                    </DialogHeader>
                    <TambahUserForm />
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-slate-50/50">
                  <TableRow className="border-slate-100">
                    <TableHead className="w-[80px] pl-6 text-slate-600">
                      ID
                    </TableHead>
                    <TableHead className="text-slate-600">
                      Nama Lengkap
                    </TableHead>
                    <TableHead className="text-slate-600">Email</TableHead>
                    <TableHead className="text-slate-600">No. HP</TableHead>
                    <TableHead className="text-slate-600">Alamat</TableHead>
                    <TableHead className="text-slate-600">Role</TableHead>
                    <TableHead className="w-[80px] text-right pr-6 text-slate-600">
                      Aksi
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usersData.map((user, index) => (
                    <TableRow
                      key={user.id}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-slate-50/30"} border-slate-100 hover:bg-slate-100/50 transition-colors`}
                    >
                      <TableCell className="font-medium text-slate-600 pl-6">{`#${String(user.id).padStart(3, "0")}`}</TableCell>
                      <TableCell className="font-semibold text-slate-950">
                        {user.nama}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {user.email}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {user.nohp}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {user.alamat}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${user.role === "Admin" ? "bg-sky-50 text-sky-700" : "bg-emerald-50 text-emerald-700"}`}
                        >
                          {user.role}
                        </span>
                      </TableCell>
                      <TableCell className="text-right pr-6 relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-slate-500 hover:text-slate-950 hover:bg-slate-200/70"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-slate-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination Placeholder */}
              <div className="flex items-center justify-between p-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Menampilkan 1-5 dari 1,284 pengguna
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-200"
                  >
                    Sebelumnya
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-200"
                  >
                    Selanjutnya
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
